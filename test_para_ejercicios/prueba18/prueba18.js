// dado un numero mostrar todos su numeros divisiores

function numerosDivisores(numero, divisor){
    let resultado = 0;

    if(numero % divisor === 0){
        resultado = divisor;
    } else {
        return false;
    };

    return resultado;
};
    
module.exports = numerosDivisores;