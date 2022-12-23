btnBajar = document.getElementById("Bajar");
btnBajar1 = document.getElementById("Bajar1");
btnBajar2 = document.getElementById("Bajar2");
btnBajar3 = document.getElementById("Bajar3");
// btnBajar4 = document.getElementById("Bajar4");

btnSubir1 = document.getElementById("Subir1");
btnSubir2 = document.getElementById("Subir2");
btnSubir3 = document.getElementById("Subir3");
btnSubir4 = document.getElementById("Subir4");

btnModo = document.getElementById("btnModo");

var Estilo = document.documentElement.style;
var Toques = 0;


var Modo = 0;

window.addEventListener("keyup", (btn) => {
    if (btn.code == "ArrowDown") {
        Toques++;
        Cambiar();
    }
});


function Cambiar() {
    switch (Toques) {
        case 1:
            Estilo.setProperty("--TranslateCarrusel", "-100%");
            break;
        case 2:
            Estilo.setProperty("--TranslateCarrusel", "-200%");
            break;
        case 3:
            Estilo.setProperty("--TranslateCarrusel", "-300%");
            break;
        case 4:
            Estilo.setProperty("--TranslateCarrusel", "-400%");
            // Toques = 0;
            break;
        case 5:
            Estilo.setProperty("--TranslateCarrusel", "0%");
            Toques = 0;
            break;
    }
}

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

btnBajar3.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-400%");
});

// btnBajar4.addEventListener("click", () => {
//     Estilo.setProperty("--TranslateCarrusel", "-500%");
// });

btnSubir1.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "00%");
});

btnSubir2.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-100%");
});

btnSubir3.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-200%");
});

btnSubir4.addEventListener("click", () => {
    Estilo.setProperty("--TranslateCarrusel", "-300%");
});