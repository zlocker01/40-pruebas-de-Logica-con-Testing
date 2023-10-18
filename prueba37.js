// dado un array o un texto devolver el elemento o palabras que mas aparecen


function elQueMasAparece(datos){
    let mapeo = {};

    let masFrecuente = '';

    let valorMasFrecuente = 0;

    if(typeof datos === 'string'){
        datos =  datos.split(' ');
    };

    for(elemnto of datos){

        if(mapeo[elemnto]){
            mapeo[elemnto]++;
        } else {
            mapeo[elemnto] = 1;
        };
    };

    for(elemnto in mapeo){
        if(mapeo[elemnto] > valorMasFrecuente){
            valorMasFrecuente = mapeo[elemnto];
            masFrecuente = elemnto;
        };
    };

    console.log(`El valor mas frecuente es: ${masFrecuente} \n Se repite: ${valorMasFrecuente} veces`);
};


elQueMasAparece('Este es otro texto para un ejercicio de logica de programaicon con js');
elQueMasAparece([1, 3, 3, 4, 3, 1, 1, 2, 3, 3, 2, 4, 2, 4, 4, 1, 2]);