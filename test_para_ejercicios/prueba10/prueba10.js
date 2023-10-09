/* Dado un numero, mostrar una escalera con escalones de [-] usando un numero para los niveles de la escalera*/

function escalera(numero){
    let escaleraComleta = '';

    for(let nivel = 1; nivel <= numero; nivel++){
        let escalones = '';

        for(let escalon = 1; escalon <= nivel; escalon++){
            escalones += '[-]';
        };

        escaleraComleta += escalones + '\n';
    };

    return escaleraComleta;
};

module.exports = escalera; 