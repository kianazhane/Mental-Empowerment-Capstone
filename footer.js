const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<style>* {
	box-sizing: border-box;
}
body {
	font-family: 'Georgia', sans-serif;
	line-height: 1.6;
	margin: 0;
	min-height: 100vh;
  background-color: #ffffff;
}

footer {
  align-items: center;
  text-align: center;
  padding-bottom: 15px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

h4 {
  color: maroon;
}

h2,
h3,
a {
	color: white;
}

a {
	text-decoration: none;
}



.logo {
  width: 300px;
	margin: 0;
  padding-left: 10px;
  padding-top: 3em;
}

.logo:hover {
    transform: scale(1.1);
}

.header {
  max-height: 80px;
  margin-top: 35px;
	padding-top: .5em;
	padding-bottom: .5em;
	background-color: #D2B48C;
  width: 100%;
}

.main-nav {
	margin-top: 5px;
  text-align: center;
  width: 100%;
}

.main-nav a {
  padding-left: 60px;
  padding-right: 70px;
	text-align: center;
	display: block;
  color: white;
	font-size: .90em;
}


.main-nav a:hover {
	color: sienna;
}

#newq a {
  color: white;
}

#newq a:hover {
  color: black;
}

#hotline {
  width: 120px;
  padding: 5px;
  margin-left: 90%;
  align-items: right;
  text-align: center;
  background-color: maroon;
  color: white;
}

#hotline a:hover {
  color: black;
}

#help {
  width: 120px;
  padding: 5px;
  margin: 0;
  align-items: center;
  text-align: center;
  background-color: maroon;
  color: white;
}

#help a:hover {
  color: black;
}

#banner {
  position: center;
  width: 100%;
}

#img1 {
  margin: auto;
}

.content {
  min-height: 600px;
  margin-top: 0px;
  text-align: center;
  align-items: center;
  position: relative;
  text-align: center;
  background-color: #ffffff;
  margin: 0 0 0 0 0;
  width: 100%;
  padding: 1px;
}

.content2 {
  opacity: 1%;
  min-height: 54px;
}

.content3 {
  min-height: 600px;
  min-height: 54px;
  color: black;
  text-align: center;
  align-items: center;
  background-color: white;
}

.familiar {
  background-color: whitesmoke;
  max-width: 50%;
  margin-left: 25%;
}



.page1 {
  min-height: 800px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  margin-top: -50px;
  margin-bottom: -80px;
  width: 100%;
  padding: 1px;
  color: black;
}

.page2 {
  padding: 1em;
  min-height: 200px;
  text-align: center;
  align-items: center;
  text-align: center;
  background-color: #D2B48C;
  width: 100%;
  color: white;
}

.page3 {
  margin-top: 20px;
  min-height: 200px;
  text-align: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  padding: 1px;
  color: black;
}



#quote-display {
  width: 100%;
  margin-top: 0;
  padding-left: 60px;
  padding-right: 70px;
  align-items: center;
	text-align: center;
  background-color: white;
  color: black;
}


button {
  background-color: maroon;
  width: auto;
  padding: 2px;
  margin: 0;
  align-items: center;
  text-align: center;
  color: white;
}

button a:hover {
color: black;
}




/* ================================= 
  Media Queries
==================================== */

@media (min-width: 769px) {
	.header,
	.main-nav {
		display: flex;
	}
	.header {
		flex-direction: column;
		align-items: center;
    	.header{
		width: 80%;
		margin: 0 auto;
		max-width: 1150px;
	}
	}
}

@media (min-width: 1025px) {
	.header {
		flex-direction: row;
		justify-content: space-between;
	}

}
</style>

<footer>
    Mental Empowerment ©<br>
    <button id="help">
      <a href="help.html">What Do I Do?</a>
    </button>
  </footer>
  `

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('footer-component', Footer);

