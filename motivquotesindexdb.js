let db;
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

// function displayNotes(notes) {
//     let listHTML = '<ul>';
//     for (let i = 0; i < notes.length; i++) {
//       let note = notes[i];
//       listHTML += '<li>' + note.text + ' ' + 
//         new Date(note.timestamp).toString() + '</li>';
//     }
//     document.getElementById('notes').innerHTML = listHTML;
//   }