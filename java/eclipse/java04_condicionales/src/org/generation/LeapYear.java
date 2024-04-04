package org.generation;

public class LeapYear {

	public static void main(String[] args) {
		int month = 2;
		int year = 1900;
		int numDays = 0;
		switch(month) {
		case 1,3,5,7,8,10,12:
			numDays = 31;
			break;
		case 4,6,9,11:
			numDays = 30;
			break;
		case 2:
			if((year % 4) == 0 ) numDays = 29;
			else numDays = 28;
			break;
		default:
			break;
		}
		System.out.println("days: "+numDays);

		// Indicar el num de días del mes
		// ej. enero, marzo, mayo, julio, 
		// agosto, octubre, diciembre: 31
		// ej. abril, junio, septiembre, noviembre : 30 
		// febrero: 28 o 29.
		//tiene que ser divisible entre 4 pero no entre 100 amenos que sea divisible entre 400
		/*
		 1 enero -
		 2 febrero
		 3 marzo -
		 4 abril
		 5 mayo -
		 6 junio
		 7 julio -
		 8 agosto -
		 9 septiembre
		 10 octubre -
		 11 novimbre
		 12 diciembre -
		 */
	}

}
