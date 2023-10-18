/*dado un array de numeros devolver los numeros elevados al cuadrado y eliminar cualqueir contenidod que no sea numerico*/

function alCuadrado(numeros) {
    let numeros_cuadrados = numeros.filter(numero => typeof numero === 'number').map(numero => Math.pow(numero, 2));

    return numeros_cuadrados;
};

console.log(alCuadrado([5, 6, 7, 'diego']));


