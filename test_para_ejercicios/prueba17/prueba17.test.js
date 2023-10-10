const buzz = require('./prueba17');

test('DADO UN NUMERO MOSTRAR EN LA CONSOLA FIZZ, BUZZ, O FIZZ BUZZ, DEOENDIENDO LOS MULTIPLOS DEL NUmero', () => {
    expect(buzz(15)).toBe('fizzbuzz')
});