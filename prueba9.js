/* dados dos arrays devovler un array con solo los elementos comunes entre ambos*/

function elementosComunes(array1, array2){

    const filtrado = array1.filter(elemento => array2.includes(elemento));

    return filtrado
};


console.log(elementosComunes([4, 6, 7, 6], [7, 8, 4, 5]));  // [4, 7]