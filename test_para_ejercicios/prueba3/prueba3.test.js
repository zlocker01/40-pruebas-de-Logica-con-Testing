const coincidencias = require('./prueba3');

test('comprobar si al función está definida', () => {
    expect(coincidencias).toBeDefined();
});

test('Comprobar si una frase tiene palabras que se reptian y cuantas veces', () => {
    expect(coincidencias('Hola soy una palabra en una frase, acompañada de otra palabra', 'palabra')).toBe('La palabra "palabra" se repite 2 veces');
});