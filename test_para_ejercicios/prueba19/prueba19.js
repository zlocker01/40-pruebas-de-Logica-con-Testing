const peliculas = [
    {
        nombre: 'el señor de los anillos',
        director: 'Peter Jackson',
        vista: false
    },
    {
        nombre: 'la liga de la justicia',
        director: 'zack snyder',
        vista: true
    },
    {
        nombre: 'los vengadores',
        director: 'Joe Ruso',
        vista: true
    },
];

function peliculasVistas(peliculas){
    let resultado = [];

    for(pelicula of peliculas){
        let paraMostrar = `${pelicula.nombre} de ${pelicula.director} vista: ${pelicula.vista}`;
        resultado = paraMostrar;

        if(pelicula.vista){
            console.log(`ya has visto ${pelicula.nombre}`);
        } else {
            console.log(`te falta ver ${pelicula.nombre}`);
        };
    };


    return resultado;
};

module.exports = peliculasVistas;