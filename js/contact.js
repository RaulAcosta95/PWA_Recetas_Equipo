import { LitElement, html, css } from "lit-element";
class Contact extends LitElement {
    static get properties(){
        return{
            tituloContact:{type:String},
            iconoContacto:{type:String},

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
        .Contact{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
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
            margin-top: 8px;
        }
        .parteS{
            background: linear-gradient(90deg, rgb(255 233 209) 0%, rgb(247 147 54) 100%);
            height: 65px;
            border-top: 5px;
            border-top-right-radius: 5px;
            border-top-left-radius: 5px;
        }
        
        
        
        
        .Ninja{
            margin-top: 3%;
            border-radius: 50%;
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
            display: flex;
    flex-direction: column;
    flex-wrap: wrap;
            box-shadow:0 10px 20px rgba(0, 0, 0, 0.09), 0 6px 6px rgba(0, 0, 0, 0.23);
            
            border-width: 2px;
            border-radius: 5px;
            border-color: rgb(28, 14, 41);
        }
        .titulo{
            margin-top: -9px;
            position: relative;
            
        }
        .mail{
           
            font-weight: bold;
        }
        
        @media screen and (max-width:800px) {
        
.grid {
    display: flex;
    margin-top: 5%;
    grid-template-columns: 1fr;
    height: 700px;
    flex-direction: column;
    align-items: center;
            }
           
            .icono{
                margin-left: 41%;
               
            }
        .Ninja{
                justify-content:center;
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
        this.iconoContacto="";

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

        <div class="Contact ">
        <img class="Ninja" src="${this.iconoContacto}" alt="">
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
        <p>Envianos tus dudas y sugerencias al correo: <a href="${this.linkRedSocial3}" class="mail">FoodNinja@gmail.com</a></p>
        
        </div><!-- Cierre de parteI -->
       </div><!-- Cierre de column -->
       </div><!-- Cierre de grid -->
        `;


    }
}
customElements.define('component-contact', Contact);