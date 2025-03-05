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
