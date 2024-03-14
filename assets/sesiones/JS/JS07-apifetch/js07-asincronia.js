console.log("JS07 Asincronia");

// Api: Interfaz, algo que conecta a con b
// API: Interfaces que permiten que diferentes aplicaciones se comuniquen entre sí.

/*-----------Programación síncrona.-------------------------
  Ejecutar una tarea después de otra, de manera secuencial.
  Si una tarea tarda mucho tiempo en completarse, pruede bloquear el hilo
  de ejecución.     */
const primerPaso = () =>{
  console.log("01 -  Inicio de mi programa");
}
//primerPaso();



/*-----------------Programación asíncrona.---------------------
 Las tareas no se bloquean entre sí.
 La programación asíncrona es fundamental en JavaScript para
  realizar operaciones no bloqueantes, como peticiones HTTP, 
  operaciones de lectura/escritura de archivos, etc., 
  lo que mejora el rendimiento y la capacidad de respuesta 
  de las aplicaciones               */
/*--------------setTimeout()--------------------------------
   Establece un temporizador que ejecuta una función de callback
   una vez que expire el temporizador
   sintaxis:
     setTimeout( fncCallback, tiempo_ms, argumentos_fnc );
     setTimeout( ()=>{}  , tiempo_ms );             */

//const saludoPersona = ( personName ) => console.log("hola" + personName);
const pasoAsincrono = ( name ) => {
  setTimeout( ()=>console.log(`Hola ${name}`)  , 3000  );
  // setTimeout(  saludoPersona , 3000, name  );
}

/* ------------------------- setInterval ------------------------
    Ejecuta una función de manera reiterada con un tiempo de retardo fijo */
const pasoConIntervalo = ( name ) => {
  setInterval( 
    ()=> console.log(`Hola ${name} te saludo a las ${new Date().toLocaleString()}`) 
    , 3000);
}
//pasoConIntervalo("Ariana"); // Hola Ariana te saludo ... (cada 3 segundos se repite)

/* -----------------addEventListener-------------------
generar evento de 'click' (addEventListener) de cada boton
Usando la funcion querySelector y el id (#id) para la direccion
//resetButton.click()*/

const dateH2 = document.querySelector("#date-h2");
let intervalId;
let i = 0
const startButton = document.querySelector("#startInterval");
startButton.addEventListener("click", (e)=>{
    intervalId = setInterval( 
        ()=> dateH2.innerHTML = i++
        , 1000);
    //disableStartButton();
});

const stopButton = document.querySelector("#stopInterval");
stopButton.addEventListener("click", (e)=>{
    clearInterval(intervalId);
    
});


const resetButton = document.querySelector("#resetInterval");
resetButton.addEventListener("click", (e)=>{
    i = 0;
    dateH2.innerHTML = "";
    //enableStartButton();
});

const stateButtons = ( startButtonActive, stopButtonActive, resetButtonActive  ) =>{
    startInterval.style.display = startButtonActive === true ? "inline": "none";
    stopInterval.style.display = stopButtonActive === true ? "inline": "none";
    resetInterval.style.display = resetButtonActive === true ? "inline": "none";
}

const enableStartButton = () =>{
    stateButtons(true,false,false);
};
const disableStartButton = () =>{
    stateButtons(false, true, true);
};


