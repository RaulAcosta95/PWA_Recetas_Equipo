const main = document.querySelector('.boxDos');
main.addEventListener('click',() =>{
    bo();
})


function bo(){
    let menu = document.getElementById('rigth');
       if(menu.hasChildNodes()){
            menu.innerHTML = null; 
            menu.style.setProperty("display","none");
            menu.style.setProperty("z-index","-1");
}
}