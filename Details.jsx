import java.util.Scanner;

public class StringSwitchExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a color (Red, Blue, Green): ");
        String color = scanner.nextLine();

        switch (color) {
            case "Red":
                System.out.println("Color is Red");
                break;
            case "Blue":
                System.out.println("Color is Blue");
                break;
            case "Green":
                System.out.println("Color is Green");
                break;
            default:
                System.out.println("Unknown color");
        }

        scanner.close();
    }
}



