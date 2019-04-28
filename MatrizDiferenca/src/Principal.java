
public class Principal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] a = {1,2,6,4}; 
        int result = maxDifference(a);
        System.out.println(result);
	}
	
	static int maxDifference(int[] a) { 	
		if (a.length < 2) 
		   return -1;
		
		int i = 0;
		int maior = a[a.length-1];
		int maxDif = -1;
		
		for (i = a.length -2 ; i >= 0 ; i--) {
			if (maior < a[i]) {
				maior =a[i];
			} else {
				if ((maior - a[i]) > maxDif) {
					maxDif = maior - a[i];
				}
			}
		}	
		
		return maxDif;
    }

}
