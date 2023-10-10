function calcularDias(dias){
    let years = Math.floor(dias / 365);
    let diasRestantes = (dias % 365);
    let meses = Math.floor(diasRestantes / 30);
    diasRestantes = diasRestantes % 30;

    return `Equivale a ${years} años, ${meses} meses, ${diasRestantes} dias restantes`;

};

console.log(calcularDias(957));