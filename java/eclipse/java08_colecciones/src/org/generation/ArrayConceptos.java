package org.generation;

public class ArrayConceptos {

	public static void main(String[] args) {
		/*
		 *  Las variables de tipo array se definen con corchetes []
		 *  Los corchetes pueden ir antes o despu�s de la variable
		 *  ej. int[] myArray;
		 *      int myArray[]
		 *  
		 *  Para los array se debe asignar la cantidad de elementos
		 *  que contendr�.
		 *  Una vez definido, el arreglo no p�ede cambiar su tama�o
		 *      
		 *      
		 */
		
		// Definir un arreglo de 4 elementos de tipo int.		
		int[] codigoColores = new int[4]; // creando un obejto de tipo array de integers.
		                 // [ 0 , 0  , 0 , 0 ]
		
		// modificando elementos al arreglo.
		codigoColores[0] = 0x00_00_ff;  // azul
		// agregar en el �ndice 1 el color amarillo en hexadecimal
		codigoColores[1] = 0xFF_FF_00;  //Amarillo 
		// agrgar en el �ndice 2 el color negro en hexadecimal
		codigoColores[2] = 0x00_00_00;  //Negro
		// agrgar en el �ndice 3 el color naranja en hexadecimal
		codigoColores[3] = 0xfc_4b_08;  //NAranja
		
		for (int i = 0; i < codigoColores.length; i++) {
			System.out.printf("0x%06X %n" ,codigoColores[i]);
		}
		
		// for loop enhanced
		for(int color : codigoColores) {
			System.out.printf("C�digo 0x%06X %n", color );
		}
		
		/// Iniciar un arreglo.
		// String[] frutas = new String[3];
		String[] frutas = {"Uva", "Fresa", "Manzana"};
		
		// Generar un arreglo de 2 dimensiones
		String[][] participantes = new String[3][5]; // 3 filas, 5 columnas
		
	}

}
