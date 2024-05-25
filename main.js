const registrarForm = document.querySelector('#registrarse-form');
registrarForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const registrarEmail = document.querySelector('#registrar-email').value;
    const registrarPassword = document.querySelector('#registrar-password').value;
    console.log('Email:', registrarEmail, 'Password:', registrarPassword);
});
