
import java.util.*;

class ArrayIndexFind {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of elements:");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter values:");
        for (int i = 0; i < n; i++) {  // Fixed condition
            arr[i] = sc.nextInt();
        }

        System.out.println("Values are below:");
        for (int i = 0; i < n; i++) {  // Fixed condition
            System.out.println(arr[i]);
        }

        sc.close();
    }
}

SELECT * FROM worker WHERE E_Name LIKE 'a%' OR E_Name LIKE 'A%';

SELECT * FROM worker WHERE j_date > TO_DATE('01-JAN-2010', 'DD-MON-YYYY');

