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
        *{
            font-family: 'Raleway', sans-serif;
        }
        .grid{
            margin-top: 2px;;
            width: 60%;
            height: 250px;
            margin-left: 20%;
            padding: 2px;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3,1fr);
            grid-auto-rows: minmax(100px,auto);
        }
        .icono{
            margin-left: 40%;
            margin-top: 3px;
        }
        .parteS{
            background: linear-gradient(90deg, #f79436 0%, #fc821c 100%);
            height: 65px;
            border-top: 5px;
            margin-left: -4px;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
        }
        
        
        
        
        .Ninja{
            margin-top: 3%;
            border-radius: 50%;
            margin-left: 44%;
            box-shadow:0 10px 20px rgba(0, 0, 0, 0.09), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
        h2,p,h3{
            padding: 2px;
            text-align: center;
        }
        p{
            font-weight: bold;
        }
        a{
            text-decoration: none;
            color: #e58a19f7;
            
        }
        .column{
            box-shadow:0 10px 20px rgba(0, 0, 0, 0.09), 0 6px 6px rgba(0, 0, 0, 0.23);
            padding-left: 4px;
            border-width: 2px;
            border-radius: 5px;
            border-color: rgb(28, 14, 41);
        }
        .titulo{
            padding-bottom: 0%;
            
        }
        .mail{
            margin-left: 5%;
            text-align: justify;
            font-weight: bold;
        }
        
        @media screen and (max-width:800px) {
        .grid{
            margin-top: 5%;
            margin-left: 28%;
            grid-template-columns: 1fr;
            height: 700px;
            width: 50%;
            }
           
        .Ninja{
                margin-left: 37%;
            }
           
        
        }
        .column:hover{
            box-shadow:0 10px 20px rgba(0, 0, 0, 0.35), 0 7px 14px rgba(0, 0, 0, 0.19);
        }
         
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