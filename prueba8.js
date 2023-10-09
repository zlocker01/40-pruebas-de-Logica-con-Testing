/* dado un numero entero inviertelo y devuele de nuevo el numero entero */

function invertirNumero(numero){
    // crear una var para guardar el resultado
    let resultado = '';

    // convertir el numero a string para manipularlo e invertirlo
    let numeroString =  numero.toString().split('').reverse();

    // unir el numero y concatenarlo a resultado convirtiendolo de nuevo en number
    resultado += numeroString.join('');

    return parseFloat(resultado);
};

console.log(invertirNumero(95)); //59