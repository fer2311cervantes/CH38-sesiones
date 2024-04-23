package com.zoo;
/**
 *  Una interfaz es una declaraci�n formal de un contrato, en la
 *  cu�l los m�todos no contienen implementaciones.
 *  Es similar a los m�todos abstractos.
 *  
 *  Una clase puede implementar varias interfaces.
 *  
 *  Las interfaces son adecuadas para proporcionar funcionalidad
 *  a clases que no est�n relacionadas entre si.
 *  
 *  
 *  Para patrones de dise�o, se suele utilizar interfaces.
 */
public interface Pet {
	// Los atributos en las interfaces son de tipo public, final y static
	// public final static boolean PET = true;
	boolean IS_PET = true;
	
	// Los m�todos por default son de tipo public, abstract
	String trick(); 
	
	// A partir de la versi�n 8 de Java, se pueden tener
	// m�todos con implementaciones.
	// Estos m�todos deben ser default
	default String greeting() {
		return "Soy una mascota";
	}
}
