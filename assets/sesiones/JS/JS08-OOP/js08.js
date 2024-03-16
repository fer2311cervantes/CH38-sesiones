console.log("JS08 object oriented programming");

import { datosFer,sum,Product } from "./js08-product-class.js";
console.log(datosFer);
console.log(sum(3,4));

const myName = new Product("fernando");
console.log(myName.name)

/*
import {detallesUriel, detallesDamaris, sum, Product, ProductPremium} from './js08-product-class.js';

console.log("JS 08 Programación orientada a objetos");
console.log( detallesUriel );
console.log( detallesDamaris );
console.log( sum(10,5) ); // 15

const pastelChocolate = new Product("Chocolate");
// intanciar la clase Product y llamarlo Vainilla
const pastelVainilla = new Product("Vainilla", "xl");

console.log( pastelChocolate.name, pastelChocolate.price, pastelChocolate.size ); // 450
console.log( pastelVainilla.name, pastelVainilla.price ); // 450

pastelVainilla.price = 200;
console.log( pastelVainilla.name, pastelVainilla.price, pastelVainilla.size ); // 200
console.log( pastelVainilla.createdAt );

// No se puede modificar, por que no tiene su método set
// pastelVainilla.createdAt = 0;

const pastelBodas = new ProductPremium("Colosal","XXXL");
console.log( pastelBodas.name, pastelBodas.price, pastelBodas.size);
pastelBodas.size = "XXXXXXL";
console.log( pastelBodas );
*/


/*
 *  Encapsulamiento: La encapsulación ayuda a proteger la integridad 
 *  de los datos y asegura que un objeto mantenga su estado interno 
 *  consistente. Al limitar el acceso directo a los datos internos 
 *  de un objeto, se reduce la posibilidad de que estos datos sean 
 *  modificados de manera incorrecta o que se produzcan efectos 
 *  secundarios no deseados.
*/

/**
 * Herencia: mecanismo que permite a un objeto basarse en otro 
 * objeto existente para heredar propiedades y métodos. 
 * Esto permite la reutilización de código y la creación 
 * de relaciones entre objetos, lo que facilita la 
 * organización y la estructura del código.
 */


//extends Produc
/* const date = new Date(); // instanciar la clase Date(crear un objeto de tipo Date)
                        // al instanciar el objeto, se llama al método(función) constructor. */
