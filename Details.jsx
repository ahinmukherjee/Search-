num <- as.integer(readline(prompt = "Enter number: "))

if (num %% 2 == 0) {
  cat("Input number is even:", num, "\n")
} else {
  cat("Input number is odd:", num, "\n")
}


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter number: ", function(input) {
  const num = parseInt(input);

  if (num % 2 === 0) {
    console.log("Input number is even: " + num);
  } else {
    console.log("Input number is odd: " + num);
  }

  readline.close();
});



using System;

class EvenOdd {
    static void Main() {
        Console.Write("Enter number: ");
        int num = int.Parse(Console.ReadLine());

        if (num % 2 == 0) {
            Console.WriteLine("Input number is even: " + num);
        } else {
            Console.WriteLine("Input number is odd: " + num);
        }
    }
}
