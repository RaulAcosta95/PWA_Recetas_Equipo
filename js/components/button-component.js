import { html, LitElement, css } from "lit-element";

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
            --sizeButton: 40px;
            --sizeIcons: 33px;
            --widthContent: 200px;
            --heightContent: 130px;
        }
        .menu-item img{
            width: var(--sizeIcons);
            transition: transform 300ms;
        }
        .menu-content{
            width: var(--widthContent);
            height: var(--heightContent);
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
        .menu-item{
            width: var(--sizeButton);
            height: var(--sizeButton);
            background: var(--primaryColor);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            position: absolute;
            bottom: 0;
            left: 70px;
            transition: transform 300ms;
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
                <span class="menu-item"><img src='./images/icons/plus.png' @click="${this._agregar}"></span>
            </div>
        </body>
        `;
    }

    _agregar() {
        this.dispatchEvent(new CustomEvent('enviar', {
            bubbles: true,
            composed: true
        }));
    }

}
customElements.define('button-component', buttonComponent);