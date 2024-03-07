
/*
 Un bloque de código se define por {}
 Las variables declaradas con let y const
 dentro del bloque de código, solo tiene alcance
 dentro del mismo.
*/

var myVarA = "A";
let myVarB = "B";
const myVarC = "C";

function myScopeFunction() {
    var myVarFunctionVar = "var type";
    let myVarFunctionLet = "let type";
    const myVarFunctionConst = "const type";

    /* let y const tiene alcance de bloque
      Bloque de código: Los bloques de código son utilizados 
      para agrupar múltiples instrucciones y definir el 
      alcance de ciertas estructuras de control,
    */ 
    { // inicio de bloque de código
        //console.log(myVarFunctionVar); //var type
        //console.log(myVarFunctionLet); //let type
        //console.log(myVarFunctionConst); //const type
        {
            var myVarFunctionVar = "Nico";
            let myVarFunctionLet = "Andrés";
            const myVarFunctionConst = "José";  
            //console.log(myVarFunctionVar); //Nico
            //console.log(myVarFunctionLet); //Andres
            //console.log(myVarFunctionConst); //const type
        }
    } // find e bloque de código
    //console.log(myVarFunctionVar); //var type
    //console.log(myVarFunctionLet); //let type
    //console.log(myVarFunctionConst); //const type
}

myScopeFunction();

/*
https://github.com/sergiotrrs/Ch38-sesiones/tree/main/js/js02-funciones
*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Conjunto de instrucciones que realiza una tarea o calcula un valor.
  Código que se puede reutilizar.


  ----------- Funciones declaradas --------------
    (function declaration, function statement)
Una característica de las funciones declradas es que tien hoisting.

sintaxis:
    function nombreFuncionCamelCase ( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/
//console.log( greeting() );
function greeting() {
    return "Hola Ch38";
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
const sum = function (a,b){
    return a + b;
}
//console.log(sum(3,10));

// Pase por valor y pase por referencia =====================
// en los datos primitivos el pase es por valor
let age = 19;
let newAge = age; // 19
age = 40;
//console.log( newAge ); // 19

// en los objetos el pase de datos es por referencia
let myArray = [1,2,3];
let numbers = myArray;
myArray.push(4); // agregamos un elemento al final del arreglo [1,2,3,4]
//console.log(numbers);

// Clonar un array, para que sean objetos distintos.
// slice: crea una copia superficial del array original, desde el principio hasta el final.
let cloneNumbers = myArray.slice();
myArray.push(5);
//console.log(myArray);  // [1,2,3,4,5];
//console.log( cloneNumbers ); // // [1,2,3,4];

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function myName( name ){
    console.log("my name is " + name );
})("Fer");

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palbra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Función expresa  para calcular el área de un rectángulo.
const areaRectangulo = function (altura, base){
    return altura * base;
}
//console.log(areaRectangulo(3,10));

const perimetroRectangulo = (altura, base) => 2*(altura + base);
//console.log(perimetroRectangulo(5,3));

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const areaTriangulo = (altura = 1, base = 1) => (altura * base)/2;
//console.log(areaTriangulo(4,6));
//console.log(areaTriangulo(3)); 

/*
 ------------ Parámetros rest -----------------------
             (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de parámetros.

sintaxis:
     ...nombreParametros

*/

const sumatoriaMultiplesNumeros = (...restParameter) => {
    let suma = 0;
    for(let index = 0; index < restParameter.length; index++) //{}
        suma += restParameter[index];
    return suma;
}
//console.log(`Resultado de sumatoria múltiple ${sumatoriaMultiplesNumeros(4,5,6,7)}`);

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 /* 
 function imprimerEnConsola ( mensaje){
    console.log(mensaje);
} */
const imprimirEnConsola = ( mensaje ) => console.log(mensaje);
//imprimirEnConsola( "Hola Ch38, día de frutas y verduras");

const imprimirEnAlert = mensaje => alert(mensaje);
//imprimirEnAlert("hola mundo!!!");

/**
 * Recibe un mensaje y lo imprime en un paragraph
 * @param {string,string} id del paragraph y mensaje para imprimir en el DOM
 *
 */
const imprimirEnParagraph= (id, mensaje) => document.getElementById(id).innerHTML = `${mensaje}`;
//imprimirEnParagraph("message","holamundo");
 
/** */
/* const imprimirMensaje = (tipo,mensaje,id=1) => {
    if(tipo === "paragraph"){
        imprimirEnParagraph(id,mensaje);
    }
    else if(tipo === "alert"){
        imprimirEnAlert(mensaje);
    }
    else if(tipo === "console"){
        imprimirEnConsola(mensaje);
    }
} */
const imprimirMensaje = (tipo,mensaje,id=1) => {
    switch (tipo.toLowerCase()){
        case "paragraph":
            imprimirEnParagraph(id,mensaje);
            break;
        case "alert":
            imprimirEnAlert(mensaje);
            break;
        case "console":
            imprimirEnConsola(mensaje);
            break;
    }
}
//imprimirMensaje("COnsolE","hola mundo","message");

/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */
/* function imprimerEnConsola ( mensaje){
    console.log(mensaje);
} */

// implementando la anterior usando funciones de callback
const imprimirMensajeConCallbacks = ( fncCallBackImprime, mensaje  ) => fncCallBackImprime( mensaje);

// Invocando la función y enviando como argumento una función de callback
//imprimirMensajeConCallbacks(imprimirEnConsola,"ya nos vamos al descanso");
//imprimirMensajeConCallbacks( function(mensaje){ console.log(mensaje)}  , "Hola, ya merito nos vamos al primer descanso" );
//imprimirMensajeConCallbacks( mensaje => console.log(mensaje)  , "Hola, ya merito nos vamos al primer descanso" );

const nombres = ["raul","fernando","cervantes","silva"];
console.log(nombres.sort());

const name = "FERnamdO";
console.log(name.toLowerCase());

const numbersToCompare = [100,200,150,20];
//console.log(numbersToCompare.sort());
function comparacion(a,b){
    if( a < b )
        return -1;        
    else if( a > b ) 
        return 1;  //intercambia posiciones
    else
        return 0;
}
//console.log(numbersToCompare.sort(comparacion));

console.log([4,90,2,67].sort());
const compare = (a,b) => b-a;
console.log([4,90,2,67].sort(compare));

let arr = ["This", "is","a","sentence."];
function printOutString(array) {
    let str = "";
    for(let index=0 ; index<array.length ; index++){
        str += array[index] + " ";
    }
    console.log(str);
}
printOutString(arr);
console.log(arr.join(" "));

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;

function factorialConCicloFor( numero ){
    resultado = 1;
    for(let i=1 ; i<=numero ; i++)
        resultado *= i;
    return resultado;
}

console.log(`El factorial de 5 es: ${ factorialConCicloFor(5)}`); // 120

function factorialConRecursividad( numero ){
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/* 


function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo desado

 ej: saludar 10 veces

  Saludo 1
  Saludo 2
  Saludo 3
   ....
  Saludo 9
  Saludo 10

*/
function saludarVariasVeces(num){
    console.log(`Holi crayoli ${num}`);
    if(num <= 1) return 0;
    saludarVariasVeces(num-1);
}
//saludarVariasVeces(10);

function saludarSimple(num){
    if(num > 1){
        saludarSimple(num-1);
        console.log(`Holi ${num}`);
    }else{
        console.log(`Holi 1`);
    }
}
//saludarSimple(5);