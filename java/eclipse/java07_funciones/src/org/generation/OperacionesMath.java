package org.generation;
/**
 *  Las funciones(m�todos) son fundamentales por:
 *  
 *  - Reutilizaci�n del c�digo.
 *  - Organizar el c�digo.
 *  - Facilidad de depuraci�n.
 *  - Mejora la legibilidad.
 *  - Abstracci�n: encapsular la l�gica de una tarea
 */

public class OperacionesMath {
	/*
	 *  https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html
	 *  Sintaxis de un m�todo:
	 *  
	 *   <modificadores_de_acceso> <tipo_retorno> nombreM�todo( par�metros ) <lista_de_excepciones> {
	 *   
	 *      // cuerpo del m�todo
	 *   }
	 *   
	 *   Modificadores de acceso: public, protected, default, private.
	 *   Tipo retorno: Especifica el tipo de valor que el m�todo devolver�( return ).
	 *   		Si el m�todo no devuelve ning�n valor(String, int, etc), 
	 *   		se usa la palabra reservada "void".
	 *   Nombre del m�todo: Se recomienda comenzar el nombre con un verbo, 
	 *   		seguido por un adjetivo, sustantivo, etc. Usar la convenci�n camelCase.
	 *   Par�metros: Lista de par�metros separados por coma.
	 *   
	 *   La firma del m�todo es como:
	 *   nombreM�todo( double, int, double, double  )
	 *   
	 *   
	 */
	
	/**
	 * Sumatoria de dos n�meros de punto flotante.
	 * @param a operando 1
	 * @param b operando 2
	 * @return resultado de la sumatoria
	 */
	double add ( double a, double b) {
		return a + b;
	}
	
	/*  Sobrecarga de m�todos.
	 *  Tener m�ltiples m�todos con el mismo nombre, pero diferente lista de par�metros
	 *  
	 *  reglas:
	 *   - El m�todo debe tener el mismo nombre
	 *   - Debe tener diferente orden en los tipos de par�mdtros o
	 *     n�meros de par�metros
	 *   - No se base en el tipo de retorno. Aunque pueda tener diferente
	 *     tipo de retorno, se recomienda que sean de tipo compatible.
	 *   - Puede tener diferentes modificadores de acceso
	 *  
	 *  
	 * @param a operando 1
	 * @param b operando 2
	 * @return resultado de la sumatoria
	 */
	/**
	 * Sumatoria de dos strings que contienen numeros.
	 * @param a operando 1
	 * @param b operando 2
	 * @return resultado de la sumatoria
	 */
	double add ( String a, String b) {
		double numA = Double.parseDouble(a);
		double numB = Double.parseDouble(b);
		return add( numA , numB);
	}
	 
	/**
	 * Resta de dos n�meros de punto flotante.
	 * @param a operando 1
	 * @param b operando 2
	 * @return resultado de la resta
	 */
	double substract ( double a, double b) {
		return a - b;
	}
	
	/**
	 * Genera n�mero entero aleatorio del 0 al 100
	 * @return n�mero entero aleatorio
	 */
	int random() {
		double randomNumber = Math.random();
		int randomInteger = (int)(randomNumber * 101);
		return randomInteger;		
	}
	
	void printFormattedAmount( double num ) {
		// System.out.println( "$" + number );
		/*
		 *  https://docs.oracle.com/javase/tutorial/java/data/numberformat.html
		 *  
		 *  String.format: M�todo est�tico de la clase String que
		 *  permite formatear un texto de acuerdo al patr�n especificado.
		 *  
		 *  Sintaxis: String.format( pattern, args );
		 *  
		 *  pattern: Texto que contiene expecificadores de formato que definen
		 *  	como se mostrar�n los argumentos proporcionados
		 *  args: argumentos que se formatear�n
		 * 
		 * System.out.format( pattern, args );
		 */
		
		String text = String.format("$%7.2f MXN. - Sin decimales $%04d MXN. " , num, (int)num);
		System.out.println( text );
	}
	
}
