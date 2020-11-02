class NavBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"})
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                height: 60px;
                background-color: #333333;
                color: white;
                position: fixed;
                top: 0;
                left: 0;
            }
            h2 {
                padding: 16px;
                margin-left: 50px;
                font-weight: normal;
            }
        </style>
        <h2>Movie Catalogue</h2>
        `;
    }
 }
  
 customElements.define("nav-bar", NavBar);