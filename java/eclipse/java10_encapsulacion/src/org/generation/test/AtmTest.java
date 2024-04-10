package org.generation.test;

import com.santander.Atm;

public class AtmTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Atm atm1 = new Atm();
		//cajero1.balance = 10;
		atm1.setBalance(600_000);
		System.out.println("cajero 1:");
		atm1.setModel("T-800");
		System.out.println(atm1.showDetails());
		
		System.out.println("cajero 2:");
		Atm atm2 = new Atm("T-1000",450_000);
		System.out.println(atm2.showDetails());
		
		System.out.println("cajero 3:");
		Atm atm3 = new Atm("T-1000",500_000);
		System.out.println(atm3.showDetails());
		
		System.out.println("cajero 4:");
		Atm atm4 = new Atm("T-1500","700000");
		System.out.println(atm4.showDetails());
		
		System.out.println("cajero 5:");
		Atm atm5 = Atm.createAirPortAtm();
		System.out.println(atm5.showDetails());
		atm5.makeADeposit(-34);
		atm5.makeADeposit(3400);		
		System.out.println(atm5.getBalance());
		atm5.withdraw(200000000);
		atm5.withdraw(-220);
		atm5.withdraw(3200);		
		System.out.println(atm5.getBalance());
	}

}
