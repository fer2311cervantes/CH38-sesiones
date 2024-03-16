console.log("JS07 local storage");

/*
El almacenamiento local (local storage) es una característica 
de los navegadores web que permite a las aplicaciones web 
almacenar datos de forma persistente en el dispositivo 
del usuario. A diferencia de las cookies, que tienen un tamaño 
limitado y se envían con cada solicitud HTTP, 
el almacenamiento local permite almacenar cantidades mucho 
mayores de datos y no se transmite al servidor 
con cada solicitud.

*/

// Almacenar datos
localStorage.setItem("nombreInstructor", "Yo merengues");


// Recuperar un dato
const nombreInstructor = localStorage.getItem("nombreInstructor");
console.log( nombreInstructor );

// remover una clave
localStorage.removeItem( "nombreInstructor" );

// remover todas las claves
localStorage.clear();

//no se puede almacenar un objeto asi que se convierte a JSON
localStorage.setItem("myObject",JSON.stringify( {name:"fernando",age:26} ));
const recuperDatos = localStorage.getItem( "myObject" );
const objectDatos = JSON.parse(recuperDatos) ;
console.log( objectDatos ); // string

/* localStorage.setItem("myName","isFernando");

const resetButton = document.querySelector("#resetInterval");
resetButton.addEventListener("click", (e)=>{
    localStorage.removeItem("myName");
    //enableStartButton();
}); */