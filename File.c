#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_STUDENTS 100

// Structure to hold student data
typedef struct {
    char name[50];
    int roll_no;
    float marks;
} Student;

Student students[MAX_STUDENTS];
int student_count = 0;

// Function to add a student
void addStudent() {
    if (student_count < MAX_STUDENTS) {
        printf("Enter Student Name: ");
        scanf(" %[^"]s", students[student_count].name);
        printf("Enter Roll Number: ");
        scanf("%d", &students[student_count].roll_no);
        printf("Enter Marks: ");
        scanf("%f", &students[student_count].marks);
        student_count++;
        printf("Student added successfully!\n");
    } else {
        printf("Student list is full!\n");
    }
}

// Function to display all students
void displayStudents() {
    if (student_count == 0) {
        printf("No students available!\n");
        return;
    }
    printf("\nStudent List:\n");
    for (int i = 0; i < student_count; i++) {
        printf("%d. Name: %s, Roll No: %d, Marks: %.2f\n", i + 1, students[i].name, students[i].roll_no, students[i].marks);
    }
}

// Function to search for a student by roll number
void searchStudent() {
    int roll;
    printf("Enter Roll Number to search: ");
    scanf("%d", &roll);
    for (int i = 0; i < student_count; i++) {
        if (students[i].roll_no == roll) {
            printf("Student Found: Name: %s, Roll No: %d, Marks: %.2f\n", students[i].name, students[i].roll_no, students[i].marks);
            return;
        }
    }
    printf("Student not found!\n");
}

int main() {
    int choice;
    do {
        printf("\nStudent Management System\n");
        printf("1. Add Student\n");
        printf("2. Display Students\n");
        printf("3. Search Student\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                displayStudents();
                break;
            case 3:
                searchStudent();
                break;
            case 4:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice! Please try again.\n");
        }
    } while (choice != 4);

    return 0;
}
