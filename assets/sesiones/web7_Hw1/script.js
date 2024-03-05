
function askName(){
    const name = prompt("What's your name?");
    document.getElementById("title").innerHTML=`Hello ${name}`;
    //document.getElementById("title").innerHTML=`Hello ${name}  : ${document.getElementById("title").innerHTML}`;
}

function resetName(){
    document.getElementById("title").innerHTML="Hello 'name'";
}