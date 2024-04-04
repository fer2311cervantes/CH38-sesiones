package org.generation;

import java.util.ArrayList;

/*
 * Array List.
 * 
 * Una colecci�n List es una colecci�n ...?
 *  - Es una colecci�n ordenada (respeta el orden en que se agregan)
 *  - Se permite elementos duplicados
 *  - Se basa en un array redimensionable que crece su tama�o,
 *   seg�n crece la colecci�n de elementos.
 *  - Esta colecci�n es la mejor rendimiento tiene.
 *  
 *  Sintaxis:
 *  ArrayList<object> varName = new ArrayList<>();
 *  
 * 
 */

public class ArrayListConceptos {

	public static void main(String[] args) {
		
		int age = 17;
		Integer edad = 18;
		
		//Definir una coleccion de datos n�mericos
		ArrayList< Integer > calificaciones;
		
		//Definir una colecci�n para nombres de libros
		ArrayList< String > nombresDeLibros;
		nombresDeLibros = new ArrayList<>();
		
		nombresDeLibros.add("Coraz�n de tinta");
		nombresDeLibros.add("Donde habitan los Angeles");
		nombresDeLibros.add("Las indignas");
		nombresDeLibros.add("Quiobole con");
		nombresDeLibros.add("El murmullo de las abejas");
		nombresDeLibros.add("El principito");
		nombresDeLibros.add("1984");
		nombresDeLibros.add("El profesor");
		
		System.out.println( nombresDeLibros );
		
		//obtener el tama�o de una colecci�n
		System.out.println( nombresDeLibros.size() );
		
		//Mostrar un elemento, inicia en indice 0
		System.out.println( nombresDeLibros.get(6) );
		
		//Remover un elemento de la colleci�n
		System.out.println( nombresDeLibros.remove(5) );
		System.out.println( nombresDeLibros );
		
		//Verificar si existe un elemento
		System.out.println( "Est� 'El principito': " + nombresDeLibros.contains( "El principito" ) );
		System.out.println( "Est� '1984': " + nombresDeLibros.contains( "1984" ) );
		
		//imprimir cada elemento por separado
		for(String libro: nombresDeLibros) {
			System.out.println( libro );
		}
		
		//reemplazar un elemento
		nombresDeLibros.set(2, "Hola mundo");
		System.out.println( nombresDeLibros );
		
		
			
	}

}
