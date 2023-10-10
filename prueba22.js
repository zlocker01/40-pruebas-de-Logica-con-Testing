// dados dos numeros indicar cual es mayr y cual es menor

function mayorMenor(numero1, numero2){
    if(numero1 > numero2){
        return `El numero mayor es ${numero1} \n El menor es ${numero2}`;
    } else if (numero2 > numero1){
        return `El numero mayor es ${numero2} \n El menor es ${numero1}`
    }
};

console.log(mayorMenor(2, 6));