/* dado un array dividirlo en tantos sub arrays como sea necesario */

function divideArray(arrayPrincipal, subArrays){
    let subArreglos = [];

    for(let elemento of arrayPrincipal){
        let ultimo = subArreglos[subArreglos.length -1];

        if(!ultimo || ultimo.length === subArrays){
            subArreglos.push([elemento]);
        } else {
            ultimo.push(elemento);
        };
    };

    return subArreglos;
};

module.exports = divideArray;
