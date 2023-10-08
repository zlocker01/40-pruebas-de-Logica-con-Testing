/* dada una cadena de texto comrpobar si es un palindromo o no retornando true o false seg´´un sea el caso*/

function palindromo(nombre){
    // convertir el nombre a minusculas
    const nombreSinMayusculas = nombre.toLowerCase();

    // separar el texto en un array de letras y eliminar mayusculas e invertri el texto
    const textoSeparado = nombre.toLowerCase().split('').reverse();

    // unir el arrya en string
    let nombreInvertido = textoSeparado.join('');

    // comprobar si es o no palindromo
    if(nombreInvertido !== nombreSinMayusculas){
        return false;
    } else {
        return true;
    };
};

console.log(palindromo('Ana')); // true
console.log(palindromo('Diego'));  // false