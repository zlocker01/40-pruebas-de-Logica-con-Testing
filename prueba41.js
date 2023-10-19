//dado un numero mostrar un triangulo de * con filas

function triangulo(numero){
    let mitad = Math.floor(numero - 1);
    let resultado = '';

    //* bucle para las filas
    for(let fila = 0; fila < numero; fila++){
        let nivel = '';

        //*loop para las columnas
        for(let columna = 0; columna < (2 * numero - 1); columna++){
            if(mitad - fila <= columna && mitad + fila >= columna){
                nivel += '*';
            } else {
                nivel += ' ';
            };
        };
        resultado += nivel + '\n';
    };

    return resultado;
};

console.log(triangulo(10));