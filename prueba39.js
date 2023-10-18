// dado un texto cmprobar qu esa un emial valido


function emailValido(email) {
    // Expresión regular más compleja para validar direcciones de correo electrónico
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

console.log(emailValido('correo@correo.com'));
