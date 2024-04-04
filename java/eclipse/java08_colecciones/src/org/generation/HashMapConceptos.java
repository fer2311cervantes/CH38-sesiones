package org.generation;

import java.util.HashMap;

public class HashMapConceptos {

	public static void main(String[] args) {
		/*
		 * Una colección Map, es una ralación clave(key): valor (value)
		 * que forma una tabla de datos
		 * 
		 *  - Nos funciona mejor para encontrar elementos
		 *  
		 *  Sintaxis:
		 *  HashMap< key, value > varName = new HashMap<>();
		 */
		
		//instanciar la clase hashmap
		//matricula y nombre de estudiantes
		HashMap<Integer,String> students = new HashMap<>();
		
		//directorio telefonico
		HashMap<String,String> directory = new HashMap<>();
		
		//agregamos valores a la colección
		directory.put("3314178768", "Fernando");
		directory.put("1234567890", "Andres");
		directory.put("1876543210", "Maria");
		directory.put("1029384756", "Carlos");
		directory.put("1234567890", "Juan Pérez");
		directory.put("9876543210", "María López");
		directory.put("5551234567", "Pedro Ramirez");
		directory.put("1234567822", "Juan Pérez");
		directory.put("1234567833", "Juan Pérez");
		//modificar un elemento
		directory.put("1876543210", "Maria Belén");
		//mostrar elemento
		System.out.println("Elemento: 3314178768 " + directory.get("3314178768"));
		//eliminar elemento
		System.out.println("Borrar: 1029384756 " + directory.remove("1029384756"));
		// Iterar la colección usando keys
		System.out.println( "\nClave y valor:" );
		for(String tel : directory.keySet() ) {
			System.out.println(tel + " " + directory.get( tel ));
		}
		// Iterar la colección usando valor
		System.out.println( "\nSolo valor:" );
		for(String name : directory.values() ) {
			System.out.println( name );
		}
		//imprimit todos los "Juan Pérez"
		System.out.println( "\nSolo \"Juan Pérez\":" );
		for(String tel : directory.keySet() ) {
			String name = directory.get( tel );
			if( name.equals("Juan Pérez") ) System.out.println(tel + " " + name);
		}
		
		
	}

}
