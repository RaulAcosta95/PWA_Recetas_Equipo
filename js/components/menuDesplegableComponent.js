import { LitElement, html } from "lit-element";
import './indexComponents'

class menuDesplegableComponent extends LitElement{

    static get properties(){
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
                <h2><span id="title1">${this.title1}</span><span id="title2">${this.title2}</span></h2>

                <button @click=${this.aparecerMenu}><img src='./images/menu.png'></button>
            </div>
            
        `
    }
    aparecerMenu(){
       let menu = document.getElementById('rigth');
       let main = document.getElementById('central');
       if(menu.hasChildNodes()){
            menu.innerHTML = null;      
            menu.style.setProperty("display","none");
            main.style.setProperty("width", "100%");
       }else{
           menu.style.setProperty("display","inline");
           main.style.setProperty("width", "70%");
           menu.innerHTML = '<menu-app></menu-app>'
       }
        
    }
}
customElements.define('menu-desplegable', menuDesplegableComponent);