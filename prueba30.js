function eliminarDuplicado(elementos){
    elementos = elementos.filter(elemento => {return typeof elemento === 'number'});
    
    let setNoDuplicados = new Set(elementos); 

    return Array.from(setNoDuplicados);
};
console.log(eliminarDuplicado([1, 2, 'dos', 3, 'nueve', 'cinco', 4, 5, false, 6]));