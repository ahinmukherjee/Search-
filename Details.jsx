# Function to add two numbers
add_numbers <- function(a, b) {
  return(a + b)
}

# Example usage
num1 <- as.numeric(readline("Enter first number: "))
num2 <- as.numeric(readline("Enter second number: "))

# Performing addition
result <- add_numbers(num1, num2)

# Displaying the result
cat("The sum is:", result, "\n")




# Functions for arithmetic operations
add_numbers <- function(a, b) {
  return(a + b)
}

subtract_numbers <- function(a, b) {
  return(a - b)
}

multiply_numbers <- function(a, b) {
  return(a * b)
}

divide_numbers <- function(a, b) {
  if (b == 0) {
    return("Error: Division by zero is not allowed.")
  }
  return(a / b)
}

# Taking user input
num1 <- as.numeric(readline("Enter first number: "))
num2 <- as.numeric(readline("Enter second number: "))

# Performing operations
sum_result <- add_numbers(num1, num2)
sub_result <- subtract_numbers(num1, num2)
mul_result <- multiply_numbers(num1, num2)
div_result <- divide_numbers(num1, num2)

# Displaying results
cat("Addition:", sum_result, "\n")
cat("Subtraction:", sub_result, "\n")
cat("Multiplication:", mul_result, "\n")
cat("Division:", div_result, "\n")



# Function to calculate power
calculate_power <- function(base, exponent) {
  return(base ^ exponent)  # Using ^ operator for exponentiation
}

# Taking user input
base <- as.numeric(readline("Enter the base number: "))
exponent <- as.numeric(readline("Enter the exponent: "))

# Calculating power
result <- calculate_power(base, exponent)

# Displaying result
cat(base, "raised to the power of", exponent, "is:", result, "\n")




# Function to calculate remainder
calculate_remainder <- function(dividend, divisor) {
  if (divisor == 0) {
    return("Error: Division by zero is not allowed.")
  }
  return(dividend %% divisor)
}

# Taking user input
dividend <- as.numeric(readline("Enter the dividend: "))
divisor <- as.numeric(readline("Enter the divisor: "))

# Calculating remainder
remainder <- calculate_remainder(dividend, divisor)

# Displaying result
cat("The remainder when", dividend, "is divided by", divisor, "is:", remainder, "\n")
