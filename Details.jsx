class Number:
    def number_calculate(self, n):
        if n > 0:
            print("Number is Positive")
        elif n < 0:
            print("Number is Negative")
        else:
            print("Number is Equal")

a = int(input("Enter value: "))
nb = Number()
nb.number_calculate(a)



#include <stdio.h>

void numberCalculate(int n) {
    if(n > 0)
        printf("Number is Positive\n");
    else if(n < 0)
        printf("Number is Negative\n");
    else
        printf("Number is Equal\n");
}

int main() {
    int a;
    printf("Enter value: ");
    scanf("%d", &a);
    numberCalculate(a);
    return 0;
}


#include <iostream>
using namespace std;

class Number {
public:
    void numberCalculate(int n) {
        if(n > 0)
            cout << "Number is Positive" << endl;
        else if(n < 0)
            cout << "Number is Negative" << endl;
        else
            cout << "Number is Equal" << endl;
    }
};

int main() {
    int a;
    cout << "Enter value: ";
    cin >> a;
    Number nb;
    nb.numberCalculate(a);
    return 0;
}



using System;

class Number {
    public void numberCalculate(int n) {
        if (n > 0)
            Console.WriteLine("Number is Positive");
        else if (n < 0)
            Console.WriteLine("Number is Negative");
        else
            Console.WriteLine("Number is Equal");
    }
}

class Program {
    static void Main() {
        Console.Write("Enter value: ");
        int a = Convert.ToInt32(Console.ReadLine());
        Number nb = new Number();
        nb.numberCalculate(a);
    }
}
// program.cs


numberCalculate <- function(n) {
  if (n > 0) {
    print("Number is Positive")
  } else if (n < 0) {
    print("Number is Negative")
  } else {
    print("Number is Equal")
  }
}

a <- as.integer(readline(prompt = "Enter value: "))
numberCalculate(a)




class NumberCheck {
    numberCalculate(n) {
        if (n > 0) {
            console.log("Number is Positive");
        } else if (n < 0) {
            console.log("Number is Negative");
        } else {
            console.log("Number is Equal");
        }
    }
}

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter value: ", input => {
    const a = parseInt(input);
    const nb = new NumberCheck();
    nb.numberCalculate(a);
    readline.close();
});





using System;

class Program {
    static void Main() {
        Console.Write("Enter value: ");
        int a = Convert.ToInt32(Console.ReadLine());

        if (a > 0)
            Console.WriteLine("Number is Positive");
        else if (a < 0)
            Console.WriteLine("Number is Negative");
        else
            Console.WriteLine("Number is Equal");
    }
}





const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter value: ", input => {
    const n = parseInt(input);

    if (n > 0) {
        console.log("Number is Positive");
    } else if (n < 0) {
        console.log("Number is Negative");
    } else {
        console.log("Number is Equal");
    }

    readline.close();
});




#include <stdio.h>

void main() {
    int a;
    printf("Enter value: ");
    scanf("%d", &a);

    if (a > 0)
        printf("Number is Positive\n");
    else if (a < 0)
        printf("Number is Negative\n");
    else
        printf("Number is Equal\n");
}



#include <iostream>
using namespace std;

void main() {
    int a;
    cout << "Enter value: ";
    cin >> a;

    if (a > 0)
        cout << "Number is Positive" << endl;
    else if (a < 0)
        cout << "Number is Negative" << endl;
    else
        cout << "Number is Equal" << endl;
}


