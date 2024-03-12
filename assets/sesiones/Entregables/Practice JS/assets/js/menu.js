/* const imprimirEnParagraph= (id, mensaje) => document.getElementById(id).innerHTML = `${mensaje}`;
imprimirEnParagraph("mainMenu","this is the menu"); */
const mainMenu = (id) => {
    const menuRef = document.getElementById(id);
    menuRef.innerHTML =  `
    <div class="dropdown mt-2">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Exercises 
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="/index.html">Home</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise1.html">Exercise 1</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise2.html">Exercise 2</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise3.html">Exercise 3</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise4.html">Exercise 4</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise5.html">Exercise 5</a></li>
        <li><a class="dropdown-item" href="/assets/pages/exercise6.html">Exercise 6</a></li>
        <hr>
        <li><a class="dropdown-item" href="https://github.com/fer2311cervantes/CH38-sesiones/tree/main/assets/sesiones/Entregables/Practice%20JS">GitHub</a></li>
        <li><a class="dropdown-item" href="https://www.linkedin.com/in/ra%C3%BAl-fernando-cervantes-5239a4214/">LinkedIn</a></li>
      </ul>
    </div>
    `;
}
mainMenu("menu");


/*
    
*/

/* 
function insertPrincipalMenu(){
    const menuRef = document.getElementById("menu");

    const pagesArray = ["about", "products", "contact"];

    menuRef.innerHTML = ` 
    <nav>
      <ul>
        <li> <a href="/index.html">Home</a>   </li>
        <li> <a href="/assets/pages/about.html">About Us</a></li>
        <li> <a href="/assets/pages/products.html">Products</a></li>
     </ul>
    </nav>
    `;
 }

 insertPrincipalMenu();
*/