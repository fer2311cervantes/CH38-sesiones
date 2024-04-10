package com.zoo;

public abstract class Feline extends Animal {
	
	
	public Feline( double age ) {
		super( "Feline" , "Felinae", age );
		
	}

	/**
	 *  Sobreescritura de m�todos (Override)
	 *  
	 *  Para que un m�todo sea sobreescrito, este debe tener la misma
	 *  firma del m�todo de la clase superior. La sobreescritura permite
	 *  personalizar el comportamiento heredado.
	 *  
	 *  @Override: Anotaci�n que indica que el m�todo est� sobreescribiendo
	 *  el comportamiento de una m�todo de la clase heredada.
	 *  Su prop�sito es hacer una validaci�n en tiempo de
	 *  compilaci�n para asegurarse que la subclase est�
	 *  sobreescribiendo correctamente y coincide
	 *  con la firma del m�todo.
	 */
	@Override
	public String makeANoise() {
		return "grrrrrr";
	}
}
