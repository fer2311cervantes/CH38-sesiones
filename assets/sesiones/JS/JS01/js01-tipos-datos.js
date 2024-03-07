

/* 
    Tipos de datos en JavaScript:
    - primitivos y no primitivos.
    - 7 datos primitivos.
    - primitivos: boolean, number, string, null, undefined, symbol, bigint
    - no primitivos: object.
*/

/*
  Tipo de dato string: "Hola", "hola", 'hola', `hola`, 
  empty string: ""
*/

/*
  Tipo de datos number: numéros pósitivos, negativos, NaN, +Infinity, -Infinity
*/
console.log(`Numbers: ${12}, ${-6}, ${9.56}, ${4/"ch30"}, ${5/0} `);

console.log(`Valor máximo representable en JavaScript: ${Number.MAX_VALUE}`); //1.7976931348623157e+308
console.log(`Si el valor es mayor a MAX_VALUE: ${1.79e309}`);

console.log(`Valor entero seguro en JavaSript: ${Number.MAX_SAFE_INTEGER}`); //9007199254740991

/*
 Cuando se realizna operaciones que exceden los límites
 de MAX_SAFE_INTEGER se produce una pérdida de precisión.
*/
console.log( `MAx_SAFE_INTEGER + 1 : ${ Number.MAX_SAFE_INTEGER + 1} ` ); // 9007199254740992
console.log( `MAx_SAFE_INTEGER + 2 : ${ Number.MAX_SAFE_INTEGER + 2} ` ); // 
console.log( `MAx_SAFE_INTEGER + 3 : ${ Number.MAX_SAFE_INTEGER + 3} ` ); // 
console.log( `MAx_SAFE_INTEGER + 4 : ${ Number.MAX_SAFE_INTEGER + 4} ` ); // 
console.log( `MAx_SAFE_INTEGER + 5 : ${ Number.MAX_SAFE_INTEGER + 5} ` ); //

/*
    Tipos de dato BigInt
    Sirve para representar varios números enteros. de los que el tipo number no puede o es seguro representar

    Las operaciones con bigint se deben hacer con otro bigint
*/
const myBigInt = 9007199254740991n;
console.log(`Tipo de dato myBigInt: ${typeof myBigInt}`);
console.log(`myBigInt + 1n : ${myBigInt + 1n}`);
console.log(`myBigInt + 1n : ${myBigInt + 2n}`);
console.log(`myBigInt + 1n : ${myBigInt + 3n}`);
console.log(`myBigInt + 1n : ${myBigInt + 4n}`);
console.log(`myBigInt + 1n : ${myBigInt + 5n}`);

/* 
    tipo de dato undefined
    Una variable que se declara pero su tipo de dato no es definido
*/
let myVar;
console.log(`Tipo de dato undefined: ${myVar}`); //undefined

/*
    Tipo de dato null
    Una variable que intensionalmente se borra el tipo de dato.

*/
let myVarNull; // undefined
console.log(`Tipo de dato en myVarNull: ${ typeof myVarNull}`); // undefined
myVarNull = "Death Metal";
console.log(`Tipo de dato en myVarNull: ${typeof myVarNull}`); // string
myVarNull = null;
console.log(`Tipo de dato en myVarNull: ${typeof myVarNull}`); // object
console.log(`Tipo de dato en myVarNull: ${myVarNull}`); // object
console.log(`myVarNull es null: ${ myVarNull === null }`); // true

/*
    Tipo de dato boolean
    Tiene dos estados: true y false 

*/
console.log(`Tipo de dato verdadero: ${ true }`);
console.log(`Tipo de dato false: ${ false }`);

//===================================================================================
//   Objetos en JavaScript

//Tipo de dato object: Arrays

const myArray = ["primero","segundo","tercero"];
const myOtherArray = [
    "hola",
    "mundo"];

//Tipo de dato object
const misDatosDePerfil = {
    name: "Fernando",
    lastName: "Cervantes",
    age: 26,
    email: "fer2311cervantes@gmail.com",
    isActive: true,
    fullName:  function (){
        return `${this.name} ${this.lastName}`;
    }
};

const datosEsquivel = {
    name: "Daniel",
    lastName: "Esquivel",
    age: 19,
    email: "esquivel@gmail.com",
    isActive: true,
    fullName:  function (){
        return `${this.name} ${this.lastName}`;
    }
 };

 console.log(`Mi nombre es: ${misDatosDePerfil.name} y mi nombre completo es: ${misDatosDePerfil.fullName()}`);
 console.log(myArray);
 console.log(datosEsquivel);

 console.table(myOtherArray);
 console.table(misDatosDePerfil);

 //------------------------------------------------------------------------
 /*
    Conversion explícita de tipos (coerción de tipos)
*/

//Conversion a string (implicito)
const horaComida = 14.50;
console.log("hora de comida: "+ horaComida);
//Conversion a string (explicito)
const horaComidaText = String(horaComida);
console.log("hora de comida: "+ horaComidaText);
const colorVerde = 0x00913f; //representación hexadecimal
console.log(`El RGB del color verde es: ${colorVerde}`); //decimal 37183
console.log(`El RGB del color verde es: ${colorVerde.toString()}`); //string
console.log(`El RGB del color verde es: ${colorVerde.toString(16)}`); //hexadecimal
console.log(`El RGB del color verde es: #${colorVerde.toString(16).padStart(6,'0')}`); //hexadecima
//padstart completa la cedena

//Conversion a number--------------
const costo = "100";
const costoTotal = costo * 1.16;
console.log(`${costoTotal}`);

// conversión explícita
const precioJabon = "200";
const precioPapel = "300";
const carritoCompras = precioJabon + precioPapel;
console.log(`${carritoCompras}`);
const precioCroquetas = "1000.50";
const nuevoCarrito = parseInt( precioJabon) + Number( precioPapel ) + parseFloat(precioCroquetas);
console.log(`Nuevo carrito compra: ${nuevoCarrito}`); // 1240.50
// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log( parseInt("10.456")); // 10
// - Number devuelve NaN si la cadena contiene algún caracter no numérico
// - parseInt convierte los enteros hasta encontrar una caracter no numérico
//       Si la entrada no comienza con un valor numérico, devuelve NaN
console.log( parseInt("10-25") ); // 10
console.log( Number("10-25") ); // NaN
console.log( Number( true ) ); // 1
console.log( Number( false ) ); // 0
console.log( parseInt( true ) ); // NaN
// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined
console.log( Boolean(1) ); //true
console.log( Boolean(1000) ); //true
console.log( Boolean(-1000) ); //true
console.log( Boolean("Ya mero nos vamos a comer, me duele la cabeza") ); // true
console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true por que hay un espacio
// Number
// [] -> 0 , [30] -> 30, [30,33] -> NaN, false -> 0, true -> 1

// String
// [] -> "" , [12,2] -> "12,2", function(){} -> "funtion(){}", {} -> [object, object]

console.log( String( {name:"sergio"} ) ); // [object, object]
console.log( String( {name:"sergio", lastName:"Torres"} ) ); // [object, object]
// Conversión de un Objeto a JSON.
console.log( JSON.stringify( {name:"sergio", lastName:"Torres"} ) ); // {"name":"sergio","lastName":"Torres"}