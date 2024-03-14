console.log("JS07 Apifetch");

/*
https://fakestoreapi.com/
https://developer.mozilla.org/en-US/docs/Web/API
https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation

 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.

 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)

*/

/** Usando fetch con then y catch */
const getProducts = ( url )=>{  
    fetch( url )
        .then( (resolve)=> resolve.json() ) // Conversión de JSON a Objeto de JS
        //.then( (resolveJSON => console.log(resolveJSON) ))
        .then( (resolveJSON => {
            console.log(resolveJSON) //muestra un array de objetos de productos
            for( let product of resolveJSON) console.log( product.title, product.rating.rate); //print only titles
        } ))
        .catch( (error)=> console.error(error) );
};
//getProducts('https://fakestoreapi.com/products');

const getUsersUsingAsyncAwait = async ( url ) =>{

    const resolve = await fetch( url );
    const users = await resolve.json(); // convertir de JSON a Object
    console.log( users );

    //for(let user of users) console.log( user.email );
    console.log( users.map( user => user.email ));

};
//getUsersUsingAsyncAwait("https://fakestoreapi.com/users");


/* Mostrar los nombres y email de los 12 usuarios de la siguiente url
// https://reqres.in/api/users?page=1
// https://reqres.in/api/users?page=2
   usando then/catch o async/await  */
const getUsers = async ( url ) =>{

    const resolve = await fetch( url );
    const users = await resolve.json();
    //console.log( users );
    for(let user of users.data) console.log( `User: ${user.first_name} ${user.last_name} - email: ${user.email}`);
};
getUsers( "https://reqres.in/api/users?page=1" );
getUsers( "https://reqres.in/api/users?page=2" );