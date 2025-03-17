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

