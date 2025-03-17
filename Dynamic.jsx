# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Linked List class
class SinglyLinkedList:
    def __init__(self):
        self.head = None

    # Insert at the beginning
    def insert_at_beginning(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    # Insert at the end
    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    # Insert at a specific position
    def insert_at_position(self, data, position):
        if position < 1:
            print("Position should be >= 1")
            return
        if position == 1:
            self.insert_at_beginning(data)
            return
        new_node = Node(data)
        current = self.head
        for _ in range(position - 2):
            if current is None:
                print("Position out of range")
                return
            current = current.next
        if current is None:
            print("Position out of range")
            return
        new_node.next = current.next
        current.next = new_node

    # Delete by value
    def delete_by_value(self, value):
        if self.head is None:
            print("List is empty")
            return
        if self.head.data == value:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == value:
                current.next = current.next.next
                return
            current = current.next
        print("Value not found in the list")

    # Delete by position
    def delete_by_position(self, position):
        if self.head is None:
            print("List is empty")
            return
        if position == 1:
            self.head = self.head.next
            return
        current = self.head
        for _ in range(position - 2):
            if current is None or current.next is None:
                print("Position out of range")
                return
            current = current.next
        if current.next is None:
            print("Position out of range")
            return
        current.next = current.next.next

    # Search for a value
    def search(self, value):
        current = self.head
        position = 1
        while current:
            if current.data == value:
                print(f"Value {value} found at position {position}")
                return
            current = current.next
            position += 1
        print(f"Value {value} not found in the list")

    # Display the list
    def display(self):
        if self.head is None:
            print("List is empty")
            return
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

    # Reverse the linked list
    def reverse(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev

# Driver code
if __name__ == "__main__":
    sll = SinglyLinkedList()

    # Insertions
    sll.insert_at_end(10)
    sll.insert_at_end(20)
    sll.insert_at_end(30)
    sll.insert_at_beginning(5)
    sll.insert_at_position(15, 3)

    print("Linked List after insertions:")
    sll.display()

    # Deletion by value
    sll.delete_by_value(20)
    print("After deleting value 20:")
    sll.display()

    # Deletion by position
    sll.delete_by_position(2)
    print("After deleting node at position 2:")
    sll.display()

    # Searching
    sll.search(30)
    sll.search(100)

    # Reversing the list
    sll.reverse()
    print("Reversed Linked List:")
    sll.display()






// Node class
class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

// Linked List class
class SinglyLinkedList {
    private Node head;

    // Insert at the beginning
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }

    // Insert at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Insert at a specific position
    public void insertAtPosition(int data, int position) {
        if (position < 1) {
            System.out.println("Position should be >= 1");
            return;
        }
        if (position == 1) {
            insertAtBeginning(data);
            return;
        }
        Node newNode = new Node(data);
        Node current = head;
        for (int i = 1; i < position - 1; i++) {
            if (current == null) {
                System.out.println("Position out of range");
                return;
            }
            current = current.next;
        }
        if (current == null) {
            System.out.println("Position out of range");
            return;
        }
        newNode.next = current.next;
        current.next = newNode;
    }

    // Delete by value
    public void deleteByValue(int value) {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        if (head.data == value) {
            head = head.next;
            return;
        }
        Node current = head;
        while (current.next != null) {
            if (current.next.data == value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
        System.out.println("Value not found in the list");
    }

    // Delete by position
    public void deleteByPosition(int position) {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        if (position == 1) {
            head = head.next;
            return;
        }
        Node current = head;
        for (int i = 1; i < position - 1; i++) {
            if (current == null || current.next == null) {
                System.out.println("Position out of range");
                return;
            }
            current = current.next;
        }
        if (current.next == null) {
            System.out.println("Position out of range");
            return;
        }
        current.next = current.next.next;
    }

    // Search for a value
    public void search(int value) {
        Node current = head;
        int position = 1;
        while (current != null) {
            if (current.data == value) {
                System.out.println("Value " + value + " found at position " + position);
                return;
            }
            current = current.next;
            position++;
        }
        System.out.println("Value " + value + " not found in the list");
    }

    // Display the list
    public void display() {
        if (head == null) {
            System.out.println("List is empty");
            return;
        }
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("NULL");
    }

    // Reverse the linked list
    public void reverse() {
        Node prev = null;
        Node current = head;
        while (current != null) {
            Node nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        head = prev;
    }
}

// Driver class
public class LinkedListDemo {
    public static void main(String[] args) {
        SinglyLinkedList sll = new SinglyLinkedList();

        // Insertions
        sll.insertAtEnd(10);
        sll.insertAtEnd(20);
        sll.insertAtEnd(30);
        sll.insertAtBeginning(5);
        sll.insertAtPosition(15, 3);

        System.out.println("Linked List after insertions:");
        sll.display();

        // Deletion by value
        sll.deleteByValue(20);
        System.out.println("After deleting value 20:");
        sll.display();

        // Deletion by position
        sll.deleteByPosition(2);
        System.out.println("After deleting node at position 2:");
        sll.display();

        // Searching
        sll.search(30);
        sll.search(100);

        // Reverse the list
        sll.reverse();
        System.out.println("Reversed Linked List:");
        sll.display();
    }
}
