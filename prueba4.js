/* cadena de texto  darle la vuelta e invetir el orden de sus caracteres sin usar metodos propios del lenguaje */

function invertir(texto){
    // var para guardar el nuevo string
    let invertido = '';

    // iterar la cadena de texto (string)
    for(let i = texto.length - 1; i >= 0; i--){
        //  reconstruimos el string en una copia nueva acomodado en el orden inverso
        invertido += texto[i];
    };

    return invertido;
};

console.log(invertir('hola'));
console.log(invertir('Anastazja'));