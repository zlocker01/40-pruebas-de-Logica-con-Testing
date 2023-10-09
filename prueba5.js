/* cuanto es el x por ciento de x numero */

function tantoPorCiento(procentaje, numero){
    //  var para resultado
    let resultado = 0;

    // obtener el procentaje del numero
    resultado += (numero * (procentaje / 100))

    return resultado;
};

console.log(tantoPorCiento(43, 897));