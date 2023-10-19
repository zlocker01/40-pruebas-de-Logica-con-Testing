// dados dos numeros sacar un numero aleatorio

function aleatorio(numeroMin, numeroMax){
    return Math.round(Math.random() * (numeroMax - numeroMin) + numeroMin);
};

console.log(aleatorio(1, 100));