public class PowerCalculate {
    public static void main(String args[]){
        TryTest st = new TryTest(2, 3);    
    }
}

class TryTest {
    TryTest(int base, int power) {  // Corrected parameter order for better understanding
        int a = 1;
        for (int i = 1; i <= power; i++) {  // Fixed exponentiation logic
            a = a * base;  // Removed redeclaration of 'a'
        }
        System.out.println("Result: " + a);
    }
}
