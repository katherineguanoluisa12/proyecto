import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvt5uALq0-Lp4XhG7Y8tjDZD7BOSxP_eI",
  authDomain: "vehiculo-b415f.firebaseapp.com",
  projectId: "vehiculo-b415f",
  storageBucket: "vehiculo-b415f.appspot.com",
  messagingSenderId: "61014179644",
  appId: "1:61014179644:web:7d13477e77a85ac55ee839"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore

console.log("Conexión a Firebase establecida correctamente.");
