//Declare and Initialize an Array

public class ArrayExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50}; 
        for (int num : numbers) {
            System.out.print(num + " ");
        }
    }
}


//Largest and Smallest Element in an Array

public class MinMaxArray {
    public static void main(String[] args) {
        int[] arr = {12, 34, 5, 67, 89, 1};
        int min = arr[0], max = arr[0];

        for (int num : arr) {
            if (num > max) max = num;
            if (num < min) min = num;
        }

        System.out.println("Minimum: " + min);
        System.out.println("Maximum: " + max);
    }
}

//reverse 

public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        System.out.print("Reversed Array: ");
        for (int i = arr.length - 1; i >= 0; i--) {
            System.out.print(arr[i] + " ");
        }
    }
}


// sum elements 

public class SumArray {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        System.out.println("Sum: " + sum);
    }
}

public class FindElement {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int target = 30;
        boolean found = false;

        for (int num : arr) {
            if (num == target) {
                found = true;
                break;
            }
        }
        
        System.out.println("Element " + target + " found: " + found);
    }
}
