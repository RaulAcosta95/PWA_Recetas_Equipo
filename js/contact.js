import { LitElement, html, css } from "lit-element";
class Contact extends LitElement {
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
    }
    render() {
        return html`

        <div class="Contact ">
        <img class="Ninja" src="./images/icons/icon-144x144.png" alt="">
        <h3>FoodNinja</h3>

        <h2 class="titulo">Contactanos y siguenos en nuestras redes sociales...</h2>
        <div class="gridP">
  <div class="pelota" id="pel"></div>
  <div class="pelota2" id="pel"></div>
  <div class="pelota3" id="pel"></div>
</div>
</div>
        <div class="grid">

        <div class="column">
        <div class="parteS">
        <a href="https://www.instagram.com/thenetninja/">
        <img  class="icono" src="./images/icons/instagram.png" alt=""></a></div>
        <div class="parteI">
        <h3>Instagram</h3>
        <p>Aquí encontraras mas información sobre FoodNinja</p>
        </div>
        </div>

        <div class="column">
        <div class="parteS">
        <a href="https://www.facebook.com/thenetninjauk/">
        <img class="icono" src="./images/icons/facebook1.png" alt=""></a>
        </div>
        <div class="parteI">
        <h3>Facebook</h3>
        <p>Aquí encontraras mas información sobre FoodNinja</p>
        </div>
        </div>

        <div class="column">
        <div class="parteS">
        <img class="icono" src="./images/icons/correo.png"></a>
        </div>
        <div>
        <div class="parteI">
        <h3>Correo</h3>
        <p>Envianos tus dudas y sugerencias a </p> <a href="mailto:FoodNinja@gmail.com" class="mail">FoodNinja@gmail.com</a>
        </div>
        </div>
       </div>
       </div>
        `;


    }
}
customElements.define('component-contact', Contact);