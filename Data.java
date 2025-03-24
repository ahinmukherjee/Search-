#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter age: ";
    cin >> age;

    if (age >= 18) {
        cout << "You are already available for a voter card" << endl;
    } else {
        cout << "You are below the required age to apply for a voter card" << endl;
    }

    return 0;
}



#include <stdio.h>

int main() {
    int age;
    printf("Enter age: ");
    scanf("%d", &age);

    if (age >= 18) {
        printf("You are already available for a voter card\n");
    } else {
        printf("You are below the required age to apply for a voter card\n");
    }

    return 0;
}


import java.util.Scanner;

public class VoterCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter age: ");
        int age = scanner.nextInt();
        
        if (age >= 18) {
            System.out.println("You are already available for a voter card");
        } else {
            System.out.println("You are below the required age to apply for a voter card");
        }

        scanner.close();
    }
}


let age = parseInt(prompt("Enter age:"));

if (age >= 18) {
    console.log("You are already available for a voter card");
} else {
    console.log("You are below the required age to apply for a voter card");
}




#include <stdio.h>

int main() {
    int price;
    float r = 0, price1 = 0;

    printf("Enter price: ");
    scanf("%d", &price);

    if (price >= 1500) {
        r = price * (20.0 / 100);
        price1 = price - r;
        printf("Original Price: %d\n", price);
        printf("Discounted Price: %.2f\n", price1);
    } else if (price >= 1000) {
        r = price * (15.0 / 100);
        price1 = price - r;
        printf("Original Price: %d\n", price);
        printf("Discounted Price: %.2f\n", price1);
    } else if (price >= 500) {
        r = price * (5.0 / 100);
        price1 = price - r;
        printf("Original Price: %d\n", price);
        printf("Discounted Price: %.2f\n", price1);
    } else {
        printf("Not available for discount offer\n");
    }

    return 0;
}



#include <iostream>
using namespace std;

int main() {
    int price;
    float r = 0, price1 = 0;

    cout << "Enter price: ";
    cin >> price;

    if (price >= 1500) {
        r = price * (20.0 / 100);
        price1 = price - r;
        cout << "Original Price: " << price << endl;
        cout << "Discounted Price: " << price1 << endl;
    } else if (price >= 1000) {
        r = price * (15.0 / 100);
        price1 = price - r;
        cout << "Original Price: " << price << endl;
        cout << "Discounted Price: " << price1 << endl;
    } else if (price >= 500) {
        r = price * (5.0 / 100);
        price1 = price - r;
        cout << "Original Price: " << price << endl;
        cout << "Discounted Price: " << price1 << endl;
    } else {
        cout << "Not available for discount offer" << endl;
    }

    return 0;
}


import java.util.Scanner;

public class DiscountCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter price: ");
        int price = scanner.nextInt();
        
        double r = 0, price1 = 0;

        if (price >= 1500) {
            r = price * (20.0 / 100);
            price1 = price - r;
            System.out.println("Original Price: " + price);
            System.out.println("Discounted Price: " + price1);
        } else if (price >= 1000) {
            r = price * (15.0 / 100);
            price1 = price - r;
            System.out.println("Original Price: " + price);
            System.out.println("Discounted Price: " + price1);
        } else if (price >= 500) {
            r = price * (5.0 / 100);
            price1 = price - r;
            System.out.println("Original Price: " + price);
            System.out.println("Discounted Price: " + price1);
        } else {
            System.out.println("Not available for discount offer");
        }

        scanner.close();
    }
}


let price = parseInt(prompt("Enter price:"));
let r = 0, price1 = 0;

if (price >= 1500) {
    r = price * (20 / 100);
    price1 = price - r;
    console.log("Original Price:", price);
    console.log("Discounted Price:", price1);
} else if (price >= 1000) {
    r = price * (15 / 100);
    price1 = price - r;
    console.log("Original Price:", price);
    console.log("Discounted Price:", price1);
} else if (price >= 500) {
    r = price * (5 / 100);
    price1 = price - r;
    console.log("Original Price:", price);
    console.log("Discounted Price:", price1);
} else {
    console.log("Not available for discount offer");
}


#include <stdio.h>

int main() {
    int num;
    
    printf("Enter number: ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("Input number is even: %d\n", num);
    } else {
        printf("Input number is odd: %d\n", num);
    }

    return 0;
}


#include <iostream>
using namespace std;

int main() {
    int num;
    
    cout << "Enter number: ";
    cin >> num;

    if (num % 2 == 0) {
        cout << "Input number is even: " << num << endl;
    } else {
        cout << "Input number is odd: " << num << endl;
    }

    return 0;
}


import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = scanner.nextInt();
        
        if (num % 2 == 0) {
            System.out.println("Input number is even: " + num);
        } else {
            System.out.println("Input number is odd: " + num);
        }

        scanner.close();
    }
}

let num = parseInt(prompt("Enter number:"));

if (num % 2 === 0) {
    console.log("Input number is even:", num);
} else {
    console.log("Input number is odd:", num);
}
