/* to declaire variable */

function myQuote() {

  /* used document.querySelect to get certain info from url */

  //const quote = document.querySelector("#quote").value;
  //const character = document.querySelector("#character").value;
  const url = `https://animechan.vercel.app/api/random`;

  console.log(url);

  /* Get specific movie info from API result */

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      /* specific info  */

      const motivQuote = document.getElementById('quote');
      const escapeQuote = escape(data.quote)
      motivQuote.innerHTML = `
    <div>
    <h4>" <em>${data.quote}</em> "</h4>
    <h5> -${data.character}</h5>
    <button onclick = "addToIndexDB('${data.quote}')"
        <p>Add to Favorites ♥</p>
      </button>
</div>
    `;

      console.log(data.quote);
      console.log(data.character);
    });
  
    // <button onclick = "addToIndexDB(\'${data.quote}\')"
  
};



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
function addToIndexDB(quote) {
  let quotes = db.transaction(['quotes'], 'readwrite');
    console.log('step1')
  let store = quotes.objectStore('quotes');
    console.log(quote)
  store.add(quote);
    console.log('step3')

  
// Wait for the database transaction to complete
  quote.oncomplete = function() { console.log('stored note!') }
  quote.onerror = function(event) {
  alert('error storing note ' + event.target.errorCode);
  }
}


function showFavorites() {
  // Set up an object store and transaction
    let tx = db.transaction(['quotes'], 'readwrite');
    let store = tx.objectStore('quotes');
// Set up a request to get the sticky note with the key 1
    let resp = store.getAll();
// We can use the note if the request succeeds, getting it in the
// onsuccess handler
  
  console.log(resp);

  
  resp.onsuccess = (event) => {
     let listHTML = '<ul>';

      for (var i = 0; i < resp.result.length; i++) {
     //     console.log(resp.result[i])
            let quote = resp.result[i];
            listHTML += '<li>' + quote + ' ' 
      }
       
            
  document.getElementById('favs').innerHTML = listHTML;
  
  
  
// If we get an error, like that the note wasn't in the object
// store, we handle the error in the onerror handler

  }
  resp.onerror = function(event) {
  alert('error getting note 1 ' + event.target.errorCode);
}
}