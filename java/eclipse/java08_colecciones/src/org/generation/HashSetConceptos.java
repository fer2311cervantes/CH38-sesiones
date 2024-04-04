package org.generation;

import java.util.ArrayList;
import java.util.HashSet;

public class HashSetConceptos {

	public static void main(String[] args) {
		/*
		 * Una colección de tipo set es una colección NO ordenada.
		 *  - No se permiten elementos duplicados
		 *  - cualquier elemento duplicado no se insertará
		 *  
		 *  Sintaxis:
		 *    HashSet<Object> varName = new HashSet<>();
		 */
		//definir una colleción de paices con HashSet
		HashSet<String> paises = new HashSet<>();
		
		//agregamos valor con add
		paises.add("Genosha");
		paises.add("Wakanda");
		boolean exist = paises.add("Genosha");
		System.out.println("Pais \"Genosha\" existe: " + !exist);
		System.out.println(paises);
		//obtener tamaño ( cantidad de elementos )
		System.out.println(paises.size());
		//verificar si existe un elemento
		System.out.println("Existe Wakanda: " + paises.contains("Wakanda"));
		//iterar la colección
		for (String pais: paises) {
			System.out.println(pais);
		}
		//ejercicio
		ArrayList< String > articulosAndres;
		articulosAndres = new ArrayList<>();
		
		articulosAndres.add("balón de futbol");
		articulosAndres.add("peluche de borrego");
		articulosAndres.add("cara de papa de futbol");
		articulosAndres.add("vaso de Dolphins");
		articulosAndres.add("Gorra de Eagles");
		articulosAndres.add("Gorra de Eagles");
		articulosAndres.add("balón de futbol");
		articulosAndres.add("casco de juguete");
		articulosAndres.add("gorro de cowboys");
		articulosAndres.add("baloncitos de cowboys");
		articulosAndres.add("balón de futbol");
		HashSet<String> hashSet = new HashSet<String>(articulosAndres);
		articulosAndres.clear();
		articulosAndres.addAll(hashSet); //solo elementos unicos
	
	}

}
