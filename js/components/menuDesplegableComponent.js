import { LitElement, html } from "lit-element";
import './indexComponents'

class menuDesplegableComponent extends LitElement{

    static get properties(){
        // hoiiohio
        return{
            title1: {type: String},
            title2: {type: String},
            backgroundColorRGB: {type: String},
            textTitleColorRGB1: {type: String},
            textTitleColorRGB2: {type: String}
        }
    }
    constructor(){
        super();
        this.title1 = "";
        this.title2 = "";
        this.backgroundColorRGB = '255, 233, 209';
        this.textTitleColorRGB1 = '203, 134, 63';
        this.textTitleColorRGB2 = '231, 192, 154';

    }
    
    render(){
        return html `
        <style>
            .menuDesplegableComponent *{
                margin:0;
                padding:0;
            }

            .menuDesplegableComponent{
                background-color: rgb(${this.backgroundColorRGB});
                height:40px;
                width: 100vw;
                display: flex;
                align-items: center;
                font-family: sans-serif;
            }
            .menuDesplegableComponent #title1{
                color: rgb(${this.textTitleColorRGB1});

            }
            .menuDesplegableComponent #title2{
                color: rgb(${this.textTitleColorRGB2});
            }
            .menuDesplegableComponent h2{
                text-align: center;
                float: left;
                width: 90vw;
            }
            .menuDesplegableComponent button{
                border:none;
                background-color:rgba(172, 128, 128,.0);
                right: 20px;
                width: 10vw;
                cursor:pointer;
                position: absolute;
            }

        </style>
       

            <div class="menuDesplegableComponent">
                <h2><span id="title1" @click=${this.apreceListado}>${this.title1}</span><span id="title2" @click=${this.apreceListado}>${this.title2}</span></h2>
                <button @click=${this.aparecerMenu}><img src='./images/menu.png'></button>
            </div>
            
        `
    }
    apreceListado(){
        let main = document.getElementById('central');
        if(main.hasChildNodes()){
            main.innerHTML = null;   
            main.innerHTML = '<lista-recetas></lista-recetas>'   
        }else{
            main.innerHTML = '<lista-recetas></lista-recetas>'
        }
    }

    aparecerMenu(){
       let menu = document.getElementById('rigth');
       let main = document.getElementById('central');
       if(menu.hasChildNodes()){
            menu.innerHTML = null;      
            menu.style.setProperty("display","none");
            menu.style.setProperty("z-index","-1");
       }else{
           menu.style.setProperty("display","inline");
           menu.style.setProperty("z-index","1");
            menu.innerHTML = '<menu-app></menu-app>'
       }
        
    }
}
customElements.define('menu-desplegable', menuDesplegableComponent);