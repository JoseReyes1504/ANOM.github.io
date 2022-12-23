import {  onAuthStateChanged, auth ,CrearRefencia, BorrarCard, db, ref, onSnapshot, collection, query, where, getDocs, ObtenerImagen, EliminarImagen, CerrarSesion } from "./db.js";
import { MostrarMSJSinBarra } from "./MSJ.js";

const ContenedorPrincipal = document.getElementById('ContenedorPrincipal');
const btnSalir = document.getElementById("btnSalir");



btnSalir.addEventListener("click", async () => {
    try {
        await CerrarSesion();
        location.href = '../../index.html';
    } catch (err) {
        console.log(err);
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    const q = query(collection(db, "Nota"));
    const querySnapshot = await getDocs(q);

    var lista = '';
    querySnapshot.forEach((doc) => {
        const Cards = doc.data();

        lista += `
        <div class="ContenedorPrincipal mostrarArriba">
        <div class="ContenedorTitulo">        
        <span class="SpanTitulo" title="Eliminar"><svg class="heart2" xmlns="http://www.w3.org/2000/svg" height="40" width="40" data-id="${doc.id}" data-Img="${Cards.NombreImagen}" data-Img2="${Cards.NombreImagen2}"><path d="M18.333 19.25Zm0 15.708-4.5-4.083q-3.625-3.292-5.958-5.667t-3.729-4.25q-1.396-1.875-1.938-3.5-.541-1.625-.541-3.458 0-3.833 2.562-6.417Q6.792 5 10.542 5q2.333 0 4.333 1.042 2 1.041 3.458 3 1.625-2 3.584-3.021Q23.875 5 26.125 5q3.583 0 6.229 2.542Q35 10.083 35 14q0 1-.188 1.938-.187.937-.437 1.562h-2.958q.291-.708.541-1.708.25-1 .25-1.834 0-2.791-1.916-4.479-1.917-1.687-4.167-1.687-2.125 0-3.875 1.229t-2.917 3.437h-2q-1.166-2.166-2.937-3.416t-3.854-1.25q-2.584 0-4.334 1.771-1.75 1.77-1.75 4.437 0 1.458.542 2.875t2.042 3.313q1.5 1.895 4.229 4.541 2.729 2.646 7.062 6.563 1.25-1.125 2.521-2.25T23.208 27l.313.292q.312.291.667.646l.666.666.313.313q-1.042.958-2.334 2.062-1.291 1.104-2.541 2.229ZM25 23.042v-2.75h13.333v2.75Z"/></svg></span>        
        <p class="Titulo">${Cards.Titulo}</p>        
        <span class="SpanTitulo" title="Agregar Nota"><svg xmlns="http://www.w3.org/2000/svg" class="heart1" height="40" width="40"><path d="M18.333 19.25Zm0 15.708-4.5-4.083q-3.416-3.125-5.729-5.417-2.312-2.291-3.75-4.208-1.437-1.917-2.062-3.625-.625-1.708-.625-3.625 0-3.792 2.562-6.396Q6.792 5 10.542 5q2.333 0 4.333 1.042 2 1.041 3.458 3Q19.958 7 21.917 6q1.958-1 4.208-1 3.333 0 5.625 2.167 2.292 2.166 2.917 5.291h-2.834q-.5-2.083-2.021-3.375-1.52-1.291-3.687-1.291-2.125 0-3.875 1.229t-2.917 3.437h-2q-1.166-2.166-2.937-3.416t-3.854-1.25q-2.625 0-4.354 1.771-1.73 1.77-1.73 4.437 0 1.542.625 3.042.625 1.5 2.188 3.437 1.562 1.938 4.25 4.5 2.687 2.563 6.812 6.313 1.25-1.125 2.521-2.25T23.208 27l.313.292q.312.291.667.646l.666.666.313.313q-1.042.958-2.334 2.062-1.291 1.104-2.541 2.229Zm11.959-6.625v-5.291H25v-2.75h5.292V15h2.75v5.292h5.291v2.75h-5.291v5.291Z"/></svg></span>
    </div>
    <div class="ContenedorBoxes">
        <div class="Box">
            <img id="ImagenUpdate" alt="${Cards.NombreImagen}">            
        </div>
        <div class="BoxMid">
            <p class="Texto">
                ${Cards.Descripcion}
            </p>
        </div>
        <div class="Box">
        <img id="ImagenUpdate2" alt="${Cards.NombreImagen2}">            
        </div>
    </div>   
    <div class="FooterNote">

    <span class="SpanTitulo" title="Me gusta"><svg xmlns="http://www.w3.org/2000/svg" class="heart3" height="48" width="48"><path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z"/></svg></span> 
    </div>
    </div>
            `
    });


    //Cargar Imagenes 
    ContenedorPrincipal.innerHTML = lista;

    const Corazones = ContenedorPrincipal.querySelectorAll(".heart2");
    const Corazones2 = ContenedorPrincipal.querySelectorAll(".heart1");    

    onAuthStateChanged(auth, (user) => {        
        if (user.email === "jose.reyessuazo@gmail.com") {
            
        } else {            
            Corazones.forEach(Cor =>{
                Cor.setAttribute("style", "opacity: 0");
            })
            Corazones2.forEach(Cor =>{
                Cor.setAttribute("style", "opacity: 0");
            })
        }
        // console.log(Usuario);
    });


    const imgs = ContenedorPrincipal.querySelectorAll("#ImagenUpdate2");
    const imgs2 = ContenedorPrincipal.querySelectorAll("#ImagenUpdate");

    imgs.forEach(img => {
        ObtenerImagen(CrearRefencia(img.alt)).then((url) => {
            img.setAttribute('src', url);
        });
    });

    imgs2.forEach(img => {
        ObtenerImagen(CrearRefencia(img.alt)).then((url) => {
            img.setAttribute('src', url);
        });
    });

    const BotonCrear = ContenedorPrincipal.querySelectorAll(".heart1");

    BotonCrear.forEach(btn => {
        btn.onclick = function () {
            location.href = "../html/Principio.html";
        }
    });


    const btnEliminar = ContenedorPrincipal.querySelectorAll(".heart2");

    btnEliminar.forEach(btn => {
        btn.addEventListener("click", async (event) => {
            MostrarMSJSinBarra("Eliminando Nota", 1000);
            await EliminarImagen(CrearRefencia(event.target.dataset.img));
            await EliminarImagen(CrearRefencia(event.target.dataset.img2));
            await BorrarCard(event.target.dataset.id);
            location.href = '../html/Inicio.html';
        })
    });


    const btnMeGusta = ContenedorPrincipal.querySelectorAll(".heart3");

    btnMeGusta.forEach(btn => {
        btn.addEventListener("click", function () {
            MostrarMSJSinBarra("Te Gusto", 3000);
            btn.setAttribute('style', "fill: red");
            btn.classList.add('Animar');

        });
    });
});