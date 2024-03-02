
function askName(){
    const name = prompt("¿Cuál es tu nombre?");
    document.getElementById("title").innerHTML=`Hola ${name}`;
}

function resetName(){
    document.getElementById("title").innerHTML="Hola 'nombre'";
}