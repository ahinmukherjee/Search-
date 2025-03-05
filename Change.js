import java.util.Scanner;

class Armstrong {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(), c = n, arm = 0;
        sc.close();
        
        while (n > 0) {
            arm += Math.pow(n % 10, 3);
            n /= 10;
        }
        
        System.out.println(c == arm ? "Number is Armstrong" : "Number is not Armstrong");
    }
}


import java.util.Scanner;

class Armstrong {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {  // Using try-with-resources to auto-close Scanner
            int n = sc.nextInt(), temp = n, arm = 0;
            
            while (temp > 0) {
                int r = temp % 10;
                arm += r * r * r;  // Avoiding Math.pow() to reduce method call overhead
                temp /= 10;
            }

            System.out.println(n == arm ? "Number is Armstrong" : "Number is not Armstrong");
        }
    }
}



import java.util.Scanner;

class Practice {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) { // Auto-closing scanner
            System.out.print("Enter number: ");
            int n = sc.nextInt(), reverse = 0;

            while (n > 0) {
                reverse = reverse * 10 + (n % 10);
                n /= 10;
            }

            System.out.println("Reverse number is: " + reverse);
        }
    }
}



import java.util.Scanner;

class Inheritance {
    private int plus; // Making variable private to follow encapsulation

    void sum(int a, int b) {
        plus = a + b;
        System.out.println("Sum = " + plus);
    }

    int getPlus() {
        return plus;
    }
}

class Y extends Inheritance {
    void add() {
        try (Scanner sc = new Scanner(System.in)) { // Auto-closing scanner
            System.out.print("Enter number: ");
            int c = sc.nextInt();
            System.out.println("Result = " + (getPlus() + c));
        }
    }
}

public class X {
    public static void main(String[] args) {
        Y y = new Y();
        y.sum(20, 30);
        y.add();
    }
}
