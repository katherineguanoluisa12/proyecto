document.addEventListener('DOMContentLoaded', () => {
    // Registrar Usuario
    const registrarForm = document.querySelector('#registrarse-form');
    registrarForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#registrar-email').value;
        const password = document.querySelector('#registrar-password').value;

        // Validar longitud de la contraseña
        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        console.log('Email:', email, 'Password:', password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log('Usuario registrado:', userCredential.user);
                console.log('Correo electrónico:', userCredential.user.email); // Ver el correo electrónico del usuario
                registrarForm.reset();
                $('#registrarModal').modal('hide');
                window.location.href = 'vechiculo.html'; // Redirigir a vehiculo.html después de registrarse
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
                console.log('Correo electrónico:', userCredential.user.email); // Ver el correo electrónico del usuario
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
                console.log('Correo electrónico:', result.user.email); // Ver el correo electrónico del usuario
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
