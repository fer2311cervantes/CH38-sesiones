package com.zoo;
/**
 *  Las clases abstractas son clases que no se pueden instanciar.
 *  Estas clases se utilizan como modelos(plantillas) para
 *  crear subclases concretas que se puedan instanciar.
 *  
 *  una clase abstracta se declara en la firma de la clase
 *  con la palabra reservada "abstract"
 *  
 *  La clase abstracta puede contener m�todos abstractos y
 *  m�todos concretos.
 *  
 *  Los m�todos abstractos no tienen implementaci�n. La implementaci�n
 *  se debe realizar en las subclases concretas.
 *  
 *  Las clases abstractas se recomienda utilizar para
 *  clases que est�n estrechamente relacionadas ( is-A )
 */
public abstract class Animal {
	private String commonName;
	private String scientificName;
	private double age;
	
	/** Inicializando mis atributos en el construtor */
	public Animal(String commonName, String scientificName, double age){
		this.commonName = commonName;
		this.scientificName = scientificName;
		this.age = age;		
	}
	
	/**
	 *  Un m�todo abstracto no tiene implementaci�n, solo
	 *  la definci�n del m�todo.
	 *  Termina con punto y coma.
	 *  
	 *  Si tienes un m�todo abstracto, tienes la obligaci�n
	 *  de hacer tu clase abstracta.
	 */
	public abstract String sleep();
	
	public abstract String eat();
	
	public abstract String makeANoise();

	
	//
	public final String getCommonName() {
		return commonName;
	}
	public final void setCommonName(String commonName) {
		this.commonName = commonName;
	}
	//
	public String getScientificName() {
		return scientificName;
	}	public void setScientificName(String scientificName) {
		this.scientificName = scientificName;
	}
	//
	public double getAge() {
		return age;
	}
	public void setAge(double age) {
		this.age = age;
	}
	
	
	
	
}
