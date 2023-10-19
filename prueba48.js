// dado un string devovler cuales son las letras que aparecen una vez, y cual es la primera

const { text } = require("express");

function soloUnaVez(texto){
    let contador = {};

    let resultado = [];

    let letras = texto.split('').filter(letra => letra.trim().length >= 1);

    for(letra of letras){
        if(!contador[letra]){
            contador[letra] = 1;
        } else {
            contador[letra]++;
        };
    };

    for(letra of letras){
        if(contador[letra] >= 2){
            delete contador[letra];
        } else {
            resultado.push(letra);
        }
    };

    return [resultado, resultado[0]];
};

console.log(soloUnaVez('hoy'));