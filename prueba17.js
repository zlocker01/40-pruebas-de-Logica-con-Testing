//  dado un numero mostrar los numeros del 1 al numero, para multiplicarlos de tres imprimir buzz, los multiplos de 5 lightyear, para los de tres  cinco buzzligthyear

function buzz(numero){
    let resultado = '';

    if (numero % 5 === 0 && numero % 3 === 0) {
        resultado = 'fizzbuzz';
    } else if (numero % 3 === 0) {
        resultado = 'buzz';
    } else if (numero % 5 === 0) {
        resultado = 'fizz';
    } else {
        resultado = numero;
    };

    return resultado;
};

console.log(buzz(10));