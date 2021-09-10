import { LitElement, html, css } from "lit-element";
class Contact extends LitElement {
    static get properties(){
        return{
            tituloContact:{type:String},

            redSocial1:{type:String},
            iconoRedSocial1:{type:String},
            linkRedSocial1:{tyoe:String},

            redSocial2:{type:String},
            iconoRedSocial2:{type:String},
            linkRedSocial2:{tyoe:String},

            redSocial3:{type:String},
            iconoRedSocial3:{type:String},
            linkRedSocial3:{tyoe:String},
        }
    }
    static get styles() {
        return css`
    `;
    }
    constructor() {
        super();
        this.tituloContact="";

        this.redSocial1="";
        this. linkRedSocial1="";
        this.iconoRedSocial1="";

        this.redSocial2="";
        this. linkRedSocial2="";
        this.iconoRedSocial2="";

        this.redSocial3="";
        this. linkRedSocial3="";
        this.iconoRedSocial3="";
    }
    render() {
        return html`
        <link rel="stylesheet" href="./css/contact.css">

        <div class="Contact ">
        <img class="Ninja" src="./images/icons/icon-144x144.png" alt="">
        <h3>${this.tituloContact}</h3>
    
        <h2 class="titulo">Contactanos y siguenos en nuestras redes sociales...</h2>
        
    </div><!-- Cierre de  Contact -->
        <div class="grid">
    
        <div class="column">
        <div class="parteS">
        <a href="${this.linkRedSocial1}" target="_blank">
        <img  class="icono" src="${this.iconoRedSocial1}" ></a></div><!-- Cierre de parteS -->
        <div class="parteI">
        <h3>${this.redSocial1}</h3>
        <p>Aquí encontraras mas información sobre FoodNinja</p>
        </div><!-- Cierre de parteI -->
        </div><!-- Cierre de column -->
    
        <div class="column">
        <div class="parteS">
        <a href="${this.linkRedSocial2}" target="_blank">
        <img class="icono" src="${this.iconoRedSocial2}" alt=""></a>
        </div><!-- Cierre de parteS -->
        <div class="parteI">
        <h3>${this.redSocial2}</h3>
        <p>Aquí encontraras mas información sobre FoodNinja</p>
        </div><!-- Cierre de parteI -->
        </div><!-- Cierre de column -->
    
        <div class="column">
        <div class="parteS">
        <img class="icono" src="${this.iconoRedSocial3}"></a>
        </div><!-- Cierre de parteS -->
        
        <div class="parteI">
        <h3>${this.redSocial3}</h3>
        <p>Envianos tus dudas y sugerencias a </p> <a href="${this.linkRedSocial3}" class="mail">FoodNinja@gmail.com</a>
        
        </div><!-- Cierre de parteI -->
       </div><!-- Cierre de column -->
       </div><!-- Cierre de grid -->
        `;


    }
}
customElements.define('component-contact', Contact);