console.log("JS03");

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/
const temperatura = (temp) =>{
    if(temp<=30 && temp>=23) console.log(`Temperatura: ${temp}, hace calor!`);
    else if(temp === 22) console.log(`Temperatura: ${temp}, es ideal!`);
    else if(temp<=21 && temp>=15) console.log(`Temperatura: ${temp}, hace frio!`);
    else console.log(`Temperatura: ${temp}, te vas a morir!`);
}

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/
const setVelocidadVentilador = ( velocidad )  => {

    let mensaje = "";

    switch( velocidad ){
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "Velocidad baja";
            break;
        case 2:
            mensaje = "Velocidad media";
            break;
        case 3:
            mensaje =  "Velocidad alta";
            break;
        default:
            mensaje = "El nivel no existe";
    }
    return mensaje;
}

/* Para leer de un boton */
/* const getInputValue = () => document.getElementById("user-input").value;
console.log("Entrada de usuario: " + getInputValue() );
const handleEstaciones = () => console.log("seleccion: " + getInputValue()); */

// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/

/* const mostrarEstacion = () => {
    let num = parseInt(getInputValueID("input"));
    if(num===12 || num===1 || num===2) 
} */
/* const mostrarEstacion = () => {
    let num = parseInt(getInputValueID("input"));
    switch(num){
        case 1: case 2: case 12:
            console.log("El mes: " + getInputValueID("input") + " es invierno");
            document.getElementById("resultadoEstacion").innerText = "Tu mes es invierno";
            break;
        case 3: case 4: case 5:
            console.log("El mes: " + getInputValueID("input") + " es primavera");
            document.getElementById("resultadoEstacion").innerText = "Tu mes es primavera";
            break;
        case 6: case 7: case 8:
            console.log("El mes: " + getInputValueID("input") + " es verano");
            document.getElementById("resultadoEstacion").innerText = "Tu mes es verano";
            break;
        case 9: case 10: case 11:
            console.log("El mes: " + getInputValueID("input") + " es otoño");
            document.getElementById("resultadoEstacion").innerText = "Tu mes es otoño";
            break;
        default:
            console.log("El mes "+getInputValueID("input")+" no existe");
            document.getElementById("resultadoEstacion").innerText = `El mes ${num} no existe`;
            break;
    }  
} */

// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const getInputValueID = (id) => document.getElementById(id).value;
const mostrarEstacion = (num) => {
    let result = "";
    switch(num){
        case 1: case 2: case 12:
            result = "invierno";
            break;
        case 3: case 4: case 5:
            result = "primavera";
            break;
        case 6: case 7: case 8:
            result = "verano";
            break;
        case 9: case 10: case 11:
            result = "otoño";
            break;
        default:
            result = "no existe";
            break;
    } 
    return result;
}
const printMensaje = ( mensaje ) => {
    document.getElementById("message").innerHTML= `
    <div class="alert alert-success" role="alert">
    ${ mensaje === "invierno" ? `<h1> ${mensaje} </h1>`:`<h5> ${mensaje} </h5>`}
    </div>
    `;
}
const handleEstaciones = () => {
    const mes = parseInt(getInputValueID("user-input"));
    console.log(mes);
    console.log(typeof mes);
    console.log("seleccion: " + mes);
    const mensaje = mostrarEstacion(mes);
    printMensaje(mensaje);
}