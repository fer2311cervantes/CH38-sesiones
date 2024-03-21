localStorage.clear(); //clean local storage every time I open the page
const cards = (users) =>
    users.map( user => `
    <div class="card">
        <div class="card-header"><img class="img-fluid rounded user-img" src="${user.avatar}" alt="user image"></div>
        <div class="card-body">
            <p><strong>${user.first_name} ${user.last_name}</strong></p>
            <p><strong>${user.email}</strong></p>
            <p>Full stack developer, over 2 years of experience</p>
        </div>
    </div>
    ` );
const printMessage = ( id , message ) => document.getElementById(id).innerHTML = message;
const printCards = ( cards ) => document.getElementById("user-cards").innerHTML = cards.join("");

let imTired = 0;
const handleButton = () =>{
    if( imTired === 0){   //I don´t know how to prevent to press the button many times :(
    const myURL = "https://reqres.in/api/users?delay=3"; //url with users info
    printMessage("user-cards", "");  //remove user cards every time I push the button

    localStorage.getItem("users") || printMessage("text-info", "Loading . . .");  //show message loading
    localStorage.getItem("users") && getUsersLS(); //if users exist in local storage get from there
    localStorage.getItem("users") || getUsersAPI(myURL); //if users does not exist in local storage get from API
    
    imTired = 1;
    }
}
const getUsersAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const users = usersData.data;
    //console.log("this shouldn't happend");
    setLocalStorage(users);
    printCards(cards(users)); //make and print cards
}
const setLocalStorage = (arr) => {
    localStorage.setItem("users",JSON.stringify(arr));
    createTime();
    timerForLocalStorage();   
}
const getUsersLS = () => {
    const recuperDatos = localStorage.getItem( "users" );
    const users = JSON.parse(recuperDatos) ;
    printCards(cards(users)); //make and print cards
}

const createTime = () => {
    const setUpTime = new Date().getTime();
    localStorage.setItem("setUpTime",setUpTime);
}

const timerForLocalStorage = () => {
    const intervalId = setInterval( 
      ()=> {
        let a = new Date().getTime();
        a = 60 - ( (a - localStorage.getItem("setUpTime") ) / 1000 );
        a = Math.round(a);
        (a >= 1) && printMessage( "text-info", `Remaining time to delete the local storage: ${ a } seconds` ); 
        ( a < 1) && removeStorage(intervalId);
    }, 1000);
}

const removeStorage = (intervalId) => {
    localStorage.clear();
    printMessage( "text-info", "" );
    printMessage("user-cards", "");
    clearInterval(intervalId);
    imTired = 0;
}