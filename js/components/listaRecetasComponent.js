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
        listaRecetas.innerHTML += 
        `<receta-en-lista title="${data.title}" ingredients="${data.ingredients}" id="${id}"></receta-en-lista>`;
        console.log(id+' Añadido en lista');
    }
    _despintarReceta(id){
        let listaRecetas = this.shadowRoot.querySelector('.listaRecetas');
        let recetaAEliminar = this.shadowRoot.querySelector(`#${id}`)
        listaRecetas.removeChild(recetaAEliminar);
        console.log(id+' Eliminado en lista');
    }
    
}
customElements.define('lista-recetas', ListaDeRecetasComponent);