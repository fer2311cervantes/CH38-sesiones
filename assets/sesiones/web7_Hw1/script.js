
function askName(){
    const name = prompt("What's your name?");
    if(name != null && name != "") document.getElementById("title").innerHTML=`Hello ${name}`;
    
    //document.getElementById("title").innerHTML=`Hello ${name}  : ${document.getElementById("title").innerHTML}`;
}

function resetName(){
    document.getElementById("title").innerHTML="Hello 'name'";
}