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
 











