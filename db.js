

/*connecting to the database*/
let db;
let dbReq = indexedDB.open('myQuotes', 1);

dbReq.onupgradeneeded = function(event){
/*set the db variable to our database so we can use it*/

db = event.target.result;

//create object store in database to hold quotes stored
let quotes = db.createObjectStore('quotes', {autoIncrement: true});
}

//need to incorporate error catchers

dbReq.onsuccess = function(event) {
  db = event.target.result;
}

dbReq.onerror = function(event){
  alert('error opening database ' + event.target.errorCode);

}

//adding quotes to the database
function addQuotes() {
  let quotes = db.transaction(['quotes'], 'readonly');
  let store = quotes.objectStores('quotes');

}


//displaying data/quotes
function displayQuotes(quotes) {
    let listHTML = '<ul>';
    for (let i = 0; i < quotes.length; i++) {
      let data = data[i];
      listHTML += '<li>' + quotes.text + ' ' + 
        new Date(note.timestamp).toString() + '</li>';
    }
   
const newQuote = document.getElementById('newQuote')
newQuote.addEventListener('click', getQuote); 

// new quote on button click
window.onload = getData; 

// new quote on page load
    
    document.getElementById('quote').innerHTML = listHTML;
  }























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
  }*/