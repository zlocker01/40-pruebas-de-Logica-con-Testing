const elementosComunes = require('./prueba9');

test('Comprobar si la funcion esta definida', () => {
    expect(elementosComunes).toBeDefined();
});

test('encontrar todos los elementos incluidos en dos arrays que se repitan y retonrarlo', () => {
    expect(elementosComunes([4, 6, 7, 6], [7, 8, 4, 5])).toEqual([4, 7]);
});