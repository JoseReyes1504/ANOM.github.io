import { getStorage, listAll, ref, uploadBytes, getDownloadURL, deleteObject  } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
import { getFirestore, doc, collection, addDoc, deleteDoc, getDocs, onSnapshot, getDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyCF1KCy3xo-UMdaum4Yz9AKDx5xwzjEL-Q",
    authDomain: "anom-b47a3.firebaseapp.com",
    projectId: "anom-b47a3",
    storageBucket: "anom-b47a3.appspot.com",
    messagingSenderId: "684744670291",
    appId: "1:684744670291:web:5bd8f64565d9ab5a109aa6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export const auth = getAuth(app);

export const ObtenerDatos = () => getDocs(collection(db, 'Nota'));

export const ObtenerDato = (id) => getDoc(doc(db, 'Nota', id));

export const BorrarCard = (id) => deleteDoc(doc(db, 'Nota', id));

export function AgregarNota(Titulo, Descripcion, NombreImagen, NombreImagen2) {
    addDoc(collection(db, 'Nota'), { Titulo, Descripcion, NombreImagen, NombreImagen2 });
}

export const EliminarImagen = (Referencia) => deleteObject(Referencia);

export const CrearRefencia = (Imagen) => ref(storage, Imagen);

export const ObtenerImagen = (Referencia) => getDownloadURL(ref(storage, Referencia));

export {
    db,
    collection,
    onSnapshot,
    query,
    where, getDocs,
    uploadBytes,
    getDownloadURL,
    ref
}


