//  dado un string devovler cuantas vocales tiene


function vocales(texto){
    let coincidencias = texto.match(/[aeiou]/gi);
    return coincidencias ? coincidencias.length : 0;
};

module.exports = vocales;