const numerosDivisores = require('./prueba18');

test('mostrar si el nuemro es divisor de otro y cual numero es divisor', () => {
    expect(numerosDivisores(10, 1)).toBe(1);
});