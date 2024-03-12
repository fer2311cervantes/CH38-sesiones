
const numbers = [3, 6, 12, 5, 100, 1 ];
const trash = [];

const getInputValueID = (id) => document.getElementById(id).value;
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join("");

const listNumber = (list,style = "list-group-item" ) => list.map(e => `<li class="${ e < 0 ? "list-group-item list-group-item-danger" : style }">${e}</li>`);
const disabledButtons = id => document.getElementById(id).innerHTML = "Working...";
const addbuttons = id => document.getElementById(id).innerHTML = `
                    <div class="col"><button class="btn btn-outline-warning " onclick="addElement()">Add</button></div>
                    <div class="col"><button class="btn btn-outline-danger " onclick="removeElement()">Remove</button></div>
                    <div class="col"><button class="btn btn-outline-info " onclick="sortButton()">Sort List</button></div>

`;

//print once in console
console.log(`original: ${numbers}`);

const sortList = (arr) =>{
    for (let k = 1; k < arr.length; k++) {
        for (let i = 0; i < (arr.length - k); i++) {

            if (arr[i] > arr[i + 1]) [arr[i] , arr[i + 1]] = [arr[i + 1], arr[i]];
            
            console.log(arr);
        }
    }
}

const updateList = () => {
    printListID("list",listNumber(numbers,"list-group-item list-group-item-ligt")); 
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
const sortButton = () =>{
    sortList(numbers);
    updateList();
}
