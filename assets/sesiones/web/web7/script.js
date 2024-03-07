console.log("Script de sesion Web07");

// getElementById : seleccionar y obtener una referencia a un elemento HTML
//document.getElementById("title").innerHTML="El elote en CDMX cuesta $40";

function handleTitle(){
    document.getElementById("title").style.color = "blue";
}
function changeColor(color){
    document.getElementById("description").style.color = color;
}
function changeColorTextUsingThis(color,elementRef){
    /*there is no id */
    elementRef.style.color = color;
}

/* Reuses code */
function changeColorByCollection(collection,color){
    for(index = 0; index < collection.length; index++){
        collection[index].style.color = color;
    }
}

function resetColorParagraph(){
    const collection = document.getElementsByTagName("p");
    changeColorByCollection(collection,"black");
}

function changeColorTitles(){
    const collection = document.getElementsByClassName("title-article");
    changeColorByCollection(collection,"#9FE2BF");
}

/* function changeColorTextUsingClass(){
    const collection = document.getElementsByClassName("title-article");
    for(index = 0; index < collection.length; index++){
        collection[index].style.color = "#9FE2BF";
    }
}
function changeColorTextUsingTag(){
    const collection = document.getElementsByTagName("p");
    for(index = 0; index < collection.length; index++){
        collection[index].style.color = "black";
    }
} */

