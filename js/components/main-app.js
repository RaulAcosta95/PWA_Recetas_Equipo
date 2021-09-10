import { LitElement, html } from "lit-element";

class MainApp extends LitElement{

    static get properties(){
        return {
            ban:{type:String},
        };
    }
    constructor(){
        super();
        this.ban='home';
    }

    render(){
        return html`
        <main>
        ${this.ban==='about' ?  html`<p>Soy About</p>`
        :
        
         html`<p>Soy Contact</p>`
        }
        
    </main>
        `;
    }

}

customElements.define('main-app', MainApp);