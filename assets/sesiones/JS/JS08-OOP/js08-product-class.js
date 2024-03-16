const datosFer = {
    name : "fernando",
    age : 26,
    city : "Guadalajara",
    isColdTeam : true
}

const sum = (a,b) => a + b;

/**
 *  Clase producto
 *  El nombre de las clases(plantillas) debe ser con UpperCamelCase
 *  Se recomienda que el nombre sea un sustantivo.
 */
export class Product {
    #createdAt;
    constructor(name, size = "md" ){
        // crear atributos que tendrán los objetos
        this.name = name;
        this.price = 450;
        this.size = size;
        this.#createdAt = new Date().getTime();
        
        console.log(`Me llamo ${this.name} y fui creado en el tiempo ${this.#createdAt}` );
   }
}

export class ProductPremium extends Product {

}

export {datosFer,sum};
/*

export class Product {

    // Para encapsular un atributo, le agregamos el 
    // símbolo de #
    #createdAt;

   // El método constructor nos ayuda a instanciar un objeto
    constructor(name, size="md" ){
        // crear atributos que tendrán los objetos
        this.name = name;
        this.price = 450;
        this.size = size;
        this.#createdAt = new Date().getTime();
        
        console.log(`Me llamo ${this.name} y fui creado en el tiempo ${this.#createdAt}` );
   }

   // Métodos setters y getters
   get createdAt(){
     return this.#createdAt;
   }
}
export class ProductPremium extends Product {
   
    constructor(name, size){
        //  Acceder al constructor de Product para inicializarlo
        super(name, size)
        super.price = 15000;
    
    }
}

class ProductsSuperUltraPremium extends ProductPremium {
    constructor(){
        super("UltaMega Premium", "SuperUltraXXL");
        super.price = 50000;
    }
}

const date = new Date(); // instanciar la clase Date(crear un objeto de tipo Date)
                        // al instanciar el objeto, se llama al método(función) constructor.

export const detallesUriel = {
    name: "Uriel",
    age: 18,
    eyesColor: "blue",
    isColdTeam: false,
    city: "CDmx"
}

export const detallesDamaris = {
    name: "Damaris",
    age: 28,
    eyesColor: "brown",
    isColdTeam: true
}

export const sum = (a,b)=> a + b;

// export {detallesUriel, detallesDamaris, sum, Product };
*/