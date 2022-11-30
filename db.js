

/*connecting to the database*/
let db;
let dbReq = indexedDB.open('myQuotes', 1);

dbReq.onupgradeneeded = function(event){
/*set the db variable to our database so we can use it*/

db = event.target.result;

//create object store in database to hold data/quotes stored
let quotes = db.createObjectStore('quotes', {autoIncrement: true});
}

//need to add quotes

dbReq.onsuccess = function(event) {
  db = event.target.result;
}

dbReq.onerror = function(event){
  alert('error opening database ' + event.target.errorCode);

}

//adding Quotes to the database
function addQuote(db, message) {
  let quote = db.transaction(['quotes'], 'readonly');
  let store = quote.objectStores('quote');

}


//displaying quotes
function displayNotes(quote) {
    let listHTML = '<ul>';
    for (let i = 0; i < quote.length; i++) {
      let quote = quote[i];
      listHTML += '<li>' + quote.text + ' ' + 
        new Date(note.timestamp).toString() + '</li>';
    }
    document.getElementById('quote').innerHTML = listHTML;























/*let db;
let dbReq = indexedDB.open('myDatabase', 1);
dbReq.onupgradeneeded = function(event) {
  // Set the db variable to our database so we can use it!  
  db = event.target.result;

  // Create an object store named notes. Object stores
  // in databases are where data are stored.
  let notes = db.createObjectStore('notes', {autoIncrement: true});
}
dbReq.onsuccess = function(event) {
  db = event.target.result;
}
dbReq.onerror = function(event) {
  alert('error opening database ' + event.target.errorCode);
}

function displayNotes(notes) {
    let listHTML = '<ul>';
    for (let i = 0; i < notes.length; i++) {
      let note = notes[i];
      listHTML += '<li>' + note.text + ' ' + 
        new Date(note.timestamp).toString() + '</li>';
    }
    document.getElementById('notes').innerHTML = listHTML;
  }