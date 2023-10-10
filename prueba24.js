function permutacion(secuencia, numero) {
    // Ordenar la secuencia de manera ascendente
    secuencia.sort(function(a, b) {
        return a - b;
    });

    // Verificar si hay una permutación válida
    for (let i = 0; i < secuencia.length - 1; i++) {
        if (secuencia[i] + 1 !== secuencia[i + 1]) {
            return false;
        }
    };

    // Comprobar si el número dado está en la secuencia
    if (secuencia.includes(numero)) {
        return true;
    } else {
        return false;
    };
};

console.log(permutacion([1, 2, 3, 4, 5], 1));