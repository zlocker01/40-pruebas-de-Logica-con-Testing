/* dado un numero indicar que topo de angulo es */

function tipoAngulo(grados){
    let angulo = '';

    if (grados < 90){
        return angulo = 'agudo';
    } else if (grados > 90 && grados < 180){
        return anulo = 'obtuso';
    } else if (grados === 90){
        return angulo = 'recto';
    } else if (grados === 180) {
        return angulo = 'llano';
    } else if (grados > 180 && grados !== 360){
        return angulo = 'mayor de 180';
    } else if (grados === 360){
        return angulo = 'completo'
    } else {
        'dato incorrecto';
    };

};

console.log(tipoAngulo(150));