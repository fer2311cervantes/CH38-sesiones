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

const newElement = () =>{
    //crear elemento en memoria
    const newElement = document.createElement("section");
    newElement,innerHTML = `
        <div class="row">
            <div class="col-3"> col-3 </div>
            <div class="col-9"> col-9 </div>
        </div>
    `;
};
newElement();