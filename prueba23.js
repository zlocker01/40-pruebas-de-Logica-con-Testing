function letraCapital(texto){
    let resultado = '';

    for(letra in texto){
        if(texto[letra - 1] ===  '' || letra === ''){
            resultado += texto[letra].toUpperCsse();
        } else {
            resultado += texto[letra].toLowerCase();
        };
    };

    return resultado;
};

console.log(letraCapital('esto es un texto mas'));