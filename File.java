import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        
        if (scanner.hasNextInt()) {
            int intValue = scanner.nextInt();
            System.out.println("You entered an Integer: " + intValue);
        } else if (scanner.hasNextFloat()) {
            float floatValue = scanner.nextFloat();
            System.out.println("You entered a Float: " + floatValue);
        } else {
            System.out.println("You did not enter a valid Integer or Float.");
        }
        
        scanner.close();
    }
}
