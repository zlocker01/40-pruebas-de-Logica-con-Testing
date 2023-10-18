// dados dos nueros devolver lso resultaods de las operaciones basicas entre ellos

function calculadora(numero1, numero2){
    suma = numero1 + numero2;
    resta = numero1 - numero2;
    division = numero1 / numero2;
    multiplicacion = numero1 * numero2;

    return `suma: ${suma} \n resta: ${resta} \n multiplicacion: ${multiplicacion} \n divison: ${division}`;
};

console.log(calculadora(3, 2));