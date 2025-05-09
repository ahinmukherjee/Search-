public class TrafficSignal {
    public static void main(String[] args) {
        String[] signals = {"RED", "GREEN", "YELLOW"};
        int[] durations = {5000, 4000, 2000}; // milliseconds (5s, 4s, 2s)

        while (true) { // infinite loop to simulate continuous signal
            for (int i = 0; i < signals.length; i++) {
                System.out.println("Signal: " + signals[i]);
                try {
                    Thread.sleep(durations[i]); // wait for signal's time
                } catch (InterruptedException e) {
                    System.out.println("Interrupted: " + e);
                }
            }
        }
    }
}
