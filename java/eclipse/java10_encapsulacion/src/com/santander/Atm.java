package com.santander;

/**
 *  Los pilares de OOP: encapsulaci�n, herencia, polimorfismo, abstracci�n.
 *  
 *  Encapsulaci�n: Principio de consiste en ocultar los detalles de como 
 *  funciona un obejto. Un aspecto importante de la encapsulaci�n es el
 *  concepto de acceso controlado. Se puede establecer diferentes
 *  niveles de acceso para los atributos y m�todos de un objeto.
 *  
 *  La encapsulaci�n ofrece beneficios como:
 *  - Seguridad de datos: Ocultar los detalles internos o que los datos
 *  	sean modificados de manera incorrecta o no autorizada.
 *  - Modularidad: Se facilita la creac��n de componentes independientes
 *  	que pueden ser reutilizados.
 *  - Abstracci�n: Permite que los usuarios de un objeto se centren en
 *  	lo que hace el objeto en lugar de c�mo lo hace.
 *  
 *  Niveles de acceso para la encapsulaci�n:
 *  1.- Public: Son accesibles desde cualquier parte del c�digo.
 *  2.- Protected: Son accesibles desde la misma clase, paquete y clases derivadas.
 *  3.- Default: Son accesibles dentro de la misma clase y del mismo paquete.
 *  4.- Private: Son accesibles dentro de la misma clase.
 *
 * 
 */

public class Atm {
	private int serialNumber;
	private String model;
	private double balance;
	
	private static int counter;
	
	//bloque de inicializaci�n est�tico
	static {
		counter = 1000;
	}
	
	//bloque de inicializaci�n no est�tico
	{
		//System.out.println("se esta creando un objeto");
	}
	
	/* M�todos constructores
	 *  Un constructor es un tipo especial de m�todo que se llama autom�ticamente
	 *  cuando se crea una instancia(objeto) de una clase. Su prop�sito principal
	 *  es inicializar el estado de un objeto reci�n creado.
	 *  
	 *  Reglas:
	 *  - El nombre del constructor debe ser el mismo que el de la clase.
	 *  - Un constructor no tiene retorno.
	 *  - Un constructor puede llamar a otro constructor de la misma clase usando
	 *  	la palabra this(). Esta llamada debe ser la primera instrucci�n del constructor.
	 *  - Es posible tener una sobrecar de constructores.
	 *  - Constructor por default: Si no se proporciona un constructor en la clase, Java
	 *  	proporciona un constructor por defecto sin par�metros.
	 * 
	 */

	public Atm(){
		this.serialNumber = counter++;
	}
	public Atm(String model, double balance){
		this();
		//this.serialNumber = counter++; //repeat code is bad
		this.model = model;
		this.balance = balance;	
	}
	public Atm(String model, String balance){
		this( model , Double.parseDouble(balance) );	
	}
	
	/**
	 *  factory method
	 *  https://refactoring.guru/es/design-patterns
	 *  Los patrones de dise�o creacionales se utilizan para promover 
	 *  el c�digo limpio, modular y f�cil de mantener, as� como para 
	 *  mejorar la flexibilidad y la reutilizaci�n del c�digo.
	 */
	public static Atm createAirPortAtm() {
		return new Atm("T-8888", 1_000_000);
	}
	
	//Set and Get balance
	public void setBalance ( double amount ) {
		balance = amount;
	}
	public double getBalance ( ) {
		return balance;
	}
	//Set and Get model
	public void setModel ( String modelName ) {
		model = modelName;
	}
	public String getModel ( ) {
		return model;
	}
	//Set and Get serialNumber
	private void setSerialNumber( int serialNumber ) {
		this.serialNumber =  serialNumber;
	}
	public int getSerialNumber() {
		return this.serialNumber;
	}
	
	public String formatBalance() {
		return String.format("$%,3.2f", this.balance);
	}
	
	public String showDetails() {
		return "Serial number: " + this.serialNumber
				+ "\nModel: " + this.model
				+ "\nBalance: " + formatBalance() + "\n";
	}
	
	public double withdraw( double amount) {
		if(amount < 0 || amount > this.balance) {
			//System.out.println("Error: your amount is not posible to withdraw");
			throw new IllegalArgumentException("Retiro negativo o mayor a saldo disponible");
		}
		else this.balance -= amount;
		return this.balance;
	}
	//IllegalStateException
	public double makeADeposit(double amount) {
		if(amount < 0) {
			//System.out.println("Error: your amount is not posible to deposit");
			throw new IllegalArgumentException("Deposito menor a cero");
		}
		else this.balance += amount;
		return this.balance;
	}
	
	
}
