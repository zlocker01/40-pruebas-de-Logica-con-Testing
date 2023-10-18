// dado un array de nuemros devovler el valor mas alto y el mas bajo

function valores(numeros){
    let valorAlto = '';

    let valorBajo = '';

    let ordenados = numeros.sort((a, b) => a - b);

    return [
        valorBajo = `Valor mas bajo: ${ordenados[0]}`,
        valorAlto = `Valor mas alto: ${ordenados[ordenados.length - 1]}`
    ];
};

console.log(valores([1, 4, 3, 2, 10, 6, 7, 8, 9, 5]));