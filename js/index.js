const main = document.querySelector('.boxDos');
main.addEventListener('click',() =>{
    bo();
    lef();
})


function bo(){
    let menu = document.getElementById('rigth');
       if(menu.hasChildNodes()){
            menu.innerHTML = null; 
            menu.style.setProperty("display","none");
            menu.style.setProperty("z-index","-1");
}
}

function lef(){
    let form = document.getElementById('left');
       if(form.hasChildNodes()){
            form.innerHTML = null; 
            form.style.setProperty("display","none");
            form.style.setProperty("z-index","-1");
}
}