class Data {
    int a = 9;
    int b = 8;
    int c = a + b;                
}

public class DataMemberAccesByObj {
    public static void main(String[] args) {
        Data t = new Data();
        System.out.println("Sum is " + t.c);  // Correct way to access instance variable
    }
}
