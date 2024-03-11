
const numbers = [1,-2,3];

const getInputValueID = (id) => document.getElementById(id).value;
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join(""); 
const printData = (id,data) => document.getElementById(id).innerHTML = data;
const listNumber = (list,style = "list-group-item" ) => list.map(e => `<li class="${ e < 0 ? "list-group-item list-group-item-danger" : style }">${e}</li>`);
const sumNumbers = arr => arr.reduce( (x , y) => x + y );
const multiNumbers = arr => arr.reduce( (x , y) => x * y );

//print once in console
console.log(`sum: ${sumNumbers(numbers)}`);
console.log(`product: ${multiNumbers(numbers)}`);

const updateData = () => {
    printListID("originalList",listNumber(numbers,"list-group-item list-group-item-ligt")); 
    printData("sumResult",sumNumbers(numbers));
    printData("productResult",multiNumbers(numbers));
    
}
updateData();
const addElement = () => {
    let number = parseInt(getInputValueID("input"));
    number || (number = 0);
    numbers.push(number);
    updateData();
}
const removeElement = () =>{
    numbers.pop();
    updateData();
}
