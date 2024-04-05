package com.santander;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 *  Clase: Una clase es una componente fundamental de la programaci�n
 *  orientada a objeto(OOP). Una clase es una plantilla que define el
 *  comportamiento(m�todos) y las propiedades(atributos) de los objetos
 *  que se crean(instancian) a partir de ella. Una clase puede
 *  considerarse como un plano o un molde a partir del cual se crean
 *  los objetos( instanciar la clase).
 *  
 */
public class Atm {
	// atributos de instancia (non-static fields)
	int serialNumber;
	String model;
	double balance;
	// atributos de clase (static fields)
	/* atributos de clase (static fields)
	 Atributos que pertenecen a la clase. Esto significa que
	 tendr� el mismo valor para todos los objetos.
	 Estos atributos son �tiles para mantener informaci�n com�n en todos
	 los objetos. Tambi�n, para propiedades donde no se requiere crear objetos.
	*/
	static String bankName;
	
	// m�todos constructores
	
	// m�todos de instancia (non-static methods)
	double withdraw( double amount) {
		balance -= amount;
		return balance;
	}
	
	double makeADeposit(double amount) {
		balance += amount;
		return balance;
	}
	
	void superCheckBalance() {
		LocalDateTime now = LocalDateTime.now(); // feha y hora del sistema
		DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"); // formatear
		String formatDateTime = now.format(format);
		
		System.out.printf("%s - Balance for %s (Serial Number %04d): $%,.2f%n", 
				      formatDateTime,      model,        serialNumber,  balance);
	}
	
	// m�todos est�ticos(static methods)
	void printBankName() {
		System.out.println("Bank name: " + (bankName != null ? bankName : "no bank" ) );
	}
}
