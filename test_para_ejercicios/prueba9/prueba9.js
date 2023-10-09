/* dados dos arrays devovler un array con solo los elementos comunes entre ambos*/

function elementosComunes(array1, array2){

    const filtrado = array1.filter(elemento => array2.includes(elemento));

    return filtrado
};


module.exports = elementosComunes;