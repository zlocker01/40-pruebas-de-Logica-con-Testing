// dado un texto debolver cuantas consonantes y vocales tiene

function cuentaLetras(texto){

    //! declaracion conjunta
    let consonantes = 0, vocales = 0;

    let textoLimpio = texto.replace(/[^a-zA-ZáéíóúüÁÉÍÓÚÜ]/g, '');

    for(let letra of textoLimpio){
        if ('aeiouáéíóúüÁÉÍÓÚÜ'.includes(letra.toLowerCase())) {
            vocales++;
        } else {
            consonantes++;
        };
    };

    console.log(`Texto original: ${texto}`);
    console.log(`Texto limpio: ${textoLimpio}`);
    console.log(`Vocales: ${vocales}`);
    console.log(`Consonantes: ${consonantes}`);
};

cuentaLetras('Este es un texto mas para prubeas de logica de programacion');