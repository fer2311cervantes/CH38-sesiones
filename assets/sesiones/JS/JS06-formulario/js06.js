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
    console.table(newUser); 
    //verificar campos ? enviar servidor : mensaje de erros;
    if(isUserValid(newUser)){
        postUser(newUser);
    }

});

const isUserValid = (newUser) =>{
    let isValid = true;
    let message = [];

    if( newUser.password.length < 8 ) {
        isValid = false;
        message.push("Password is too short");
    } 
    
    if(! /[a-zA-Z0-9]/.test(newUser.password) ){
        isValid = false;
        message.push("El password debe tener solo letras y números del 0 al 9");
    }

    if(){ //endWith()
        isValid = false;
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
}
const postUser = () =>{};