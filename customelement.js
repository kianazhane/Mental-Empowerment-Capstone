class Header extends HTMLElement {
    constructor() {
      super();
    }
  

  connectedCallback(){
    this.innerHTML
    <header>
        <nav>
          <ul>
            <li><a href="resources.html">Resources</a></li>
            <li><a href="mhprof.html">Mental Health Professionals</a></li>
            <li><a href="motivquotes.html">Motivational Quotes</a></li>
            <li><a href="supportgroup.html">Support Group</a></li>
            <li><a href="contact.html">Contact Us</a></li>
          </ul>
        </nav>
      </header>;
  }
} 
  customeElements.define('header-component', Header);


