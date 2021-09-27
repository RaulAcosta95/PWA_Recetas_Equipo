import { html, LitElement, css } from "lit-element";
import './indexComponents'
export class buttonComponent extends LitElement {

    static get styles() {
        return css`
        *{
            margin: 0;
            padding: 0;
        }
        body{
            font-family: 'Calibri';
            font-size: 16px;
            background: var(--bgColor);
            position: relative;
        }
        
        :host{
            --bgColor: #00415A;
            --primaryColor: #ff8d00;
            --colorHover:  #ff8d00;
            --sizeIcons: 33px;
        }
        .menu-item img{
            width: var(--sizeIcons);
        }
        .menu-content{
            display: flex;
            justify-content: center;
        }
        .menu-item{
            background: var(--primaryColor);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            position: absolute;
            bottom: 45px;
        }
        .menu-item:hover{
            background: var(--colorHover);
        }    
        `;
    }

    render() {
        return html`
        <body>
            <div class="menu-content">
                <span class="menu-item"><img src='./images/icons/plus.png' @click="${this.formulario}"></span>
            </div>
        </body>
        `;
    }

    formulario(){
        let menu = document.getElementById('left');
        if(menu.hasChildNodes()){
             menu.innerHTML = null; 
            
             menu.style.setProperty("display","none");
             menu.style.setProperty("z-index","-1");
        }else{
           
            menu.style.setProperty("display","inline");
            menu.style.setProperty("z-index","1");
            menu.innerHTML = '<formulario-receta></formulario-receta>'
        }     

       
    }    
}
customElements.define('button-component', buttonComponent);