const censurado = require('./prueba11');

test('Comprobar is la funcion está definida', () => {
    expect(censurado).toBeDefined();
});

test('mensaje si no hay mostrar texto', () => {
    expect(censurado('', 'hola')).toBe('No puedes leer el texto');
});

test('mensaje si no hay busqueda', () => {
    expect(censurado('hola', '')).toBe('No hay busqueda');
});

test('Mostrar la Cnesura', () => {
    expect(censurado('hola, hola, hola', 'hola')).toBe('[-CENSURADO-], [-CENSURADO-], [-CENSURADO-]');
});