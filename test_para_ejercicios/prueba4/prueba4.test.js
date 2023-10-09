const invertir = require('./prueba4');

test('Comprobar si la funcion esta definida', () => {
    expect(invertir).toBeDefined();
});

test('Invertir string', () => {
    expect(invertir('hola')).toBe('aloh');
});