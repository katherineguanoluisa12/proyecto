const registrarForm = document.querySelector('#registrarse-form');
registrarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const Email = document.querySelector('#registrar-email').value;
    const Password = document.querySelector('#registrar-password').value;
    console.log('Email:', registrarEmail, 'Password:', registrarPassword);
    Auth
    .createUserWithEmailandPassword(Email,Password)
    .then(userCredential=>{ 
        console.long('registrar')

    })
})
