// importamos la función del module
const tablaMultiplicar = require('./prueba1.js');

// funcion para el test
test('Comprobar si al funcion esta definida', () => {
    expect(tablaMultiplicar).toBeDefined();
});


test('debe devolver la tabla de multiplicar completa para 5', () => {
        const tablaEsperada = "5 x 1 = 5 \n5 x 2 = 10 \n5 x 3 = 15 \n5 x 4 = 20 \n5 x 5 = 25 \n5 x 6 = 30 \n5 x 7 = 35 \n5 x 8 = 40 \n5 x 9 = 45 \n5 x 10 = 50 \n";
        expect(tablaMultiplicar(5)).toBe(tablaEsperada);
});

