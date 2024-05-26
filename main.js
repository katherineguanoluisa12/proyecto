const firebaseConfig = {
    apiKey: "AIzaSyDvt5uALq0-Lp4XhG7Y8tjDZD7BOSxP_eI",
    authDomain: "vehiculo-b415f.firebaseapp.com",
    projectId: "vehiculo-b415f",
    storageBucket: "vehiculo-b415f.appspot.com",
    messagingSenderId: "61014179644",
    appId: "1:61014179644:web:7d13477e77a85ac55ee839"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar mensaje de bienvenida o inicio de sesión con Google
    const mostrarMensaje = () => {
        const mensaje = document.getElementById('mensaje');
        const user = auth.currentUser;
        if (user) {
            mensaje.textContent = `¡Bienvenido, ${user.displayName || user.email}!`;
        } else {
            mensaje.textContent = 'Por favor, inicia sesión con Google:';
        }
    };

    mostrarMensaje(); // Mostrar mensaje al cargar la
