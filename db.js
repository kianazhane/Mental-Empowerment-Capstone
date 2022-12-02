// creating the button
const fetchDataBtn = document.querySelector('#fetchdata')
    
// gets data from API and sets the content of the div
  function getRandomQuote() {
    return fetch("https://animechan.vercel.app/api/random")
        .then(response => response.json())
        .then(({quote}) => quote)
}

//render new quote
async function renderNewQuote() {
    document.getElementById('quote-display').textContent = await getRandomQuote()
}

renderNewQuote()
    
    // add event listener for #fetchdata button
    fetchDataBtn.addEventListener('click', getRandomQuote)

