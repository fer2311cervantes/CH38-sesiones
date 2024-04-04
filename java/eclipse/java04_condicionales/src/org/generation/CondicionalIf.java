package org.generation;

import java.util.Scanner;

public class CondicionalIf {

	public static void main(String[] args) {
		
		/**
		 * Sintaxis de la condicional if Si la condicional es verdadera, se ejecuta la
		 * instrucci�n de if
		 * 
		 * if ( condicional ) sentencia;
		 * 
		 * if ( condicional ) { sentencias; }
		 * 
		 * if ( condicional ) sentencia; else sentencia_Si_condicional_es_falsa;
		 * ------------------------------------------------------ 
		 * if ( condicional )
		 *   sentencia; 
		 * else if ( nueva_condicional) 
		 *   sentencia; 
		 * else if ( n_condici�n ) 
		 *   sentencia; 
		 * else sentencia;
		 * 
		 */
		
		/*
		 * Verifiquen la edad de una persona. Si es mayor o igual de 18 imprimir:
		 * "Puede votar", caso contrario: "No puede votar"
		 */
		int edad = 15;
		if(edad < 18) System.out.println("No puede votar");
		else System.out.println("Si puede votar");
		
		/*
		 * Operador ternario.
		 * 
		 * Sintaxis: expresi�n ? respuesta_si_es_true : si_es_false
		 *
		 * Realizar el ejercicio anterior usado el operador ternario
		 */
		System.out.println( edad < 18 ? "No puede votar" : "Si puede votar");
		
		
		// --------------------------------------------------------------
		// -------------- Clase Scaner --------------------------------

		Scanner sc;
		sc = new Scanner( System.in );
		
		System.out.print("Escribe tu nombre: ");
		String myName = sc.nextLine(); // lee toda la l�nea hasta /n"
	
		System.out.print("Escribe tu apellido: ");
		String myLastName = sc.nextLine(); 
		
		System.out.print("Escribe tu edad: ");
		int age = 0;
		if( sc.hasNextInt()  ) {
			age = sc.nextInt(); // lee un valor num�rico entero
		}
		sc.nextLine(); // consumimos el resto del buffer (\n)			
		
		System.out.print("Escribe tu direcci�n: ");
		String address = sc.nextLine(); 
				
		System.out.println("Tu nombre es: " + myName + " " + myLastName);
		System.out.println("Edad " + age);
		System.out.println("En 10 a�os tendr�s " + (age + 10));
		System.out.println("Vives en: " + address);
		
		sc.close();
	}

}
