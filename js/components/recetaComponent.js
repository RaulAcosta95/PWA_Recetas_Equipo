import { LitElement, html } from "lit-element";
export class RecetaEnListaComponent extends LitElement{
    static get properties(){
        return {
            id: {type: String},
            title: {type: String},
            ingredients: {type: String}
        }
    }
    constructor(){
        super();
        this.id = "";
        this.title = "";
        this.ingredients = "";
    }
    render(){
        return html `
            <style>
            .recetaEnListaComponent *{
                margin:0;
                padding:0;
            }
            .recetaEnListaComponent{
                background-color: rgb(251, 238, 224);
                width: 90vw;
                margin-top: 20px;
                margin-bottom: 20px;
                font-family: sans-serif;
                border-radius: 10px 10px 10px 10px;
                -moz-border-radius: 10px 10px 10px 10px;
                -webkit-border-radius: 10px 10px 10px 10px;
                border: 0px solid #000000;

                display: flex;
                align-items: center;
            }
            .recetaEnListaComponent .dishImage{
                width: 50px;
                margin:10px;
                float:left;
            }
            .recetaEnListaComponent .contenedorInfo{
                width: 70%;
            }
            .recetaEnListaComponent button{
                background-color:rgba(172, 128, 128,.0);
                margin: 10px;
                border:none;
                cursor:pointer;
                width:20px;
            }
            .recetaEnListaComponent button img{
                width:100%;
            }
            .recetaEnListaComponent .contenedorBoton{
                width: 20%;
                height: 100%;
                display: flex;
                justify-content:flex-end;
                align-items:flex-end;
            }
            </style>
            <div class="recetaEnListaComponent">
                <img class="dishImage" src="./images/dish.png">
                <div class="contenedorInfo">
                    <h3>${this.title} </h3>
                    <p>${this.ingredients}</p>
                </div>
                <div class="contenedorBoton">
                    <button @click=${this._eliminarReceta}>
                        <img src="./images/delete.png">
                    </button>
                </div>
            </div>
        `
    }
    _eliminarReceta(){
        console.log('Evento Elimina Receta');
        db.collection('recipes').doc(this.id).delete();
        this.dispatchEvent( new CustomEvent('EliminaReceta', {
            detail: {data: this.id},
            bubbles: true,
            composed:true
        }));
    }
}
customElements.define('receta-en-lista', RecetaEnListaComponent);