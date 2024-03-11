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
    const mensaje = mostrarEstacion(mes);
    printMensaje(mensaje);
}

const colors = [
    '<button class="btn btn-outline-warning" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-danger" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-success" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-primary" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-info" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-secondary" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-light" onclick="changeButtonColor()">click</button>'];
let colorIndex = 0;
const changeButtonColor = () => {
    document.getElementById("toChangeColor").innerHTML=`${colors[colorIndex]}`;
    if( colorIndex === 6) colorIndex = 0;
    else colorIndex++;
    //console.log( ( Math.round(Math.random()*colors.length) ) );
    //console.log( `${colors[( Math.round(Math.random()*colors.length) )]}` );
}
/*Sesion */




//Exercise #1 -------------------------------------
console.log("Exercise #1:  -----------------------")
let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
    return arr.join(" ");
}
console.log(printOutString(arr));

//Exercise #2 -------------------------------------
console.log("Exercise #2:  -----------------------")
const numbers1 = [1,2,3,4,5]
const doubleNumbers = arr => arr.map( x => x * 2 );
console.log(doubleNumbers(numbers1));

//Exercise #3 -------------------------------------
console.log("Exercise #3:  -----------------------")
const sumNumbers = arr => arr.reduce( (x , y) => x + y );
const multiNumbers = arr => arr.reduce( (x , y) => x * y );
console.log(sumNumbers(numbers1));
console.log(multiNumbers(numbers1));

//Exercise #4 -------------------------------------
console.log("Exercise #4:  -----------------------")
let student1Courses = ['Math', 'English', 'Programming','Biology'];
let student2Courses = ['Geography', 'Spanish', 'Programming','English'];

const commonIncludes = ( arr1, arr2 ) => {
    const result = [];
    arr1.forEach(element => {
        if(arr2.includes(element)) result.push(element);
    });
    return result;
}
console.log(commonIncludes(student1Courses, student2Courses));

//Exercise #5 -------------------------------------
console.log("Exercise #5:  -----------------------")
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

const removeName = (arr, name) => {
    const index = arr.findIndex( element => element.toLowerCase() === name.toLowerCase());
    arr.splice(index,1);
}
removeName(people,"Dani");
removeName(people,"Juan");

const moveToFront = (arr, name) =>{
    removeName(arr, name);
    arr.unshift(name);
}
moveToFront(people, "Luis");

people.push("Fernando");


const showAndBreak = (arr, name) =>{
    for(const element of arr){
        console.log(element);
        if( element.toLowerCase() === name.toLowerCase() ) break;
    }
}
showAndBreak(people, "Maria");

console.log(`index of Maria: ${people.findIndex( element => element.toLowerCase() === "Maria".toLowerCase())}`);
console.log(`Final array: ${people}`);

//Exercise #6 -------------------------------------
console.log("Exercise #6:  -----------------------")
const entrada = [3, 6, 12, 5, 100, 1 ];
console.log(entrada);

for (let k = 1; k < entrada.length; k++) {
    for (let i = 0; i < (entrada.length - k); i++) {
        if (entrada[i] > entrada[i + 1]) [entrada[i] , entrada[i + 1]] = [entrada[i + 1], entrada[i]];
    }
}
console.log(entrada);
//https://3con14.biz/js/tips-and-tricks/17-ordenamiento-por-burbuja.html






/*
let a = 5;
let b = 10;
console.log("a: " + a + ", b: " + b);
[a , b] = [b , a];
console.log("a: " + a + ", b: " + b);*/








/*Sesion*/
//false:  false, "", 0, null, undefined, NaN
const gatoConBota = {
    name: "Gato",
    numVidas: 1,
    color: "naranja"
};
if( gatoConBota.pareja != undefined) console.log( gatoConBota.pareja )
//else console.log("el gato no tiene pareja");

gatoConBota.pareja && console.log( gatoConBota.pareja ); 
//gatoConBota.color && console.log( gatoConBota.color );

// Insertando imagen
const insertImage = () => document.getElementById("gato-image").innerHTML = `
            <img class="img-fluid" src="${gatoConBota.image}" alt="${gatoConBota.name}">
            `;
gatoConBota.image && gatoConBota.name && insertImage();





//console.log("Eliminando elementos: " + copyOfNames.splice(1,2));
//console.log("Eliminando elementos: " + copyOfNames.splice(1,0,"fer","cer"));


/* copyOfNames.splice(0,4,"fer","dany","raul","alex","rafa");
const formatListFor = (list) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        newList[i] = `<li>${list[i]}</li>`;
        //console.log(listOfNames[i]);
    }
    return newList;
}
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join(""); */
//printListID("list-names",formatListFor(copyOfNames));

// Iterar el arreglo y generar un nuevo array.
// método map 

// Esta función se va a llamar por cada elemento del arreglo que tiene el método map
/* const myFncCallBack = ( element, index , array ) => `index: ${index} element: ${element} => duplicate: ${element * 2}`;
const numbers = [1,5,7]
const duplicateFnc = numbers.map( myFncCallBack );
console.log( numbers );
console.log( duplicateFnc );
const duplicate = numbers.map( e => e * 2);
console.log(duplicate);

const products = ["tortillas","papas","jitomates","cebolla"]; */

/**
 * @param {array} list elements to format for show in a list <li></li> 
 * @returns elements with list format
 */
const formatListMap = (list) => list.map( e => `<li>${e}</li>`);
/**
 * 
 * @param {array} list 
 * @param {string} style 
 * @returns 
 */
/* const styleListMap = (list,style) => list.map(e => `<li class="${style}">${e}</li>`)
printListID("list-names",formatListMap(products));
console.log(products);  
printListID("list-second",styleListMap(products,"list-group-item list-group-item-danger")); */

/* const apellidos = ["cervantes","silva","medina","martinez"];
for(const apellido of apellidos){
    console.log(`apellido en forof: ${apellido}`);
} */

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

automoviles.reverse().forEach( function(element, index, arrar){
    console.log(element);
});
*/
const autos = ["audi", "mazda","mclaren"];
//for(const auto of autos.reverse()) console.log(`auto: ${auto}`);
//autos.reverse().forEach(x => console.log(x));

//forEach() and map() always need a callback function, forEach changes the original array,
//while map creates a new array

// ------------------- Uso de break en ciclos ----------------------------
// break no detiene la ejecución de la iteración en curso y termina el ciclo.

// Realizar la tabla de multiplicar del 5
// usando for loop
//for(let i=1;i<=10;i++) console.log(`5 * ${i} = ${i*5}`);
/*
for(let i=1;i<=10;i++){
    if(i === 6) break;
    console.log(`5 * ${i} = ${i*5}`);
}   */
/*
for(let i=1 ; i<=5 ; i++){
    console.log(`Tabla del ${i}:`);
    for(let j=1; j<=10 ; j++) console.log(`${i} * ${j} = ${i*j}`)
}*/
/** 
 * iterar todas las personas, pero no imprimir a hiddenName
 * 
 * */
/*
const usoDeContinue = (teams, hiddenName ) =>{
    for(const team of teams){ 
        console.log("Equipo " + team);
        sigPersona:
        for(const name of team ){
            if( name === hiddenName ) continue sigPersona;
            console.log("Persona: " + name);           
        }
    }
}

usoDeContinue(equipos, "Erick" );*/


/*
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}*/
