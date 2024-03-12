console.log("JS06 DOM");


/**
 * cambiar contenido de un elemento HTML por medio de su id
 */
const changeElementById = (id) =>{
    // document: representa cualquier página web carga en el navegador
    //         sirve como punto e entrada al contenido de la página
    //         document es el objeto principal del DOM.
    const title = document.getElementById(id);
    console.log(title);
    title.innerHTML = `<strong>Document</strong> es el objeto principal del DOM.`;
};
changeElementById("message");

/**
 * 
 * @param {string} id 
 */
const changeElementByTagName =(tag) =>{
    const unorderList = document.getElementsByTagName(tag);
    console.log(unorderList);
};
changeElementByTagName("ul");

/**
 * 
 */
const changeElementByQuerySelector = (selector) =>{
    const element = document.querySelector(selector); 
    console.log(element);
    element && (element.innerHTML = "query Selector");
};
changeElementByQuerySelector("h1");  //"header h1"

const newElement = (type , father) =>{
    //crear elemento en memoria
    const newElem = document.createElement(type);
    newElem.innerHTML = `
        <div class="row">
            <div class="col-3 columna-dinamica fondo-rosa"> col-3 </div>
            <div class="col-9"> col-9 </div>
        </div>
    `;
    const mainRef = document.querySelector(father);
    mainRef.appendChild( newElem );
};
newElement("section", "main");

/** Cambiar el color de fuente y fondo de un elemento */
const changeColor = () => {
    const textToChangeColor = document.querySelector("#columna-dinamica");
    console.log(textToChangeColor);
    textToChangeColor.style.color = "cyan";
    textToChangeColor.style.border = "thin solid red";
  };
  
  changeColor(); //bg-dark text-light