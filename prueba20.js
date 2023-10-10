//  dada dos strings comprubea si son anagramas entre si

function limpiarTexto(texto) {
    return texto.replace(/[^\w]/gi, '').toLowerCase();
}

function sonAnagramas(texto1, texto2) {
    const limpioTexto1 = limpiarTexto(texto1);
    const limpioTexto2 = limpiarTexto(texto2);

    return limpioTexto1 === limpioTexto2;
}


console.log(sonAnagramas('dracula', 'alucard'));