import java.util.Scanner;

public class FactorialCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input from the user
        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();

        // Checking for negative numbers
        if (number < 0) {
            System.out.println("Factorial is not defined for negative numbers.");
        } else {
            long factorial = 1; // Using 'long' to handle large factorial values

            // Factorial calculation logic
            for (int i = 1; i <= number; i++) {
                factorial *= i;
            }

            // Output result
            System.out.println("Factorial of " + number + " is: " + factorial);
        }

        scanner.close();
    }
}
