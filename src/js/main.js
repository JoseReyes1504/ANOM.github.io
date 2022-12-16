import { onAuthStateChanged, auth } from "./db.js";


export var Usuario = "";

onAuthStateChanged(auth, (user) => {
    if (!user) {
        location.href = '../../index.html';
    }

    if (user.email === "jose.reyessuazo@gmail.com") {
        Usuario = "Tato";        
    } else {
        Usuario = "Alejandra";
    }
    console.log(Usuario);
});