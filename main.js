import "./style.css";
import 

const url = 'https://mental-health-info-api.p.rapidapi.com/news/thetimes';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${import.meta.env.VITE_API_KEY}`,
    'X-RapidAPI-Host': 'mental-health-info-api.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));


// //axios  
//  // .request(options)
//  // .then(function (response) {
// // console.log(response.data);

//     document.querySelector("#app").innerHTML = `
//   <div>    
//     <h1>Mental Empowerment!</h1>
//     <h2>Our Sites</h2>
//     <h3>${response.data[0].title}</h3>
//     <a href="${response.data[0].url}">read more</a>
//       </div>
// `;
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


//motivational quote api
//don't forget to credit the source
//fetch
const fetch = require('node-fetch');

const url = 'https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ad22b1bf14msh0f3ad872fa58e36p1bdad4jsn97ae05b8518e',
    'X-RapidAPI-Host': 'healthruwords.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));