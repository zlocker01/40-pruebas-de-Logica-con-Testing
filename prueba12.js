/* dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por n° */

function hastaCero(numero){
    let lista = '';    

    while(numero > 0){
        lista += `- n° ${numero} \n `;
        numero -= 8;
    };

    return lista;
};

console.log(hastaCero(100));