import { LitElement, html } from "lit-element";
import '../contact'
import '../About.js'
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
        ${this.ban==='contact' ?  html`<component-contact 
        tituloContact="FoodNinja" 
        iconoContacto="./images/icons/icon-144x144.png"
        redSocial1="Instagram" 
        linkRedSocial1="https://www.instagram.com/thenetninja/"
        iconoRedSocial1="./images/instagram.png"
        redSocial2="Facebook" 
        linkRedSocial2="https://www.facebook.com/thenetninjauk/"
        iconoRedSocial2="./images/facebook1.png"
        redSocial3="Mail"
        linkRedSocial3="mailto:FoodNinja@gmail.com"
        iconoRedSocial3="./images/correo.png">
        
       </component-contact>`
        :
         html`<component-about titulo="A cerca de nosotros"></component-about>`
        }
        
    </main>
        `;
    }

}

customElements.define('main-app', MainApp);