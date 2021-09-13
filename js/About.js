import './contact.js'
import { LitElement,html,css } from "lit-element";
class About extends LitElement{
    static get properties(){
        return{
            titulo:{type: String}
        }
    }
    static get styles(){
        return css`
        *{
            font-family: 'Raleway', sans-serif;
        }
        img{
        margin-top: 3%;
        border-radius: 50%;
        margin-left: 44%;
        box-shadow:0 10px 20px rgba(0, 0, 0, 0.09), 0 6px 6px rgba(0, 0, 0, 0.23);
            
        }
        h2{
            text-align:center;
        }
        p{
            font-weight: bold;
            margin-left:15%;
            width:70%;
            text-align:justify;
        }
        @media screen and (max-width:800px) {
          img{
                    margin-left:37%;
                }`;
    }
    constructor(){
        super();
        this.titulo=""
    }
    render(){
        return html`
        <img src="./images/icons/icon-144x144.png" >
         <h2>${this.titulo}</h2>
         <p>Lorem Ipsum es simplemente el texto de relleno de las 
         imprentas y archivos de texto. Lorem Ipsum ha sido el texto
          de relleno estándar de las industrias desde el año 1500, 
          cuando un impresor (N. del T. persona que se dedica a la imprenta)
           desconocido usó una galería de textos y los mezcló de tal manera 
           que logró hacer un libro de textos especimen. No sólo sobrevivió 
           500 años, sino que tambien ingresó como texto de relleno en documentos
            electrónicos, quedando esencialmente igual al original. Fue popularizado
             en los 60s con la creación de las hojas "Letraset", las cuales 
             contenian pasajes de Lorem Ipsum, y más recientemente con software
              de autoedición, como por ejemplo Aldus PageMaker, el cual incluye
               versiones de Lorem Ipsum.</p>

               
        `;
    }
}
customElements.define('component-about',About);