package org.generation;

import java.util.HashSet;
import java.util.Set;

//import com.zoo.Animal;
//import com.zoo.Cat;
//import com.zoo.Leopard;
import com.zoo.*;

public class AnimalTest {

	public static void main(String[] args) {
		
		//Cat michi;
		Animal michi = new Cat("Neko",3);
		System.out.println(michi.eat());
		System.out.println(michi.makeANoise());
		System.out.println(michi.sleep());
		
		Animal leopardo = new Leopard( 6 );
		Feline leopardo2 = new Leopard( 5 );
		Leopard leopardo3 = new Leopard( 8 );
		System.out.println(leopardo.eat());
		System.out.println(leopardo2.makeANoise());
		System.out.println(leopardo3.sleep());
		
		
		Set< Animal > noahArk = new HashSet<>();
		noahArk.add( michi );
		noahArk.add( new Cat("Saladino",3) );
		noahArk.add(leopardo);
		noahArk.add(leopardo2);
		noahArk.add(leopardo3);
		
		for(Animal animal: noahArk) {
			System.out.println(animal.eat());
			System.out.println(animal.sleep());
			if(animal instanceof Cat) {
				System.out.println( ((Cat)animal).makeANoise(new Cat("Rocky", 5)) );
				System.out.println( ((Cat)animal).trick() );
			} else {
				System.out.println( animal.makeANoise() );
			}
		}
		
		Animal chicharron = new Cat("chicharron", 2);
	    Feline satanas = new Cat("stanas",2);
	    Cat garfield = new Cat("garfield", 2);
	    Pet zeus = new Cat("zeus", 2);
		
		
	}

}
