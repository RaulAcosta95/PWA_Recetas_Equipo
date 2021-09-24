import { css, html, LitElement } from "lit-element";
export class formularioComponente extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            ingredients: { type: String },
        };
    }

    constructor() {
        super();
        this.title = '';
        this.ingredients = '';
    }

    static get styles() {
        return css`
        .sidebar{
            padding: .1em 1.5em;
            background:#ffffff;
        }
        sidebar h2{
            color: black;
            text-transform: uppercase;
            text-align: left;
            margin-bottom: 30px;
        }
        .form_container{
            margin-top: 3em;
            display: grid;
            gap: 2.5em;
        }
        .form_group{
            position: relative;
            --color: #5757577e;
        }
        .form_input{
            width: 90%;
            background: none;
            color: #706c6c;
            font-size: 1em;
            padding: .6em .3em;
            border: none;
            outline: none;
            border-bottom: 1px solid var(--color);
        }
        .form_label{
            color: var(--color);
            cursor: pointer;
            position: absolute;
            top: -20px;
            left: 5px;
            
        }
        .form_button{
            background: orange;
            color: white;
            font-size: 1em;
            padding: .1em 0; 
            border: none;
        }
       
        `;
    }
    render() {
        return html`
        
            <div class="sidebar">
            <form id="task-form">
                <h2>New Recipe</h2>
                <div class="form_container">
                    <div class="form_group">
                        <input type="text" id="title" placeholder="e.g Ninja soup autofocus" class="form_input">
                        <label for="title" class="form_label">Nombre:</label>
                        <span class="form_line"></span>
                    </div>
                    <div class="form_group">
                        <input type="text" id="ingredients" placeholder="e.g Tofu,mushroom,garlic" class="form_input">
                        <label for="ingredients" class="form_label">Ingredientes:</label>
                        <span class="form_line"></span>
                    </div>
                    <button @click="${this._agregar}" class="form_button">ADD</button>
                </div>
                </form>
            </div>
        
        `;
    }
_agregar() {
    const form = this.shadowRoot.querySelector('form');
    form.addEventListener('click', evt => {
        evt.preventDefault();
        
    const recipe = {
        title: form.title.value,
        ingredients: form.ingredients.value
    };

    db.collection('recipes').add(recipe)
        .catch(err => console.log(err));

    form.title.value = '';
    form.ingredients.value = '';
    console.log(recipe);
    });
}
}
customElements.define('formulario-receta', formularioComponente);