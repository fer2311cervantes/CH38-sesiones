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




const cardList = [1,1,2,2,3,3,4,4,5,5,6,6];
let count = 0;
let selected = [];
let finished = [];

const resetList = () =>{
    for(i = 0; i < 12 ; i++){
        
        //Math.floor(Math.random() * 10);
    }
}
const card = (id) =>{

    if(count < 2){
        //
        changeColor(id, cardList[id]);
        selected.push(id);
        //console.log(`selected: ${selected}`); //_______________________
        count++;
        //console.log(count);    //_______________________
        if(count == 2 && ( cardList[selected[0]] ===  cardList[selected[1]])){
            finished.push(selected[0]);
            finished.push(selected[1]);
            
            //console.log(`finished: ${finished}`); //_______________________
        }
    }
    else{
        count = 0;
        //console.log(count);    //_______________________
        if(finished.includes(selected[0]) && finished.includes(selected[1])) ;//console.log(selected);
        else{
            resetColor(selected[0]);
            resetColor(selected[1]);
        }
        selected.pop();
        selected.pop();
        
        //console.log(selected); //_______________________
    }
    
};


const changeColor = (id, color) =>{
    let newColor = "";
    switch(color){
        case 1:
            newColor = `<button class="btn btn-lg btn-warning" onclick="card(${id})" disabled>Hi !</button>`
            break;
        case 2:
            newColor = `<button class="btn btn-lg btn-danger" onclick="card(${id})" disabled>Hi !</button>`
            break;
        case 3:
            newColor = `<button class="btn btn-lg btn-info" onclick="card(${id})" disabled>Hi !</button>`
            break;
        case 4:
            newColor = `<button class="btn btn-lg btn-success" onclick="card(${id})" disabled>Hi !</button>`
            break;
        case 5:
            newColor = `<button class="btn btn-lg btn-primary" onclick="card(${id})" disabled>Hi !</button>`
            break;
        case 6:
            newColor = `<button class="btn btn-lg btn-secondary" onclick="card(${id})" disabled>Hi !</button>`
            break;
        default:
            break;
    }
    const newMessage = document.getElementById(`card${id}`);
    newMessage.innerHTML = newColor;
};

const resetColor = (id) =>{
    const originalColor = `<button class="btn btn-lg btn-outline-light" onclick="card(${id})">Hi !</button>`;
    const newMessage = document.getElementById(`card${id}`);
    newMessage.innerHTML = originalColor;
};

const resetGame = () =>{
    count = 0;
    for( i = 0 ; i < selected.length ; i++){
        selected.pop();
    }
    console.log(`selected: ${selected}`); //_______________________

    for( i = 0 ; i < finished.length ; i++){
        finished.pop();
    }
    console.log(`finished: ${finished}`); //_______________________

    for(i = 0 ; i < 13 ; i++){
        const cardToReset = document.getElementById(`card${i}`);
        cardToReset.innerHTML = `<button class="btn btn-lg btn-outline-light" onclick="card(${i})">Hi !</button>`;
    }
    resetList();
}


























/* const getInputValueID = (id) => document.getElementById(id).value;
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
} */


