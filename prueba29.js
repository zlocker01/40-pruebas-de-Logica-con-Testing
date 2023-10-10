function capicua(numero){
    let numeroString = numero.toString().split('').reverse().join('');
    if(numero == numeroString){
        return true;
    } else {
        return false;
    };
};

console.log(capicua(1001));