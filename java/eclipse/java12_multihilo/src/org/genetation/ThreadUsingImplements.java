package org.genetation;


class Feline{
	
}

interface Pet{
	
}

class Cat extends Feline implements Pet, Runnable{

	public long getId() {
		return Thread.currentThread().getId();
	}
	
	@Override
	public void run() {
		System.out.println("Ejecutando tarea concurrente");
		for( int i = 0 ; i < 5 ; i++ ) {
			System.out.println("id: " + getId() + ", iteration: " + i);
		}
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
}


public class ThreadUsingImplements {

	public static void main(String[] args) {
		
		Cat chicharronCat = new Cat();
		Cat chetitos = new Cat();
		Cat zeus = new Cat();
		
	}

}
