// haz un reloj que en tiempo rela muestre la hira  acada segundo, usa el date obj  para conseguri la hora por primera vez , no para actualizarla

//* forma muy facil de hacerlo

// function relojRapido(){
//     setInterval(() => {
//         const fecha = new Date();
        
//         const horas = fecha.getUTCHours();

//         const minutos = fecha.getMinutes();

//         const segundos = fecha.getUTCSeconds();

//         console.log(`${horas}: ${minutos}: ${segundos}`);
//     }, );
// };

// console.log(relojRapido());

//? forma requerida

class reloj{
    constructor(){
        this.fecha = new Date();
        this.horas = this.fecha.getUTCHours();
        this.minutos = this.fecha.getUTCMinutes();
        this.segundos = this.fecha.getSeconds();
    };

    actualizar(segundos){
        this.segundos += segundos;

        //actualizar segundos
        if(this.segundos >= 60){
            this.minutos++;
            this.segundos = 0;
        };

        //actualizar minutos
        if(this.minutos >= 60){
            this.horas ++;
            this.minutos = 0;
        };

        if(this.horas >= 24){
            this.horas = 0;
        };
    };

    mostrar(){
        this.actualizar(1);
        console.log(`${this.horas}: ${this.minutos}: ${this.segundos}`);
    };

    encender(){
        setInterval(() => {
            this.mostrar();
        }, 1000);
    };
};

//instnaciar
let miReloj = new reloj();

miReloj.encender();

console.log(miReloj);



