const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad22b1bf14msh0f3ad872fa58e36p1bdad4jsn97ae05b8518e',
		'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
	}
};

fetch('https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));