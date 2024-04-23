package com.zoo;

public final class Leopard extends Feline{
	
	public Leopard( double age ) {
		super(age);
	}
	
	@Override
	public String sleep() {
		return "El leopardo duerme bien"; 
	}

	@Override
	public String eat() {
		return "El leopardo come carne"; 
	}
	
	@Override
	public String makeANoise() {
		return "Grrrrr";
	}
	
	
}
