package org.generation;

import java.util.Scanner;

public class HackerrankJava {

	public static void main(String[] args) {
		System.out.print("5 :");
		Scanner sc = new Scanner( System.in );
		
        int numberOfIntegers = sc.nextInt();
        double positiveValues = 0;
        double negativeValues = 0;
        double zeros = 0;
        
        for( int i = 0 ; i < numberOfIntegers ; i++ ){
            int num = sc.nextInt();
            if( num > 0 ) positiveValues++;
            else if( num < 0 ) negativeValues++;
            else zeros++;
        }
        //System.out.println(numberOfIntegers);
        System.out.printf("%6f %n" , positiveValues / numberOfIntegers );
        System.out.printf("%6f %n" , negativeValues / numberOfIntegers );
        System.out.printf("%6f %n" , zeros / numberOfIntegers );
        
        sc.close();
        //System.out.println(5);
	}

}
