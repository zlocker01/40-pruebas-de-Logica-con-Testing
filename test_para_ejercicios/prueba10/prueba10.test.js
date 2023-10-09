const escalera = require('./prueba10');

test('Comprobar si la funcion está definida', () => {
    expect(escalera).toBeDefined();
});

test('Dado un numero, mostrar una escalera con escalones de [-] usando un numero para los niveles de la escalera', () => {
    expect(escalera(5)).toBe(
    '[-]\n' +
    '[-][-]\n' +
    '[-][-][-]\n' +
    '[-][-][-][-]\n' +
    '[-][-][-][-][-]\n');
});