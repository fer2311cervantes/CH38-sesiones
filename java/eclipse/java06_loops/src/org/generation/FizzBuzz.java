package org.generation;

public class FizzBuzz {

	public static void main(String[] args) {
		/*
		 *  Escribir un programa que muestre en pantalla los 
		 *  números del 1 al 20, sustituyendo los múltiplos 
		 *  de 3 por la palabra “fizz”, los múltiplos de 5 por 
		 *  “buzz” y los múltiplos de ambos, es decir, los 
		 *  múltiplos de 3 y 5 (o de 15), por la palabra 
		 *  “fizzbuzz”.
		 *   1
		 *   2
		 *   fizz
		 *   4
		 *   buzz
		 *   fizz
		 *   7
		 *   8
		 *   fizz 
		 
		
		
		*for(int i = 1; i<25 ; i++ ) {
			if( i%3 == 0 ) System.out.print("fizz");
			if( i%5 == 0 ) System.out.print("buzz");
			else System.out.print(i);
			System.out.println("");
		}*/
		for(int i = 1; i<25 ; i++ ) {
			if( i%3 == 0 && i%5 == 0 ) System.out.println("fizzbuzz");
			else if( i%3 == 0 ) System.out.println("fizz");
			else if( i%5 == 0 ) System.out.println("buzz");
			else System.out.println(i);	
		}

	}

}
