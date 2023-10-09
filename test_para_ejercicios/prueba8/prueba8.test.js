const invertirNumero = require('./prueba8');

test('Comprobar si la funcion esta deifnida', () => {
    expect(invertirNumero).toBeDefined();
});

test('Invertir un numero y retornarlo', () => {
    expect(invertirNumero(95)).toBe(59)
});