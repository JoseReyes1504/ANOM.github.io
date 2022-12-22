btnBajar = document.getElementById("Bajar");
btnBajar1 = document.getElementById("Bajar1");
btnBajar2 = document.getElementById("Bajar2");
btnSubir1 = document.getElementById("Subir1");
btnSubir2 = document.getElementById("Subir2");
btnSubir3 = document.getElementById("Subir3");

btnModo = document.getElementById("btnModo");

var Estilo = document.documentElement.style;
var Toques = 0;
var Toques2 = 0;

var Modo = 0;

btnModo.addEventListener("click", (value) => {
    Modo++;
    switch (Modo) {
        case 1:
            Estilo.setProperty("--ModoNoche", "#181818");
            Estilo.setProperty("--ModoNocheFont", "white");
            btnModo.value = "Día";
            break;
        case 2:
            Estilo.setProperty("--ModoNoche", "white");
            Estilo.setProperty("--ModoNocheFont", "#181818");
            Modo = 0;
            btnModo.value = "Noche";
            break;
    }
});

btnBajar.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});

btnBajar1.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-200%");
});

btnBajar2.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-300%");
});



btnSubir1.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "00%");
});

btnSubir2.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});

btnSubir3.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-200%");
});