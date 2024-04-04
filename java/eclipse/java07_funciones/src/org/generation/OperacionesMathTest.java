package org.generation;

import java.util.Scanner;

public class OperacionesMathTest {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		OperacionesMath operacion;
		operacion = new OperacionesMath();
		
		System.out.println( operacion.add(6.6, 4.2) );
		System.out.println( operacion.add("6.6", "4.2") );
		System.out.println( operacion.substract(22.3, 10) );
		System.out.println( operacion.substract(6.6, 4.2) );
		System.out.println( operacion.random() );
		System.out.println( operacion.random() );
		operacion.printFormattedAmount( 5.3 ); 
		operacion.printFormattedAmount( 1000 ); 
		operacion.printFormattedAmount( 99.89 );
		
		sc.close();
	}

}
