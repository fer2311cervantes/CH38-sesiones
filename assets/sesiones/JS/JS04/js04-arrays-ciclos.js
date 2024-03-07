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

const apellidos = ["cervantes","silva","medina","martinez"];
for(const apellido of apellidos){
    console.log(`apellido en forof: ${apellido}`);
}