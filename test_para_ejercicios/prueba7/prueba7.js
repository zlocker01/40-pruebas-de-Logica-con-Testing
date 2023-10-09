/* daods dos numeros devovler cuantos numeros impaes hay entre ellos */

function impares(numero1, numero2){
    let contador = 0;

    // bucle del numero1 al 2
    while(numero1 < numero2){
        numero1++;

        // condicional si el resto es distinto a cero es impar
        if(numero1 % 2 !== 0) contador++;
    };

    return contador;
};

module.exports = impares;