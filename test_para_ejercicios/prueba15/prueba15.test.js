const masUsado = require('./prueba15');

test('mostrar la letra más repetida del texto, cuántas veces se repite y el contador de repetición de cada letra', () => {
    const resultado = masUsado('Este es un texto');
    
    // Comprobar la letra más repetida
    expect(resultado.letra_mas_repetida).toBe('t');

    // Comprobar el mapeo de letras
    expect(resultado.mapeo_letras).toEqual({ E: 1, s: 2, t: 3, e: 3, ' ': 3, u: 1, n: 1, x: 1, o: 1 });

    // Comprobar el máximo de repeticiones
    expect(resultado.maximoReps).toBe(3);
});

