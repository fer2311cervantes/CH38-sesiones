console.log("API Fetch");

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
    ` )

const printCards = ( cards ) => document.getElementById("user-cards").innerHTML = cards.join("");

const getUsers = async ( url ) => {
    const resolve = await fetch( url );
    const usersData = await resolve.json();
    const users = usersData.data;
    console.log(users);
    localStorage(users);
    printCards(cards(users));
    //console.log(cards(users));
}

const handleButton = () =>{
    document.getElementById("user-cards").innerHTML = ``;  //user-cards
    document.getElementById("text-info").innerHTML = `Loading . . . . .`;  //user-cards

    getUsers("https://reqres.in/api/users?delay=3");
}

const localStorage = (arr) => {
    console.log( "local storage working" );
    
}

//localStorage.setItem("nombreInstructor", "Yo merengues");