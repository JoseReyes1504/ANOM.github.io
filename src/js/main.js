import { onAuthStateChanged, auth } from "./db.js";

const BotonCrear = document.getElementById("btnEnviar2");

export var Usuario = "";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        location.href = '../../index.html';
    }
    
    if (user.email === "jose.reyessuazo@gmail.com") {
        BotonCrear.setAttribute("style", "opacity:1");
    } else {

    }


});