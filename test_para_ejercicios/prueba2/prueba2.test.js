const palindromo =  require('./prueba2');

test('Comprobar si la funcion esta definida', () => {
    expect(palindromo).toBeDefined();
});

test('Comprobar si es o no palindromo un nombre', () => {
    expect(palindromo('Anna')).toBe(true);
    expect(palindromo('Diego')).toBe(false);
});

