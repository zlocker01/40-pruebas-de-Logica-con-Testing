// dado un objeto comprobar si existe una propiedad en concreto o no

function existePropiedad(objeto, propiedad){
    return typeof objeto === 'object' && typeof propiedad === 'string';
};

const usuario = {
    nombre: 'Juan', 
    apellido: 'Lopez'
};

console.log(existePropiedad(usuario, 'nombre'));