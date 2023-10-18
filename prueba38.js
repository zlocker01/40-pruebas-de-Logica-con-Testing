// daod un numero mostrar una lista de los cuadrados, de todos los numeros naturales hasta llegar al mismo

//!creamos la funcion para sacar le cuadrado de cualqueir numero
function cuadrado(numero){
    let numeroCuadrado = Math.pow(numero, 2);

    return numeroCuadrado;
};

//? la usamos en todos los numeros que iteramos
function mostrar(numero){
    for(let i = 0; i <= numero; i++){
        console.log(cuadrado(i));
    };
};

console.log(mostrar(10));