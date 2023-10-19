// dado un array de obj devovler cuales son las afficone smas comunes de los usuarios



const usuarios = [
    {nombre: 'Carlos', aficiones: ['informatica', 'cine', 'videojuegos']},
    {nombre: 'Olga', aficiones: ['cine', 'videojuegos']},
    {nombre: 'Irina', aficiones: ['informatica', 'videojuegos']},
    {nombre: 'Fernando', aficiones: ['informatica', 'cine', 'videojuegos']},
    {nombre: 'Ana', aficiones: ['informatica', 'cine']}
];

function aficiones(usuarios){
    let mapeo = [];

    usuarios.forEach(usuario => {

        for(aficion of usuario.aficiones){
            if(!mapeo[aficion]){
                mapeo[aficion] = 1;
            } else {
                mapeo[aficion]++;
            };
        }; 
    });

    return mapeo;
};

console.log(aficiones(usuarios));