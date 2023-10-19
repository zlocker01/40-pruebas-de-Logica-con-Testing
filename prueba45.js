// doado u array de alunso con nombre y nota mostrar cunatos pasaron y reprobaron

function calificacion(alumnos){
    let aprobado = 0, reprobado = 0;

    for(alumno of alumnos){
        if(alumno[1] > 5){
            aprobado++;
        } else {
            reprobado++;
        };
    };

    return {
        aprobados: aprobado, 
        reprobados: reprobado
    };
};

console.log(calificacion([
    ['Juan', 8],
    ['Pedro', 10],
    ['Cristian', 0],
    ['Alex', 6],
    ['Yuvit', 3]
]));