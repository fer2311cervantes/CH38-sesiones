package org.generation;

import java.util.Scanner;

public class SwitchExamples {

	public static void main(String[] args) {
		/**
		 * Sintaxis:
		 * 
		 *  switch( expresión ){ 
		 *    case valor1 : expresión; 
		 *                  break; 
		 *    case valor2 : expresión;
		 *                  break; 
		 *    default: expresión; 
		 *             break; 
		 *   }
		 * 
		 * La expresión a evaluar debe ser un tipo entero, string o enum. La condicional
		 * Switch usa el método equals para comparar los Strings.
		 */
		/**
		 * Leer usando la clase Scanner un mes (1 - 12) e indicar el mes en texto.
		 * ej:entrada-> "Escribe tu mes de nacimiento: " 12 
		 * salida-> Naciste en diciembre.
		 * 
		 */
		Scanner m = new Scanner(System.in); 
		System.out.print("Escribe el numero de un mes: ");
		int month = 0;
		if( m.hasNextInt() ) {
			month = m.nextInt(); // lee un valor numérico entero
			m.nextLine();
		}
		switch(month) {
		case 1:
			System.out.print("Enero");
			break;
		case 2:
			System.out.print("Febrero");
			break;
		case 3:
			System.out.print("Marzo");
			break;
		case 4:
			System.out.print("Abril");
			break;
		case 5:
			System.out.print("Mayo");
			break;
		case 6:
			System.out.print("Junio");
			break;
		case 7:
			System.out.print("Julio");
			break;
		case 8:
			System.out.print("Agosto");
			break;
		case 9:
			System.out.print("Septiembre");
			break;
		case 10:
			System.out.print("Octubre");
			break;
		case 11:
			System.out.print("Noviembre");
			break;
		case 12:
			System.out.print("Diciembre");
			break;
		default:
			System.out.print("No escribiste un mes");
			break;
		}
		m.close();

		
		
	}

}
