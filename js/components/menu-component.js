import { html, LitElement } from "lit-element";
import './receta-component';
import './button-component';
export class menuComponent extends LitElement{

    static get properties() {
        return {
            menu: { type: Boolean },
        };
    }

    render(){
        return html`
        ${this.menu
        ? html`
        <receta-component></receta-component>`
        : html`<button-component @enviar="${this._monstrarMenu}"></button-component>`}
        `;
    }

    _monstrarMenu(){
        this.menu = true;
    }
}
customElements.define('menu-component',menuComponent);