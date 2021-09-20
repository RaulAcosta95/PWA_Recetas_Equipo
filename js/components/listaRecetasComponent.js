import { LitElement , html} from "lit-element"
import './recetaComponent';
export class ListaDeRecetasComponent extends LitElement{
    constructor(){
        super();
        this._db();
        addEventListener('EliminaReceta', (id)=>{
            this._despintarReceta(id.detail.data);
        })
    }
    static get properties(){
        return {

        }
    }
    render(){
        return html`
        <div class="listaRecetas">
        <menu-component></menu-component>
        </div>
        `
    }
    _db(){
        db.collection('recipes').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    // Añade la receta al DOM
                    this._pintarReceta(change.doc.data(), change.doc.id);
                }
            })
        });
    }
    _pintarReceta(data, id){
        let listaRecetas = this.shadowRoot.querySelector('.listaRecetas');
        let ingredientes = data.ingredients;
        ingredientes = this._fragmentarIngredientes(ingredientes);
        listaRecetas.innerHTML += 
        `<receta-en-lista title="${data.title}" ingredients="${ingredientes}" id="${id}"></receta-en-lista>`;
        console.log(id+' Añadido en lfista');
    }
    _despintarReceta(id){
        let listaRecetas = this.shadowRoot.querySelector('.listaRecetas');
        let recetaAEliminar = this.shadowRoot.querySelector(`#${id}`)
        listaRecetas.removeChild(recetaAEliminar);
        console.log(id+' Eliminado en lista');
    }
    _fragmentarIngredientes(ingredientes){
        let arrayIngredientes = ingredientes.split(',');
        for (let i = 0; i < arrayIngredientes.length; i++) {
            arrayIngredientes[i] = " "+arrayIngredientes[i];
        }
        return arrayIngredientes = arrayIngredientes.toString();
    }
    
}
customElements.define('lista-recetas', ListaDeRecetasComponent);