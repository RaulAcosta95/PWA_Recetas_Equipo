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
        .icono{
        margin-top:3%;
        border-radius: 50%;
        box-shadow: rgb(0 0 0 / 9%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;  
        }
       
        
        p{
            font-weight: bold;
            text-align:justify;
            width: 72%;
             
        }
        @media screen and (max-width:800px) {
         
        p {
            word-spacing: max(1vw);
            text-align: justify;
            -webkit-hyphens: auto; /* el prefijo para soportar a Safari */
            hyphens: auto;
            
        }   
                }
            
        .container{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-contennt:flex-start;
            }
            
            `;
        }

    constructor(){
        super();
        this.titulo=""
    }
    render(){
        return html`
        
        <div class="container">
               <img  class="icono" src="./images/icons/icon-144x144.png" >
        
         <h2>${this.titulo}</h2>
         <p>Lorem Ipsum es simplemente el texto de relleno de las 
         imprentas y archivos de texto. como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado 
         en los 60s con la creación de las hojas "Letraset".<br> <br>Lorem Ipsum ha sido el texto de relleno 
         estándar de las industrias desde el año 1500, cuando un impresor (N. 
         del T. persona que se dedica a la imprenta)
                desconocido usó una galería de textos y los mezcló de tal manera 
                que logró hacer un libro de textos especimen.<br> No sólo sobrevivió 
                500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado 
                en los 60s con la creación de las hojas "Letraset".</p>
  
              </div> 
        `;
    }
}
customElements.define('component-about',About);