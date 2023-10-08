// dado un numero devovler su tabla de multiplicar completa

function tablaMultiplicar(numero){
    //var
    let tabla = [];

    //iteracion hasta el diez
    for(let i = 1; i <= 10; i++){
        //multiplicación y concatenacion a la tabla
        const resultado = (numero * i);

        //concatenar los resultados y monstrarlos
        tabla += `${numero} x ${i} = ${resultado} \n` ;
    };

    return tabla;
};

console.log(tablaMultiplicar(5));