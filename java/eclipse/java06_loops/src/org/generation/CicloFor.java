package org.generation;

public class CicloFor {

	public static void main(String[] args) {
		/**
		 * Sintaxis:
		 * 
		 * for( expresion_inicial ; comparacion; expresion_final) instrucci�n;
		 * 
		 * for( expresion_inicial ; comparacion; expresion_final){ instrucciones; }
		 * 
		 */
		
		int iteracion = 1;
		for( ; ; ) {
			if(iteracion < 5) break;
			System.out.println("iteracion: " + iteracion++);
		}
		// Uso de break
		ciclo:
		for (int i = 0; i < 5; i++) {
			System.out.println("Valor de i : " + i); //0,1,2,3,4
			if( i > 3) break ciclo;
		}
		//continue
		
	}

}
