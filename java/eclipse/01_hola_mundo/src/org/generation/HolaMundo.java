package org.generation;

public class HolaMundo {
	public static void main( String[] args ) {
		System.out.println("hola mundo");
		
		
		//byte edadFer = 26;
		//System.out.println("Max value byte: " + Byte.MAX_VALUE );
		//System.out.println("Max value byte: " + Byte.MIN_VALUE );
		
		//System.out.println("Max value Short: " + Short.MAX_VALUE);
		//System.out.println("Min value Short: " + Short.MIN_VALUE);
		
		//System.out.println("Max value Integer: " + Integer.MAX_VALUE);
		//System.out.println("Min value Integer: " + Integer.MIN_VALUE);
		
		//System.out.println("Max value Long: " + Long.MAX_VALUE);
		//System.out.println("Min value Long: " + Long.MIN_VALUE);
		/*
		int numEntero = 2_147_483_647;
		double numDouble = 1_500.567;
		long numGrande = 2_147_483_648L;
		float numDecimal = 1_500.567F;    */
		//System.out.println("Max value Float: " + Float.MAX_VALUE);
		//System.out.println("Min value Float: " + Float.MIN_VALUE);
		
		//System.out.println("Max value Double: " + Double.MAX_VALUE);
		//System.out.println("Min value Double: " + Double.MIN_VALUE);
        /*
		char primeraLetraDeNombreTania = 'T';
		// Se puede alacenar con el valor unicode '\u0000'
		char letraT = '\u0054';
		// también se puede definir por su valor númerico
		char letraTmayus = 84; 
		System.out.println(primeraLetraDeNombreTania);
		System.out.println(letraT);
		System.out.println(letraTmayus);  */
		
		/*
		 * Formas de representar un número
		 */
		
		/*
		System.out.println("Representación decimal: " + 34 );
		System.out.println("Representación hexadecimal: " + 0x22 );
		System.out.println("Representación binaria: " + 0b0010_0010 );
		System.out.println("Representación octal: " + 042 );
		System.out.println("hola \n\tmundo \n\t\tfeliz \n\t\t\t!");
		
		// Conversión String a números		
		String numGolesStr = "2";		
		System.out.println("Goles + 1: " + ( numGolesStr + 1  ));		
		int numGolesInt = Integer.parseInt(numGolesStr);		
		System.out.println("Goles + 1: " + ( numGolesInt + 1  ));
		// Conversión números a String 	
		int numSuerte = 123;
		String numGanador = "" + numSuerte;
		System.out.println("Num ganadores : " + numGanador);
		String otroGanador = String.valueOf(numSuerte) ;
		System.out.println("Num ganadores : " + otroGanador);
		System.out.println("Primer numero : " + otroGanador.charAt(0));
		System.out.println("Num de digitos : " + otroGanador.length());
		
		// Escribe en una variable tu año de nacimiento
		// imprime en consola
		// Eres de los 80's si naciste entre 1980 y 1989
		// Eres de los 90's si naciste entre 1990 y 1999
		// Eres de los 2000's si naciste entre 2000 y 2009
		int numNacimiento = 1997;
		if(numNacimiento < 1980) System.out.println("Naciste antes de los 80' ");
		else if(numNacimiento < 1990) System.out.println("Eres de los 80' ");
		else if(numNacimiento < 2000) System.out.println("Eres de los 90' ");
		else if(numNacimiento < 2010) System.out.println("Eres de los 2000' ");
		else System.out.println("Eres de los 2010' ");
		
		int opeA = (int)5.3;
		int opeB = opeA * (int)1.1;
		double opeC = opeA * 1.1;
		System.out.println(opeA);
		System.out.println(opeB);
		System.out.println(opeC);
		
		
		int valorInicial = 10;
		System.out.println("Preincremeto: " + ++valorInicial ); // 11
		System.out.println("Postincremeto: " + valorInicial++ ); // 11
		System.out.println("Valor final: " + valorInicial); // 12
		
		System.out.println( 5 ==  Integer.parseInt("101",2) ); // true				
		int numEmpleados = 1000;		
		System.out.println("Empleados > 1000 " + ( numEmpleados > 1000 ) ); // false
		System.out.println("Empleados >= 1000 " + ( numEmpleados >= 1000 ) ); // true
		System.out.println("Empleados <= 1000 " + ( numEmpleados <= 1000 ) ); // true	
		System.out.println("Empleados == 1000 " + ( numEmpleados == 1000 ) ); // true
		System.out.println("Empleados != 1000 " + ( numEmpleados != 1000 ) ); // false
		System.out.println('a' > 10); // 97 > 10 true
		*/
		
		// Operadores lógicos
	   // && (AND) retorna true si ambos operadores son true
	   // || (OR) retorna true si cualquiera de los operandos es true
	   // !  (NOT) invierte el resultado booleano
	   boolean a = true;
	   boolean b = false;
	   boolean c = true;
	   System.out.println( (a && b) || (a && c) );   // true
	   System.out.println( a || b || c && a );       // true
	   System.out.println( !(a || b) && (!a || c) ); // false   	  
	   System.out.println( a || b && c || a && b  ); // true
	}
}
