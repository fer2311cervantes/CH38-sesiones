localStorage.clear(); //clean local storage every time I open the page

/**
 * builds the card list with users information
 * @param {arr} users is an array of user info
 * @returns arr of users cards
 */
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

/**
 * prints a message in the element with the given id
 * @param {string} id 
 * @param {string} message 
 * @returns nothing 
 */
const printMessage = ( id , message ) => document.getElementById(id).innerHTML = message;

/**
 *  prints a card list in the element with the given id
 * @param {*} id 
 * @param {*} cards 
 * @returns 
 */
const printCards = ( id,cards ) => document.getElementById(id).innerHTML = cards.join(""); //id = "user-cards"

/**
 * gets users form local storage (key "user") or api when push button
 */
const handleButton = () =>{    
    const myURL = "https://reqres.in/api/users?delay=3"; //url with users info
    printMessage("user-cards", "");  //remove user cards every time I push the button
    localStorage.getItem("users") || printMessage("text-info", "Loading . . .");  //show message loading
    localStorage.getItem("users") && getUsersLS(); //if users exist in local storage get from there
    localStorage.getItem("users") || getUsersAPI(myURL); //if users does not exist in local storage get from API
}
/**
 * async fnc: gets users from given url, send users to local storage [ setLocalStorage() ] and print cards [ printCards() ]
 * (id element "user-cards")
 * @param {string} url 
 */
const getUsersAPI = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const users = usersData.data;
    setLocalStorage(users); //set local storage with users list
    printCards("user-cards",cards(users)); //make and print cards
}

let oneTime = true;   //this prevents to set more than 1 timer
/**
 * set users in local storage (key "user") and builds timers, needs a global boolean variable named oneTime to works (starts in true)
 * @param {array} arr 
 */
const setLocalStorage = (arr) => {
    localStorage.setItem("users",JSON.stringify(arr));
    if(oneTime) {          
        createTime();  //creates a new value for start counting for 1 minute
        timerForLocalStorage();  //set a timer for print time untill delete local storage
        oneTime = false;
    }
}
/**
 * get users from local storage (key "users") and print cards with them (id element "user-cards")
 */
const getUsersLS = () => {
    const recuperDatos = localStorage.getItem( "users" );
    const users = JSON.parse(recuperDatos) ;
    printCards("user-cards",cards(users)); //make and print cards
}
/**
 * sets up a new date for start counting 1 minute
 */
const createTime = () => {
    const setUpTime = new Date().getTime();
    localStorage.setItem("setUpTime",setUpTime);
}

/**
 * prints message (id "text-info") with remaining time in seconds if les than 1 minute from createTime(), 
 * if more the 1 minute calls removeStorage()
 */
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
/**
 * removes timers and local storage, cleans screen (id "user-cards" and "text-info")
 * @param {interval id} intervalId 
 */
const removeStorage = (intervalId) => {
    localStorage.clear();  //clean local storage
    printMessage( "text-info", "" ); //clean screen
    printMessage("user-cards", ""); //clean screen  
    clearInterval(intervalId);   
    oneTime = true;        //removes the prevention for timer
}