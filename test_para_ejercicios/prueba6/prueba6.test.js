const cuadrado = require('./prueba6');

test('Probar si funcion esta definida', () => {
    expect(cuadrado).toBeDefined();
});

test('Crear un cuadrado hueco al centro', () => {
    expect(cuadrado(4)).toBe('****\n*  *\n*  *\n****');
});