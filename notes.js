function addStickyNote(db, message) {
    // Start a database transaction and get the notes object store
    let tx = db.transaction(['notes'], 'readwrite');
    let store = tx.objectStore('notes');
    // Put the sticky note into the object store
    let note = {text: message, timestamp: Date.now()};
    store.add(note);
    // Wait for the database transaction to complete
    tx.oncomplete = function() { console.log('stored note!') }
    tx.onerror = function(event) {
      alert('error storing note ' + event.target.errorCode);
    }
  }