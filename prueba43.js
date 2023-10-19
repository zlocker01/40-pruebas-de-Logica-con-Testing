// dado un array de numeros sacar la media de todos ellos


function media(numeros){
    let suma = numeros.reduce((valorAcumualdo, numeroActual) => {
        return valorAcumualdo + numeroActual;
    });
    let med = suma / numeros.length;

    return med;
};

console.log(media([1, 2, 3, 4, 5]));