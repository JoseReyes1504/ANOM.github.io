let animado = document.querySelectorAll('.Animado');
const style = document.documentElement.style;
var Toques = 0;


function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i = 0; i<animado.length; i++){
        let AlturaAnimado = animado[i].offsetTop;
        if(AlturaAnimado -600 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);


function Busqueda(){
    Toques++;
    if(Toques == 1){
        style.setProperty('--Translate','0px');
    }else if(Toques == 2){
        style.setProperty('--Translate','460px');
        Toques = 0;
    }
}






