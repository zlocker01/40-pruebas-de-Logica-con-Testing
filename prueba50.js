// dado un numero retornar cuantos loops tiene

function loop(numeros){
    let arrayNumeros = numeros.toString().split('');

    let loops = 0;

    for(numero of arrayNumeros){

        numero = parseInt(numero);

        if(numero == 0 || numero == 6 || numero == 9){
            loops++;
        } else if (numero == 8){
            loops += 2;
        } else {
            loops;
        };
    };

    return loops;
};

console.log(loop(288965));
