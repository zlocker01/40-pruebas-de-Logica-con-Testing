const recortar = require('./prueba21');

test('DADO UN STRING MOSTRAR SOLO LA CANTIDAD DE CARACTERES QUE EL OTRO PARAMETRO INDIQUE', () => {
    expect(recortar('Esto es un texto largo', 4)).toEqual('Esto ');
});
