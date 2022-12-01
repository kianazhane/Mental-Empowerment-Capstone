const url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';


const menu = document.querySelector('header');
const header = document.querySelector('main-nav');

//document.getElementById("quote").addEventListener("click", displayDate);

//menu.addEventListener('click', function() {
  
//});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad22b1bf14msh0f3ad872fa58e36p1bdad4jsn97ae05b8518e',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));