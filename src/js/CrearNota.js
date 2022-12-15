import { uploadBytes, CrearRefencia, ObtenerDato, BorrarCard, db, onSnapshot, collection, query, where, getDocs, AgregarNota } from "./db.js";

const Titulo = document.getElementById("txtTitulo");
const Contenido = document.getElementById("txtContenido");
const btnEnviar = document.getElementById("btnEnviar");
const Img1 = document.getElementById("image");
const Img2 = document.getElementById("image2");
const ImgCA1 = document.getElementById("ImagenCargada");
const ImgCA2 = document.getElementById("ImagenCargada2");

function GenerarCodigo() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

btnEnviar.addEventListener('click', async function () {
    try {
        var File = Img1.files[0];
        var File2 = Img2.files[0];

        if (File != null && File2 != null) {            
            var name = GenerarCodigo() + "-" + File.name;
            var name2 = GenerarCodigo() + "-" + File2.name;

            var Referencia = CrearRefencia(name);
            var Referencia2 = CrearRefencia(name2);

            AgregarNota(Titulo.value, Contenido.value, name, name2);        
            limpiar();        
            console.log('Se creo la nota');

            uploadBytes(Referencia, File).then((snapshot) => {
                console.log('Se subio el archivo');
                
                uploadBytes(Referencia2, File2).then((snapshot) => {
                    console.log('Se subio el archivo 2');
                    setTimeout(redireccionar, 1000);    
                });
            });
            
        }else{
            name = '';
            name2 = '';
        }        
    } catch (error) {
        console.log("Hubo un error al tratar de subir la nota " + error);
    }

});

Img1.addEventListener("change", () => {
    const archivos = Img1.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
        ImgCA1.src = "";
        return;
    }

    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    ImgCA1.src = objectURL;
});

Img2.addEventListener("change", () => {
    const archivos = Img2.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
        ImgCA1.src = "";
        return;
    }

    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    ImgCA2.src = objectURL;
});



function redireccionar(){
    location.href="./index.html";
}



function limpiar() {
    Titulo.value = "";
    Contenido.value = "";
    Img1.value = "";
    Img2.value = "";
    ImgCA1.src = "";
    ImgCA2.src = "";
}