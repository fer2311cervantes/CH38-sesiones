package org.generation;

import com.zoo.Animal;
import com.zoo.Cat;

public class AnimalTest {

	public static void main(String[] args) {
		
		//Cat michi;
		Animal michi = new Cat("Neko",3);
		
		System.out.println(michi.eat());
		System.out.println(michi.makeANoise());
		System.out.println(michi.sleep());

	}

}
