console.log("API Fetch");

const cards = (users) =>
    users.map( user => `
    <div class="col-12 col-md-4">
        <div class="card-body">
            <p>${user.email}</p>
            <h5>hi</h5>
            <h6>hi</h6>
        </div>
    </div>
    ` )

const printCards = ( cards ) => document.getElementById("user-cards").innerHTML= cards.join("");

const getUsers = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const users = usersData.data;
    console.log(users);

    printCards(cards(users));
}

const handleButton = () =>{
    console.log("button push");
    getUsers("https://reqres.in/api/users?delay=3");
}


/** Usando fetch con then y catch */
/* const getProducts = ( url )=>{    
    fetch( url )
        .then( (resolve)=> resolve.json() ) // Conversión de JSON a Objeto de JS
        .then( (resolveJSON => { 
            console.log(resolveJSON); // muestra un array de objetos de productos
            // imprimir solo el titulo de cada producto
            for( let product of resolveJSON){
                console.log( product.title, product.rating.rate );
            }
        }))
        .catch( (error)=> console.error(error) );
};


const getUsersUsingAsyncAwait = async ( url ) =>{

    const resolve = await fetch( url );
    const users = await resolve.json(); // convertir de JSON a Object
    console.log( users );
    // imprimir los emails solamente
    console.log(  users.map( user=> user.email  ) );

}
getUsersUsingAsyncAwait("https://fakestoreapi.com/users");

const generateCards= ( users ) => {
                              // [ "<div>...</div", "", "" ];
    return users.map( user => `    
  <div class="col-12 col-md-4">
    <div class="card" >
        <div class="card-body">
        <h5 class="card-title">${ user.first_name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">${ user.email}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  </div>
    `  );
}
              // [ "<div>...</div", "", "" ];
const printCards = ( cards ) => document.getElementById("user-cards").innerHTML= cards.join("");
                                                                        //  "<div>...</div" "" "" ;

const getUsers = async(url) =>{
    const resolve = await fetch( url );
    const requestData = await resolve.json();
    const users = requestData.data; // Obtener el arreglo de usuarios
    // user = [ {email="",...} , {}, {}  ]
    printCards(  generateCards( users ) );
}

const handleButton = () =>{
    getUsers("https://reqres.in/api/users?delay=3");
} */