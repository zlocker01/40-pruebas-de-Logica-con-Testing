// dado un string retornas los posbe ssub strings

function subStrings(string){
    let strings = [];

    for(letra in string){
        let comienzo = parseInt(letra);

        for(let i = 1; i <= string.length - comienzo; i++){
            let final = parseInt(i) + parseInt(comienzo);

            strings.push(string.substring(comienzo, final));
        };
    };

    return strings;
};

console.log(subStrings('hola'));

