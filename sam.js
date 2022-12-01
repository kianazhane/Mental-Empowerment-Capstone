// Import our database
import { database } from "./database";

// Lines in questions: 31-37, 142-145,

// Create a new state manager
class StoreManager {
  constructor(init = {}) {
    // Grab the current "this" context
    const self = this;
    // Create an array for subscribers
    this._subscribers = [];

    // // Wait for our database to be ready
    database.then(async (db) => {
      // When ready, make the database available to the state manager
      this.db = db;

      // Get the key from the database
      const key = await db.get("settings", "key");
      if (key) {
        this._state.key = key;
      }

      // Get favorites from the database
      const favorites = await db.get("settings", "favorites");
      if (favorites) {
        this._state.favorites = favorites;
      }

      // Get notes from the database
      const notes = await db.getAll("notes");
      if (notes.length) {
        this._state.notes =
          Object.fromEntries(notes.map(({ imdbID, note }) => [imdbID, note])) ||
          {};
      }
    });

    // Create the internal state proxy
    this._state = new Proxy(init, {
      // Make set an async function so we can use our database to save it when it's updated
      async set(target, key, value) {
        // Set the key equal to the value
        target[key] = value;

        // Save items to the database, if it's available
        if (self.db) {
          if (key === "key") {
            await self.db.put("settings", value, "key");
          }

          if (key === "favorites") {
            await self.db.put("settings", value, "favorites");
            const quotes = target.quotes
              .filter((quote) => value.includes(quote.imdbID))
              .map((quote) => self.db.put("quotes", quote));

            await Promise.all(quotes);
          }

          if (key === "notes") {
            await Promise.all(
              Object.entries(value).map(([id, note]) =>
                self.db.put("notes", { note, imdbID: id })
              )
            );
          }
        }

        // Loop through each subscriber and call them
        for (const subscriber of self._subscribers) {
          subscriber(target);
        }

        // Return true to indicate that the set was successful
        return true;
      },
    });
  }

  // Let things subscribe to the state manager
  subscribe(cb) {
    if (typeof cb !== "function") {
      throw new Error("Callback is not a function");
    }
    this._subscribers.push(cb);
    cb(this._state);
  }

  // Get the current state
  state(key) {
    if (key) {
      return this._state[key];
    }
    return this._state;
  }

  // Action to add a comment to the state
  search(lookup) {
    if (lookup.key) {
      this._state.key = lookup.key;
    }

    this._state.search = {
      title: lookup.title,
      year: lookup.year || "",
    };

    this._state.error = "";

    this.quoteLookup();
  }

  reset() {
    this._state.search = null;
    this._state.quotes = [];
  }

  toggleNoteVisibility(id) {
    const visibility = this.state("visibleNotes") || {};
    if (visibility[id] === true) {
      visibility[id] = false;
    } else {
      visibility[id] = true;
    }
    this._state.visibleNotes = visibility;
  }

  toggleFavorite(id) {
    const favorites = this.state("favorites") || [];

    if (favorites.includes(id)) {
      favorites.splice(favorites.indexOf(id), 1);
    } else {
      favorites.push(id);
    }

    this._state.favorites = favorites;
  }

  setNote(id, note) {
    const notes = this.state("notes") || {};
    notes[id] = note;
    this._state.notes = notes;
  }

  async quoteLookup() {
    let key = this.state("key");
    let search = this.state("search");

    if (!key) {
      return (this._state.error = "No API Key");
    }

    let query = `https://www.omdbapi.com/?apikey=${key}&s=${search.title}`;
    if (search.year) {
      query += `&y=${search.year}`;
    }

    try {
      const response = await fetch(query);
      const data = await response.json();
      if (data.Response === "False") {
        // Show error message
        this._state.error = data.Error;
      }

      // Make sure this is an array
      if (Array.isArray(data.Search)) {
        this._state.quotes = data.Search;
      } else {
        this._state.quotes = [];
      }
    } catch (e) {
      this._state.error = e.message;
    }
  }
}

export const store = new StoreManager({ search: "", quotes: [] });
