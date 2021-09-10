import { LitElement, html, css } from "lit-element";
class Contact extends LitElement {
    static get styles() {
        return css`
    `;
    }
    constructor() {
        super();
    }
    render() {
        return html`
        <link rel="stylesheet" href="./css/contact.css">

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