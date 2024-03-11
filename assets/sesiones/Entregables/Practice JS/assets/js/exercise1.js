let arr = ["This", "is", "a", "sentence","."];

const getInputValueID = (id) => document.getElementById(id).value;
const printData = (id,data) => document.getElementById(id).innerHTML = data;

function printOutString(arr) {
    return arr.join(" ");
}

const updateArr = () => {
    printData("myArr",printOutString(arr));
    console.log(printOutString(arr));
}
updateArr();
const addElement = () => {
    let name = getInputValueID("input");
    name || (name = 0); //__________________________________
    arr.push(name);
    updateArr();
}
const removeElement = () =>{
    arr.pop();
    updateArr();
}
