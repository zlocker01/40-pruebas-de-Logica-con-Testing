const vocales = require('./prueba16');

test('regresa el nuemro de vocales en un string', () => {
    expect(vocales('Este es un texto')).toBe(6);
});