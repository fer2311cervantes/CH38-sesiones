package com.zoo;

import java.io.Serializable;

public class Cat extends Feline implements Pet, Serializable{
	
	private String name;
	
	public Cat(String name ,double age) {
		super(age);
		this.name = name;
	}

	@Override
	public String sleep() {
		return "El gato " + this.name + " duerme bien"; 
	}

	@Override
	public String eat() {
		return "El gato " + this.name + " come croquetas"; 
	}
	
	@Override
	public String makeANoise() {
		return "Miau";
	}
	
	public String makeANoise(Cat streetCat) {
		if( streetCat.getAge() > this.getAge() ) {
			return "prrrrrr";
		} else {
			return "Raaaauuuullll";
		}
					
	}
	
	@Override
	public String trick() {		
		return "Te desprecio" ;
	}
	
}
