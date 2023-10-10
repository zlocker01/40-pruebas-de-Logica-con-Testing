

const peliculasVistas = require('./prueba19');

test('mostrar datos de peliculas y si ya la he visto', () => {
    expect(peliculasVistas(peliculas)).toBe('los vengadores de Joe Ruso vista: true');
});