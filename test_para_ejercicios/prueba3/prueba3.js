/* dada una palabra buscarla en una frase y devovler cuantas veces aparece en ella */

function coincidencias(frase, palabra) {
    // Convertir la palabra y la frase a minúsculas y eliminar signos de puntuación
    let palabraMinusculas = palabra.toLowerCase();
    let fraseMinusculas = frase.toLowerCase().replace(/[.,]/g, '');

    // Dividir la frase en palabras
    let palabrasFrase = fraseMinusculas.split(' ');

    let contador = 0;

    // Iterar a través de las palabras en la frase
    for (const palabraFrase of palabrasFrase) {
        if (palabraFrase === palabraMinusculas) {
            contador++;
        };
    };

    // Devolver el contador de repeticiones
    return `La palabra "${palabra}" se repite ${contador} veces`;
};

module.exports = coincidencias;
