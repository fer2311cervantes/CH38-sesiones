package org.generation.test;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Excepciones {

	public static void main(String[] args) {
		System.out.println("Inicio de programa");
		//readFile();
		
		int[] numbers = {5,6};
		
		try {
			System.out.println( divide() );
			System.out.println( lastChar("hoy nos vamos temprano 3") );
			numbers[10] = 20;
			readNewFile();
			
		}catch( ArithmeticException e ) {
			System.out.println("Excepcion aritmetica:");
			e.printStackTrace();
		}catch(StringIndexOutOfBoundsException e) {
			System.out.println("Excepcion String:");
			e.printStackTrace();
			System.out.println(e.getMessage());
		}catch(FileNotFoundException e) {
			//System.out.println("No se encuentra el archivo:");
			//e.printStackTrace();
			System.out.println(e.getMessage());
		}catch(Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
		}
		
		System.out.println("Fin del programa");

	}
	
	static double divide() {
		double divide = 5 / 3;
		return divide;
	}

	static char lastChar( String word) {
		return word.charAt( word.length() - 1 );
	}
	
	static void readFile() {
		File file = new File("myFile.txt");
		
		try {
			Scanner sc = new Scanner( file );
		} catch (FileNotFoundException e) {			
			System.out.println("El archivo no existe");
			e.printStackTrace();
		}
		
	}
	
	static void readNewFile() throws FileNotFoundException {
		File file = new File("myFile.txt");
		Scanner sc = new Scanner( file );
	}
	
}