import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class TesteDiffMatrix {

	@Test
	void test() {
		int[] a = {1,2,6,4}; 
        int resultado = Principal.maxDifference(a);
        int resultadoEsperado = 5;
        
        assertEquals(resultadoEsperado, resultado);
	}

}
