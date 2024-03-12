// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)

const displayNoneElement = () =>{
    const div1 = document.querySelector("#div1");
    div1.style.display = "none"; // quitar el elemento.
  }
  
  const hiddenElement = () => {
    const div2 = document.querySelector("#div2");
    div2.style.visibility = "hidden"; // ocultar el elemento
  }
  const resetElements = () => {
    const div1 = document.querySelector("#div1");
    div1.style.display = "block";
      const div2 = document.querySelector("#div2");
      div2.style.visibility = "visible";
  };//d-none d-md-block