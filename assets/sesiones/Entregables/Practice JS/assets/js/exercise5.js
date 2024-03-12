
let nameList = ['Math', 'English', 'Programming','Biology'];

const superList = (list) => list.map((e,i) => `
<li class="list-group-item">${i}.    ${e}  
<button class="btn btn-danger ms-2" onclick="removeThisElement(${i})">X</button>
<button class="btn btn-info " onclick="moveThisElementStart(${i})"><-</button>
<button class="btn btn-info " onclick="moveThisElementEnd(${i})">-></button>
<button class="btn btn-warning " onclick="showBreak(${i})">print</button>
</li>`);
const getInputValueID = (id) => document.getElementById(id).value;
const printListID = (id,list) => document.getElementById(id).innerHTML = list.join("");
const printData = (id,data) => document.getElementById(id).innerHTML = data;

//print once in console
console.log( `nameList = ${nameList}` );

const updateList = () => {
    printListID("list",superList(nameList));
}
updateList();
const addElementStart = () => {
    let name = getInputValueID("input1");
    name || (name = 0); //__________________________________
    nameList.unshift(name);
    updateList();
}
const removeElementStart = () =>{
    nameList.shift();
    updateList();
}
const addElementEnd = () => {
    let name = getInputValueID("input2");
    name || (name = 0); //__________________________________
    nameList.push(name);
    updateList();
}
const removeElementEnd = () =>{
    nameList.pop();
    updateList();
}
const removeName = (arr, index) => {
    arr.splice(index,1);
}
const removeThisElement = (ref) =>{
    removeName(nameList,ref)
    updateList();
}

const moveToStart = (arr, index) =>{
    arr.unshift(nameList[index]);
    removeName(arr, index + 1);  
}
const moveToEnd = (arr, index) =>{
    arr.push(nameList[index]);
    removeName(arr, index); 
}
const moveThisElementStart = (ref) =>{
    moveToStart(nameList,ref)
    updateList();
}
const moveThisElementEnd = (ref) =>{
    moveToEnd(nameList,ref)
    updateList();
}

const showBreak = (index) =>{
    const newList = [];

    for(i = 0 ; i < nameList.length ; i++){
        newList.push(nameList[i]);
        if(i === index) break;
    }

    printData("myArr",newList.join(" "));
}
