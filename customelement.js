// Define a custom element
class Resources extends HTMLElement {
    // Set up the properties we'll want to use later
    constructor() {
      // Whenever calling constructor on an extended class, you need to call super first to run the base class's constructor
      super();
      this.resources;
    }
    
    // Look for changes in the "Resources" attribute in HTML
    static get observedAttributes() {
      return ["src", "description"];
    }
  
    // Do something when an attribute has changed
    attributeChangedCallback(property, oldValue, newValue) {
      // If nothing's changed, stop execution
      if (oldValue === newValue) return;
  
      // If it's the name property, change the correct value
      if (property === "resources") {
        // If Resources exists, set it's textContent to the resource
        // It shouldn't exist until connectedCallback is fired, which may happen after this is run for the first time
        if (this.resourcesPlaceholder) {
          this.resourcesPlaceholder.textContent = newValue;
        }
      }
      if(property === "src") {
        this.imgSource.src = newValue;
      }
      if(property === "description") {
        this.imgDescription.textContent = newValue;
      }
    }
  
    connectedCallback() {
      // Create a new "open" shadow root so we can manipulate it
      const shadow = this.attachShadow({ mode: "open" });
      // Get the template we made in our HTML and clone it so we can use it in our component
      const template = document
        .getElementById("MENTALEMPOWERMENT")
        .content.cloneNode(true);
  
      // Add the template to our shadow root
      shadow.append(template);
  
      // Save the element we want to use for "name" so we can set it later
      this.resourcesPlaceholder = this.shadowRoot.querySelector("span");
      this.imgSource = this.shadowRoot.querySelector("img");
      this.imgDescription = this.shadowRoot.getElementById("description");
  
      // Get initial value
      const resources = this.getAttribute("resources");
      if (resources) {
        this.resourcesPlaceholder.textContent = resources;
      }
      
      const img = this.getAttribute("src");
      if (img) {
        this.imgSource.src = img;
      }
      
      const descript = this.getAttribute("description")
      if (descript) {
        this.imgDescription.textContent = descript;
      }
    }
  }
  
  customElements.define("user-info", UserInfo);
  
  document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector("#image");
    const imageSource = document.querySelector("#image-source");
    const description = document.querySelector("#description");
    
    image.addEventListener("input", (e) => {
      imageSource.setAttribute("src", e.target.value);
    })
    
    description.addEventListener("input", (e) => {
      imageSource.setAttribute("description", e.target.value);
    })
    
  });
  