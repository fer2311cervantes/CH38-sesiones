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



//   GAME -------------------------------------------------------------------------------------
let cardList = [];
let count = 0;
let selected = [];
let finished = [];


const resetList = () =>{
    let rnumber = Math.floor((Math.random() * 6) + 1);

    if(seeNewList(rnumber)) cardList.push(rnumber);

    if(cardList.length < 12) resetList();
}

const seeNewList = (number) =>{
    let status = false;
    let count = 0;
    for(i = 0 ; i < cardList.length ; i++){
        if( number === cardList[i] ) count++;
    }
    if(count < 2){
        status = true;
    }

    return status;
}
resetList();

const card = (id) =>{

    if(count < 2){
        changeColor(id, cardList[id]);
        selected.push(id);
        
        count++;
        
        if(count == 2 && ( cardList[selected[0]] ===  cardList[selected[1]])){
            finished.push(selected[0]);
            finished.push(selected[1]);
            
        }
    } else{
        count = 0;
    
        if(finished.includes(selected[0]) && finished.includes(selected[1])) ;
        else{
            resetColor(selected[0]);
            resetColor(selected[1]);
        }
        selected.pop();
        selected.pop();
        
    }
    
};


const changeColor = (id, color) =>{
    let newColor = "";
    switch(color){
        case 1:
            newColor = `<button class="btn btn-lg btn-warning" onclick="card(${id})" disabled>___</button>`
            break;
        case 2:
            newColor = `<button class="btn btn-lg btn-danger" onclick="card(${id})" disabled>___</button>`
            break;
        case 3:
            newColor = `<button class="btn btn-lg btn-info" onclick="card(${id})" disabled>___</button>`
            break;
        case 4:
            newColor = `<button class="btn btn-lg btn-success" onclick="card(${id})" disabled>___</button>`
            break;
        case 5:
            newColor = `<button class="btn btn-lg btn-primary" onclick="card(${id})" disabled>___</button>`
            break;
        case 6:
            newColor = `<button class="btn btn-lg btn-secondary" onclick="card(${id})" disabled>___</button>`
            break;
        default:
            break;
    }
    const newMessage = document.getElementById(`card${id}`);
    newMessage.innerHTML = newColor;
};

const resetColor = (id) =>{
    const originalColor = `<button class="btn btn-lg btn-outline-light" onclick="card(${id})">___</button>`;
    const newMessage = document.getElementById(`card${id}`);
    newMessage.innerHTML = originalColor;
};

const resetGame = () =>{
    count = 0;
    let selected = [];
    let finished = [];

    for(i = 0 ; i < 12 ; i++){
        const cardToReset = document.getElementById(`card${i}`);
        cardToReset.innerHTML = `<button class="btn btn-lg btn-outline-light" onclick="card(${i})">___</button>`;
    }
    cardList = [];
    resetList();
}


