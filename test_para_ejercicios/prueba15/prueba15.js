//  dado una cadena de texto devovler el dato mas usado

function masUsado(texto){
    let mapeo_letras = {};
    let maximoReps = 0;
    let letra_mas_repetida = '';

    for(let letra of texto){

        if(!mapeo_letras[letra]){
            mapeo_letras[letra] = 1;
        } else {
            mapeo_letras[letra]++;
        };
    };
    
    for(let letra in mapeo_letras){
        if(mapeo_letras[letra].toString().trim().length === 1 && mapeo_letras[letra] > maximoReps){
            maximoReps = mapeo_letras[letra];
            letra_mas_repetida = letra;
        };
    };

    return {letra_mas_repetida, mapeo_letras, maximoReps}

};

module.exports =  masUsado;