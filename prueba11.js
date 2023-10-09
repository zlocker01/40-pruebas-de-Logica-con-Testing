/* dado un texto y una busqueda, censurar todas las coincidencias en el texto con [-CENSURADO-], si el texto o busqueda están vacios mostrar no puedes leer el texto y la busqueda en el caso de que ambos parametros no lleguen */

function censurado(texto = false, busqueda){
    let resultado = '';

    if(!texto && !busqueda){
        resultado = 'No puedes leer el texto y la busqueda';
    } else if(!texto && busqueda ){
        resultado = 'No puedes leer el texto';
    } else if(texto && !busqueda){
        resultado = 'No hay busqueda'
    } else {
        resultado = texto.replace(new RegExp(busqueda, 'gi'), '[-CENSURADO-]'); 
    };

    return resultado;
};

console.log(censurado('hola, hola, hola','hola'));