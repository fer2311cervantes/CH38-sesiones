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