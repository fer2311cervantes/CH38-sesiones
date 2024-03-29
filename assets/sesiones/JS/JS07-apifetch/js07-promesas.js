console.log("JS07 Promises");

/*
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.

 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.

 Las promesas tiene 3 estados:

 1.- Pending: El estado inicial de una promesa antes de que se resulva o rechace
 2.- Resolved: La promesa se reaulve con un valor
 3.- Rejected: La promesa se rechaza con un razón

Resolve y reject con funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise.

sintaxis:
    const pinkyPromise = new Promise ( fncCallBack );

    pinkyPromise.then(  ()=> ).catch( ()=> ).finally( ()=> );
    .then( () => console.log("then") )         // happens when promise is rejected
    .catch( () => console.log("catch") )       // happens when promise is reolved
    .finally( () => console.log("finally") );  // always happens at the end of promise

*/

/* const pinkyPromise = new Promise ( (fncCallBackResolve, fncCallBackRejec) => {
    const hayAmor = false;

    if( hayAmor){
        fncCallBackResolve("promise resolved");
    }else{
        fncCallBackRejec({ error:404 , message:"promise rejected" });
    }
} );
    Forma correcta de consumir la promesa, usar el método then y catch
    console.log("Después de then y catch y pinkPromise"); 
    pinkyPromise
    .then( (response) => console.log( "Respuesta de resolve: " + response ) )
    .catch( (error) => console.log( "Respuesta de error: " + JSON.stringify(error) ) ); */


/*
  Entrar a la catafixia
  Nombres de personas que pueden participar y ganar
  ["Giss", "Sergio", "Axel", "Nico", "Uli", "Ryan", "Joanna"]
  Si tu nombre no está en el arreglo: "una espantosa X, siga participando Cuate"
  Hacer que muestre si eres ganador o no, en tun tiempo de 5 segundos.

*/

/** promesa con argumentos */
const catafixia = ( name ) => {
    const personasGanadoras = ["Giss", "Sergio", "Axel", "Nico", "Uli", "Ryan", "Joanna"];
   const myPromise = new Promise( (resolve, reject )=>{   
    if(  personasGanadoras.includes( name )  ){
        resolve(`Felicidades ${name}, has ganado un juego de sala de muebles troncos`);
    } else {
        reject(`Una espantosa X, siga participando ${name}`);
    }
   } );

   return myPromise;
}

/* catafixia("Sergio")
    .then( response => console.log(response))
    .catch( error => console.log(error)); */

const convertirAMayusculas = ( text) =>{       
  return new Promise( (resolve, reject)=>{    
    resolve( text.toUpperCase());
  });
}

/* catafixia("Sergio")
    .then( response => convertirAMayusculas(response) )
    .then( ( textToMayus )=> console.log( textToMayus) )    
    .catch( error => console.log(error)); */


    //---------------- manejar las promesas con async y await-------------
/*
 Async y Await facilita la escritura y lectura de código asíncrono.
 Permite escribir código asíncrono de manera similar a cómo se escribiría
 código síncrono.

*/
const realizaCatafixia = async ( name )=>{
  
    const textoGanador = await catafixia( name );
    console.log( textoGanador );
    const textoMayus = await convertirAMayusculas( textoGanador);
    console.log( textoMayus );
  
  };
  
  realizaCatafixia("Sergio");

  const realizaExcepcion = async ( name )=>{
    /*
      En JavaScript, try y catch son bloques utilizados para 
      manejar errores. Permiten controlar el flujo de ejecución 
      del código cuando ocurren excepciones, lo que ayuda a evitar 
      que los errores detengan abruptamente el programa.
  
      sintaxis:
         try{
  
         } catch( exception) {
  
         }
    */
    try{
      const textoGanador = await catafixia( name );
      const textoMayus = await convertirAMayusculas( textoGanador);
      console.log( textoMayus );
  
    } catch( exception ){
      console.error("Ay, nanita, ocurrió: " + exception);
    }
  };
  
  realizaExcepcion("Uriel");