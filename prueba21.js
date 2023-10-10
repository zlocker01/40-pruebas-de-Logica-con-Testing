// dado una cadena de texto y un numero recortar le string


function recortar(texto, numero){
    // comptorbar que los datos son correctos
    if(typeof texto === 'string' && texto !== '' && typeof numero === 'number' & numero !== 0){
        resultado = texto.substring(0, numero);
    } else {
        resultado = 'introducir bien los datos';
    };
    return resultado;
};

console.log(recortar('Esto es un texto largo', 8));