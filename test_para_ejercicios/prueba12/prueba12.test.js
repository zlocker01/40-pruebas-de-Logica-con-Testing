const hastaCero = require('./prueba12');

test('Comprobar si la funcion está definida', () => {
    expect(hastaCero).toBeDefined();
});

test('dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones y cada numero debe empezar por n°', () => {
    expect(hastaCero(100)).toMatch(/- n° 100[\s\S]*- n° 92[\s\S]*- n° 84[\s\S]*- n° 76[\s\S]*- n° 68[\s\S]*- n° 60[\s\S]*- n° 52[\s\S]*- n° 44[\s\S]*- n° 36[\s\S]*- n° 28[\s\S]*- n° 20[\s\S]*- n° 12[\s\S]*- n° 4/);
});

