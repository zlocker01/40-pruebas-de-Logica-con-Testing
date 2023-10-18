// dado un array crear otro array con el primer y ultimo elemento del array orignal

function primeroUltimo(array){
    let nuevoArray = [];
    array.filter(numero => numero === 'number');
    nuevoArray. push(array[0], array[array.length - 1]);
    return nuevoArray;
};

console.log(primeroUltimo([20, 58, 49, 52, 17]));;