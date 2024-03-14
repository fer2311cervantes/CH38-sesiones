console.log("JS06 DOM");

//const register = document.getElementById("register-form");
const register = document.forms["register-form"];

/**
 * permite agregar funciones que se ejecutaran en respuesta a un evento especifico
 * "click" or "submit"
 */
register.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("holi");

    const newUser = {
        email: register.elements["inputEmail"].value,
        password: register.elements["inputPassword"].value,
        address: register.elements["inputAddress"].value,
        checkbox: register.elements["gridCheck"].checked
    };
    //console.table(newUser); 
    //verificar campos ? enviar servidor : mensaje de erros;
    if(isUserValid(newUser)){
        postUser(newUser);
    }

});

const isUserValid = (newUser) =>{
    let isValid = true;
    let message = [];

    if( newUser.password.length < 3 ) {  //8
        isValid = false;
        message.push("El password debe tener al menos 8 caracteres");
    } 
    
    if(! /[a-zA-Z0-9]/.test(newUser.password) ){
        isValid = false;
        message.push("El password debe tener solo letras y números del 0 al 9");
    }

    // Validar que el correo electrónico su dominio sea .edu
    if( !newUser.email.endsWith(".com") ){
        isValid = false;
        message.push("Solo se acepta un email con dominio .edu");
    }

    if( ! isValid ) showUserError(message);
    //else showUserError( [] );
    return isValid;
};

const showUserError= (errorMessage)=>{
    let alert = "";
    for (let message of errorMessage ){
        alert += `<li>${message}</li>`
    }

    document.getElementById("error-message").innerHTML= alert;
}//** Enviar los datos al servidor */
const postUser = async ( newUser ) => {
    // TODO enviar datos al servidor

    const url = "https://reqres.in/api/users";
    const options = {
        method: "POST", // POST, PUT, DELETE, GET
        header: { "Content-Type":"application/json" },
        body:  JSON.stringify( newUser ) // conversión de Object a JSON
    }

    const response = await fetch( url, options  );
    //console.log( response )
    if (response.status === 201){
        const userCreated = await response.json();
        //console.table(userCreated)
        alert("Usuario creado con éxito el " + userCreated.createdAt);

        //console.log( newUser );

        localStorage.setItem("userData", JSON.stringify(newUser));
        localStorage.setItem("fechaAlmacenaiento", new Date().toLocaleDateString() );
    }
}

//función autoinvocada
( async function setUp(){
    const userData = localStorage.getItem("userData");
    const user = JSON.parse( userData );
    //console.log( userData );

    register.elements["inputEmail"].value = user.email;
    //register.elements["inputPassword"].value = user.password;
    register.elements["inputAddress"].value = user.address;
    register.elements["gridCheck"].checked = user.checked;
})();


/*

// Función autoinvocada
( async function setUp(){
    console.log("SetUp");
    const userData = localStorage.getItem("userData"); // recuperar un valor del local storage
    const user = JSON.parse( userData );
    console.log( user );

       register.elements["inputEmail"].value = user.email;
       register.elements["inputPassword"].value = user.password;
       register.elements["inputAddress"].value = user.address;
       register.elements["gridCheck"].checked = user.checked;
} )();
*/