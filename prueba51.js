// dado un array separar pares e impares

function pares(numeros){
    return {
        pares: numeros.filter(numero => numero % 2 === 0),
        impares: numeros. filter(numero => numero % 2 !== 0)
    };
};

console.log(pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));