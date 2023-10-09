/* dibujar un cuadrado hueco con asteriscos */

function lado(asteriscos){
    let lado = '';

    for(let i = 0; i < asteriscos; i++){
        lado += '*';
    };

    return lado;
};

function cuadrado(asteriscos){
    let dibujo = lado(asteriscos) + '\n';

    
    for(let i = 0; i < asteriscos - 2; i++){
        let contenido = '*';

        for(x = 2; x < asteriscos; x++){
            contenido += ' ';
        };

        contenido += '*';
        dibujo += contenido + '\n';
    };

    dibujo += lado(asteriscos);

    return dibujo;
};

module.exports = cuadrado;