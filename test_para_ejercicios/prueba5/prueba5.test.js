const tantoPorCiento = require('./prueba5');

test('Compribar si la funcion esta definida', () => {  expect(tantoPorCiento).toBeDefined()});

test('Sacar procentaje de un number dado', () => {  expect(tantoPorCiento(43, 897)).toBe(385.71)});