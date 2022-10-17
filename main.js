import "./style.css";

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
