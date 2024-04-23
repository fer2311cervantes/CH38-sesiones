package test.org.generation.math;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.generation.math.MathOperations;
import org.junit.jupiter.api.*;
/*import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;*/

public class MathOperationTest {
	
	MathOperations op;
	
	@BeforeEach
	void setUp() {
		op = new MathOperations(10);
	}
	
	@Test
	@Order(1)
	void additionTest() {
		assertEquals(15, op.addition(5));
		assertEquals(20, op.addition(5));
		assertEquals(25, op.addition(5));
	}
	
	@Test
	void additionFloatNumbersTest() {
		MathOperations math = new MathOperations(1);
		
		final double DELTA = 0.0001;
		assertEquals( 1.01, math.addition(0.01) );
		assertEquals( 1.02, math.addition(0.01) );
		assertEquals( 1.03, math.addition(0.01) );
		assertEquals( 1.04, math.addition(0.01) );
		assertEquals( 1.05, math.addition(0.01) );
		assertEquals( 1.06, math.addition(0.01) );
		assertEquals( 1.07, math.addition(0.01) );
		assertEquals( 1.08, math.addition(0.01) );
		assertEquals( 1.09, math.addition(0.01) );
	}
	
	@Test
	@Order(3)
	void additionNEgativeNumbersTest() {
		assertThrows( IllegalStateException.class, () ->{
			op.addition(-2);
		} );
	}
}
