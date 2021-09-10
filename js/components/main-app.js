import { LitElement, html } from "lit-element";
import '../contact'
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
        ${this.ban==='contact' ?  html`<component-contact></component-contact>`
        :
         html`<component-contact></component-contact>`
        }
        
    </main>
        `;
    }

}

customElements.define('main-app', MainApp);