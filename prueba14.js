/* dado un string y un numero, repetir el string tantas veces como el numero indique */

function repite(texto, reps){
    let resultado = [];

    for(let i = 0; i < reps; i++){
        resultado += texto
    };

    return resultado;
};

console.log(repite('DiegoBeristain', 2));

// Con protopype
String.prototype.repiteme = function(reps){
    let resultado = '';

    for(let i = 0; i < reps; i++){
        resultado += this;
    };

    return resultado;
};


console.log('AnastazjaGórska'.repiteme(2));
