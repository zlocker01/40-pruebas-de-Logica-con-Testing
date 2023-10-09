const divideArray = require('./prueba13');

test('Comprobar is la funcion está definida', () => {
    expect(divideArray).toBeDefined();
});

test('dividir un array en cuantas partes la función indique', () => {
    expect(divideArray([7, 8, 9, 10], 2)).toEqual([[7, 8], [9, 10]]);
  });