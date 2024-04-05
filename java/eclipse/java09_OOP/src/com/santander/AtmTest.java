package com.santander;

public class AtmTest {

	public static void main(String[] args) {
		Atm atm01 = new Atm();
		atm01.serialNumber = 1;
		atm01.model = "T-800";
		atm01.balance = 450_000;
		
		Atm atm02 = new Atm();
		atm02.serialNumber = 2;
		atm02.model = "T-1000";
		atm02.balance = 600_000;
		
		//monto total sucursal atm01 y atm02
		double totalBalance = atm01.balance + atm02.balance;
		System.out.println("Monto total: " + totalBalance);
		System.out.printf("Monto total: US $%,3.2f %n" , totalBalance);
		
		atm01.withdraw( 400_000 );
		atm01.superCheckBalance();
		
		atm01.makeADeposit(500_000);
		atm01.superCheckBalance();
		atm02.superCheckBalance();
		
		atm01.printBankName();
		Atm.bankName = "Santander";
		atm01.printBankName();
	}

}
