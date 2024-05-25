const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Obtén la instancia de autenticación

const registrarForm = document.querySelector('#registrarse-form');
registrarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#registrar-email').value;
    const password = document.querySelector('#registrar-password').value;
    console.log('Email:', email, 'Password:', password);
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            console.log('Usuario registrado:', userCredential.user);
        })
        .catch(error => {
            console.error('Error al registrar el usuario:', error);
        });
});
