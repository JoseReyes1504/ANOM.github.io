btnAvanzar = document.getElementById("Avanzar");
btnAvanzar2 = document.getElementById("Avanzar2");
btnAtras = document.getElementById("Atras2");
btnAtras3 = document.getElementById("Atras3");

var Estilo = document.documentElement.style;


btnAvanzar.addEventListener("click", () =>{
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});

btnAvanzar2.addEventListener("click", () =>{
    Estilo.setProperty("--TranslateCarrusel", "-200%");
});

btnAtras.addEventListener("click", () =>{
    Estilo.setProperty("--TranslateCarrusel", "0%");
});

btnAtras3.addEventListener("click", () =>{
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});