// Parent class
class Vehicle {
    String brand = "Toyota";  // Vehicle attribute

    // Method in the parent class
    void start() {
        System.out.println(brand + " is starting...");
    }

    void stop() {
        System.out.println(brand + " is stopping...");
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    int speed = 120; // Additional attribute for the child class

    // Method in the child class
    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Speed: " + speed + " km/h");
    }

    // Overriding parent class method
    @Override
    void start() {
        System.out.println(brand + " car is starting with speed " + speed + " km/h.");
    }
}

// Main class
public class InheritanceExample {
    public static void main(String[] args) {
        // Creating an object of the child class
        Car myCar = new Car();

        // Accessing parent class method
        myCar.start();
        myCar.displayInfo();
        myCar.stop(); // Inherited method
    }
}
