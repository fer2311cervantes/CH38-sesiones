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
/*Sesion JS04*/
console.log("JS04");
const names = [];
names.push("fernando");
names.push("cervantes","silva");
names.unshift("raul");
//console.log(names);
names.pop();
//console.log(names);
names.shift();
//console.table(names);
//console.log(names.indexOf("cervantes")); //1
//console.log(names.indexOf("raul") != -1 ? "existe" : "no existe"); //no existe
names.push("holi");
names.unshift("holi");
//console.log(names.indexOf("holi")); //o
//console.log(names.indexOf("holi",1)); //3
//console.table(names);

const copyOfNames = names.slice();
console.log("Eliminando elementos: " + copyOfNames.splice(1,2));
console.log("Eliminando elementos: " + copyOfNames.splice(1,0,"fer","cer"));


copyOfNames.splice(0,4,"fer","dany","raul","alex","rafa");
const formatListFor = (list) => {
    const newList = [];
    for (let i = 0; i < list.length; i++) {
        newList[i] = `<li>${list[i]}</li>`;
        //console.log(listOfNames[i]);
    }
    return newList;
}
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join("");
//printListID("list-names",formatListFor(copyOfNames));

// Iterar el arreglo y generar un nuevo array.
// método map 

// Esta función se va a llamar por cada elemento del arreglo que tiene el método map
const myFncCallBack = ( element, index , array ) => `index: ${index} element: ${element} => duplicate: ${element * 2}`;
const numbers = [1,5,7]
const duplicateFnc = numbers.map( myFncCallBack );
console.log( numbers );
console.log( duplicateFnc );
const duplicate = numbers.map( e => e * 2);
console.log(duplicate);

const products = ["tortillas","papas","jitomates","cebolla"];

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
const styleListMap = (list,style) => list.map(e => `<li class="${style}">${e}</li>`)
printListID("list-names",formatListMap(products));
console.log(products);  
printListID("list-second",styleListMap(products,"list-group-item list-group-item-danger"));

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
for(const auto of autos.reverse()) console.log(`auto: ${auto}`);
autos.reverse().forEach(x => console.log(x));

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
romperFor:   //label
for(let i=1 ; i<=5 ; i++){
    console.log(`Tabla del ${i}:`);
    for(let j=1; j<=10 ; j++){
        if(i===1 && j===1) break romperFor;
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

const equipos = [ 
    ["Charly"  , "Axel"  , "Joce"    , "Alan"  ,"Karen", "Donaji", "Aline", "Ryan"], // 404
    ["Pedrito" , "Ari"   , "Esquivel", "Uli"   , "Penny", "Yetzel", "Eric", "Jesús"], // Java.lio
    ["Eric"   , "Chongo", "Giss"    , "Andres", "Fernando", "Frida", "Victor", "Dan", "Bastian"]  // LoopLegion
];

const iterateTeams = (teams,nameBreak) =>{
    breakTeam:   //label
    for(const team of teams){
        for(const name of team){
            console.log(`${name}`)
            if(name.toLowerCase() === nameBreak.toLowerCase()) break breakTeam;
        }
    }
}
iterateTeams(equipos, 'axel');

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

// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/
/*
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}*/

const num = [];
for(let i=0 ; i<10 ; i++){
    num[i] = Math.round(Math.random()*50)+1;
}
//console.log(num);
const colors = [
    '<button class="btn btn-outline-warning" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-danger" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-success" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-primary" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-info" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-secondary" onclick="changeButtonColor()">click</button>', 
    '<button class="btn btn-outline-light" onclick="changeButtonColor()">click</button>'];
console.log(colors.length);
const changeButtonColor = () => {
    document.getElementById("toChangeColor").innerHTML=`${colors[( Math.round(Math.random()*colors.length) )]}`;
}

// ============== Ciclo Do-While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla. La evaluación se realiza después de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.

 Sintaxis:

    do {
        sentencias;
    } while( condición );

*/
/*
do{
    console.log(`Su numero de la suerte es: ${Math.round(Math.random()*10)}`)
}while(confirm("desea continuar?"))
*/

const loopDoWhile = (start,end) =>{
    do{
        console.log(`doWhile: ${start}`);
        start++;
    }while(start<=end);
}
loopDoWhile(3,12);

const loopWhile = (start,end) =>{
    while(start<=end){
        console.log(`while: ${start}`);
        start++;
    }
}
loopWhile(3,9);