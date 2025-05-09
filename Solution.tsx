public class TrafficSignal {
    public static void main(String[] args) {
        String[] signals = {"RED", "GREEN", "YELLOW"};
        int[] durations = {5000, 4000, 2000}; // milliseconds (5s, 4s, 2s)

        while (true) { // infinite loop to simulate continuous signal
            for (int i = 0; i < signals.length; i++) {
                System.out.println("Signal: " + signals[i]);
                try {
                    Thread.sleep(durations[i]); // wait for signal's time
                } catch (InterruptedException e) {
                    System.out.println("Interrupted: " + e);
                }
            }
        }
    }
}


import java.util.*;

public class FromDesign {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("Enter first name:\t");
            String name = sc.nextLine();
            System.out.println("Enter last name:\t");
            String name2 = sc.nextLine();
            System.out.println("Enter Your age:\t");
            int age = sc.nextInt();
            sc.nextLine(); // Fix: consume leftover newline
            System.out.println("Enter your blood group:\t");
            String blood = sc.nextLine();
            System.out.println("Your name is: " + name + " " + name2);
            System.out.println("Your age is: " + age);
            System.out.println("Your Blood is: " + blood + "+");
        } catch (InputMismatchException ime) {
            System.out.println("Doesn't match valid inputs format: " + ime);
        } catch (Exception e) {
            System.out.println("Please enter correct input: " + e);
        } finally {
            sc.close();
        }
    }
}
