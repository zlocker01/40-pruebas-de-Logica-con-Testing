const repite = require('./prueba14');

test('funcion esta definida', () => {
    expect(repite).toBeDefined();
});

test('devovler un string el numero de veces indicado', () => {
    expect(repite('Palabra', 2)).toEqual('PalabraPalabra');
});