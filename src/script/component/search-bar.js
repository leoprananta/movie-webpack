class SearchBar extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   connectedCallback(){
       this.render();
   }
  
   set clickEvent(event) {
       this._clickEvent = event;
       this.render();
   }
 
   get value() {
       return this.shadowDOM.querySelector("#searchElement").value;
   }
 
   render() {
       this.shadowDOM.innerHTML = `
       <style>
        .search-container {
            max-width: 800px;
            padding: 16px;
            display: flex;
        }
        
        .search-container > input {
            width: 75%;
            border: 0;
            color: grey;
            font-weight: normal;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            font-size: 16px;
            border-radius: 4px;
        }
        
        .search-container > input:focus {
            outline: 0;
        }
        
        .search-container > input:focus::placeholder {
            font-weight: normal;
        }
        
        .search-container >  input::placeholder {
            color: grey;
            font-weight: normal;
        }
        
        .search-container > button {
            width: 23%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            font-size: 16px;
            border-radius: 6px;
            background-color: #333333;
            color: white;
            border: 0;
        }

        .search-container > button:focus {
            outline: 0;
            background-color: #333333;
        }

        .search-container > button:hover {
            outline: 0;
            background-color: #e67e22;
        }
        
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
            }
        
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
        
            .search-container > button {
                width: 100%;
            }
        }
       </style>
       <div id="search-container" class="search-container">
           <input placeholder="Try with avengers..." id="searchElement" type="search">
           <button id="searchButtonElement" type="submit">Search</button>
       </div>
       `;
 
       this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
   }
}
 
customElements.define("search-bar", SearchBar);