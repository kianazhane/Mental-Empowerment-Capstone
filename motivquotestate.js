// Import our database
import Database from "./database.js";

// Create a new state manager
export default class StateManager {
  constructor() {
    // initialize the data store.
    // This is our state. When anything changes
    // with any of these variables, we need to
    // notify out components:
    this.quotes = [];
    this.searchResults = [];
    this.favorites = [];
    this.subscribers = [];
    this.searchMode = true;
    this.showNotes = false;
    this.database = new Database();
    this.loadFavorites();

    // Listening so that any time a "like-requested" event happens, it
    // will call the "saveQuoteToFavorites" method.

    this.subscribe("like-requested", this.saveQuoteToFavorites.bind(this));
    this.subscribe("quote-found", this.setSearchResults.bind(this));
    this.subscribe("favorites-loaded", this.setFavorites.bind(this));
    this.subscribe("show-notes", this.toggleNotes.bind(this));
    this.subscribe("save-requested", this.saveQuoteToFavorites.bind(this));
  }

  setSearchResults(quoteDataList) {
    this.searchResults = quoteDataList;
    this.quotes = this.searchResults;
  }

  setFavorites(quoteDataList) {
    this.favorites = quoteDataList;
    this.quotes = this.favorites;
  }

  toggleNotes(val) {
    this.showNotes = val;
    this.notify("redraw", this.quotes);
  }

  // A method to read a user's favorites from IndexedDB  when the page first loads.
  loadFavorites() {
    // reads from IndexDB and stores the
    // data to "this.favorites." Then,
    // notifies any interested componenets.
    const callbackFunction = function (quoteDataList) {
      this.notify("favorites-loaded", quoteDataList);
    };
    // invoke the getAll function
    // going to load all the records and then notify everyone
    this.database.getAll(callbackFunction.bind(this));
  }

  // A method to add a new movie to the user's
  // favorites and save it to IndexedDB.
  saveMovieToFavorites(quoteData) {
    // appends the movie to this.favorites and
    // stores it in the DB.
    console.log("I am about to save the quote to the DB!");
    console.log(quoteData);
    this.database.addOrUpdate(quoteData, function () {
      console.log("Successfully added to the database");
    });
  }

  // A method to notify components that something has changed.
  notify(eventName, data) {
    // loops through all of the subscribers and invokes the subscribers's function
    // if they're interested in the particular event
    for (let i = 0; i < this.subscribers.length; i++) {
      const subscriber = this.subscribers[i];

      const subscriberEvent = subscriber[0];
      const callbackFunction = subscriber[1];
      // is event that was just fired something

      if (eventName == subscriberEvent) {
        callbackFunction(data);
      }
    }
  }

  subscribe(eventName, callbackFunction) {
    // when a components wants to scbsxribe to the stateManager,
    // they need to tell the sataeManager which event they're interested in,
    // and what should happen if that event is fired (callback function).
    this.subscribers.push([eventName, callbackFunction]);
  }
}