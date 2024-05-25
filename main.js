import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

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
const auth = getAuth(app); // Obtén la instancia de autenticación

console.log("Conexión a Firebase establecida correctamente.");

document.addEventListener('DOMContentLoaded', () => {
    const registrarForm = document.querySelector('#registrarse-form');
    registrarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#registrar-email').value;
        const password = document.querySelector('#registrar-password').value;
        console.log('Email:', email, 'Password:', password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log('Usuario registrado:', userCredential.user);
                registrarForm.reset();
                $('#registrarModal').modal('hide');
            })
            .catch(error => {
                console.error('Error al registrar el usuario:', error);
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.querySelector('#iniciar-form');
    signinForm.addEventListener('submit', e => {
        e.preventDefault();

        const email = document.querySelector('#iniciar-email').value;
        const password = document.querySelector('#iniciar-password').value;

        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                // Limpiar el formulario
                signinForm.reset();
                // Cerrar el modal
                $('#iniciarModal').modal('hide');
                console.log('Inicio de sesión exitoso');
            })
            .catch(error => {
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
            });
    });
});

