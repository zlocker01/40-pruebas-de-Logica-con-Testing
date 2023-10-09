const impar = require('./prueba7');

test('comprobar si la funcuon está definida', () => {
    expect(impar).toBeDefined();
});

test('Mostrar cunatos nuemros entre dos numeros son impares', () => {
    expect(impar(1, 100)).toBe(49);
});