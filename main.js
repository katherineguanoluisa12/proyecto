import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvt5uALq0-Lp4XhG7Y8tjDZD7BOSxP_eI",
    authDomain: "vechiculo-b415f.firebaseapp.com",
    projectId: "vechiculo-b415f",
    storageBucket: "vechiculo-b415f.appspot.com",
    messagingSenderId: "61014179644",
    appId: "1:61014179644:web:7d13477e77a85ac55ee839"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); // Obtén la instancia de Firestore
const auth = getAuth(app); // Obtén la instancia de autenticación
const provider = new GoogleAuthProvider(); // Proveedor de Google para autenticación

console.log("Conexión a Firebase establecida correctamente.");

document.addEventListener('DOMContentLoaded', () => {
    // Registrar Usuario
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
                alert('Error al registrar el usuario. Por favor, verifica tus datos e intenta nuevamente.');
            });
    });

    // Iniciar Sesión con Email y Password
    const signinForm = document.querySelector('#iniciar-form');
    signinForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.querySelector('#iniciar-email').value;
        const password = document.querySelector('#iniciar-password').value;
        console.log('Email:', email, 'Password:', password);
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log('Usuario inició sesión:', userCredential.user);
                window.location.href = 'vechiculo.html'; // Redirigir a vehiculo.html después de iniciar sesión
            })
            .catch(error => {
                console.error('Error al iniciar sesión:', error);
                alert('Error al iniciar sesión. Por favor, verifica tus credenciales e intenta nuevamente.');
            });
    });

    // Iniciar Sesión con Google
    const googleSignInButton = document.querySelector('#google-signin');
    googleSignInButton.addEventListener('click', e => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('Usuario inició sesión con Google:', result.user);
                window.location.href = 'vechiculo.html'; // Redirigir a vehiculo.html después de iniciar sesión
            })
            .catch((error) => {
                console.error('Error al iniciar sesión con Google:', error);
                alert('Error al iniciar sesión con Google. Por favor, intenta nuevamente.');
            });
    });

    // Cerrar Sesión
    const logout = document.querySelector('#salir');
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        signOut(auth).then(() => {
            console.log('Usuario cerró sesión');
            window.location.href = 'index.html'; // Redirigir a la página principal después de cerrar sesión
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    });
});



