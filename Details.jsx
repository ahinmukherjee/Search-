import java.util.Scanner;

public class BubbleSort {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (arr[i] > arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        System.out.println("Sorted Array: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("How many numbers do you want? ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter numbers:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        
        bubbleSort(arr);
        sc.close();
    }
}

#include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                swap(arr[i], arr[j]);
            }
        }
    }
    cout << "Sorted Array: ";
    for (int num : arr) {
        cout << num << " ";
    }
}

int main() {
    int n;
    cout << "How many numbers do you want? ";
    cin >> n;
    
    vector<int> arr(n);
    cout << "Enter numbers:" << endl;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    bubbleSort(arr);
    return 0;
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];  // Swap using destructuring
            }
        }
    }
    console.log("Sorted Array:", arr);
}

let n = parseInt(prompt("How many numbers do you want?"));
let arr = [];

console.log("Enter numbers:");
for (let i = 0; i < n; i++) {
    arr.push(parseInt(prompt()));
}

bubbleSort(arr);


#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    printf("Sorted Array: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int n;
    printf("How many numbers do you want? ");
    scanf("%d", &n);
    
    int arr[n];
    printf("Enter numbers:\n");
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    
    bubbleSort(arr, n);
    return 0;
}



bubble_sort <- function(arr) {
  n <- length(arr)
  for (i in 1:n) {
    for (j in (i+1):n) {
      if (arr[i] > arr[j]) {
        temp <- arr[i]
        arr[i] <- arr[j]
        arr[j] <- temp
      }
    }
  }
  return(arr)
}

# Taking user input
n <- as.integer(readline("How many numbers do you want? "))
arr <- numeric(n)

cat("Enter numbers:\n")
for (i in 1:n) {
  arr[i] <- as.integer(readline())
}

sorted_arr <- bubble_sort(arr)
cat("Sorted Array:", sorted_arr, "\n")



