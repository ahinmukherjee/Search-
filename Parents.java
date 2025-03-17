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



// Base class (Grandparent)
class Animal {
    String type = "Mammal";

    // Method in the base class
    void eat() {
        System.out.println(type + " is eating...");
    }
}

// Derived class (Parent)
class Dog extends Animal {
    String breed = "Golden Retriever";

    // Method in the derived class
    void bark() {
        System.out.println(breed + " is barking...");
    }

    // Overriding the eat method
    @Override
    void eat() {
        super.eat();  // Calls the parent class method
        System.out.println(breed + " loves to eat dog food.");
    }
}

// Derived class (Child)
class Puppy extends Dog {
    String name = "Buddy";

    // Method in the child class
    void play() {
        System.out.println(name + " is playing with a ball.");
    }

    // Overriding the bark method
    @Override
    void bark() {
        System.out.println(name + " is barking softly...");
    }
}

// Main class
public class MultilevelInheritanceExample {
    public static void main(String[] args) {
        // Creating an object of the Puppy class
        Puppy myPuppy = new Puppy();

        // Accessing methods from all classes
        myPuppy.eat();   // Calls overridden method with super keyword
        myPuppy.bark();  // Calls overridden method in Puppy
        myPuppy.play();  // Calls method from Puppy class
    }
}
