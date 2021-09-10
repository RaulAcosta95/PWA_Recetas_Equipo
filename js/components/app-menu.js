import {LitElement, html, css} from 'lit-element';
import './main-app'
export class MenuApp extends LitElement{
  static get styles() {
    return css`
    aside{
                width: 20%;
                height: 200px;
                left: 100px;
            }
            .nav {
                margin-top: 50px;
                list-style-type: none;
                padding-left: 3px;
            }
            .nav a{
                font-size: 1rem;
                color: black;
                padding: 10px;
                border-radius: 2px;
                text-decoration: none;
            }
            .nav a:hover {
                color: blue;
                cursor:pointer;
            }
            .nav a:active {
                color: red;
            }
            section{
                display:flex;
                width:100%;
                height: 100%;
           }
           li {padding-bottom: 10px;}
           main{
                width: 20%;
                height: 200px; 
           }
           
    `;
  };
  static get properties(){
      return {
          ban:{type:String},
          b:{type:Boolean},
          contac:{type: String}
      };
  }
  constructor(){
      super();
      this.ban='home';
      this.b=false;
      this.contac='';
  }
render(){
    return html`
    <section>
        <main id="panel">
       
        </main>
        <aside>

        <nav>
        <ul class="nav">
            <li><a @click="${this._clickContact}">Conctact</a></li>
            <li><a @click="${this._clickAbout}">About</a></li>
        </ul>
        </nav>

        <hr>

      </aside>
        </section>
    `;
}

_clickContact(){
        let main = document.getElementById('central');
        let der = document.getElementById('rigth');
        if(main.hasChildNodes()){
            main.innerHTML = null;
            main.innerHTML = '<main-app ban="contact"></main-app>';
            der.style.setProperty("display","inline");
 
        }else{
            main.innerHTML = '<main-app ban="contact"></main-app>'
            der.style.setProperty("display","inline");
        }
         
     
  
}
_clickAbout(){
    let main = document.getElementById('central');
    let rigth = document.getElementById('rigth');
    if(main.hasChildNodes()){
        main.innerHTML = null;
        main.innerHTML = '<main-app ban="about"></main-app>'
        rigth.style.setProperty("display","inline");

    }else{
        main.innerHTML = '<main-app ban="about"></main-app>'
        rigth.style.setProperty("display","inline");
    }
}
properti() {
   if(this.ban === 'home'){
      this.b=true;

   }else{
    this.b=false;
   }
  }
}
customElements.define('menu-app',MenuApp);