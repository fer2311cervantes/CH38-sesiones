
const numbers = [1,-2,3];

const getInputValueID = (id) => document.getElementById(id).value;
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join("");
const listNumber = (list,style = "list-group-item" ) => list.map(e => `<li class="${ e < 0 ? "list-group-item list-group-item-danger" : style }">${e}</li>`);
const doubleNumbers = arr => arr.map( x => x * 2 );

//print once in console
console.log(`original: ${numbers}`);
console.log(`double: ${doubleNumbers(numbers)}`);

const updateList = () => {
    printListID("originalList",listNumber(numbers,"list-group-item list-group-item-ligt")); 
    printListID("newList",listNumber(doubleNumbers(numbers),"list-group-item list-group-item-primary"));
}
updateList();
const addElement = () => {
    let number = parseInt(getInputValueID("input"));
    number || (number = 0);
    numbers.push(number);
    updateList();
}
const removeElement = () =>{
    numbers.pop();
    updateList();
}
