// dado un array de string devolver otro con valores ue esten formdos con mas de dos palabras

function dosPalabras(palabras){
    let nuevoArray = [];

    for(let palabra of palabras){
        if(palabra.includes(' ')){
            nuevoArray.push(palabra);
        };
    };

    return nuevoArray;
};


console.log(dosPalabras(['Juan Daniel', 'Lupita', 'Ewa', 'Cristian', 'Anastazja Górska']));