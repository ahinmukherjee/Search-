import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.BigInteger;

public class FactorialCalculator {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Factorial Calculator");
        frame.setSize(400, 200);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        JPanel panel = new JPanel();
        frame.add(panel);
        placeComponents(panel);
        
        frame.setVisible(true);
    }

    private static void placeComponents(JPanel panel) {
        panel.setLayout(null);
        
        JLabel userLabel = new JLabel("Enter a number:");
        userLabel.setBounds(10, 20, 120, 25);
        panel.add(userLabel);
        
        JTextField userText = new JTextField(20);
        userText.setBounds(140, 20, 165, 25);
        panel.add(userText);
        
        JButton calculateButton = new JButton("Calculate");
        calculateButton.setBounds(10, 60, 120, 25);
        panel.add(calculateButton);
        
        JLabel resultLabel = new JLabel("Factorial: ");
        resultLabel.setBounds(10, 100, 350, 25);
        panel.add(resultLabel);
        
        calculateButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    int number = Integer.parseInt(userText.getText());
                    if (number < 0) {
                        resultLabel.setText("Factorial is not defined for negative numbers.");
                    } else {
                        BigInteger factorial = calculateFactorial(number);
                        resultLabel.setText("Factorial: " + factorial);
                    }
                } catch (NumberFormatException ex) {
                    resultLabel.setText("Please enter a valid integer.");
                }
            }
        });
    }

    private static BigInteger calculateFactorial(int num) {
        BigInteger result = BigInteger.ONE;
        for (int i = 2; i <= num; i++) {
            result = result.multiply(BigInteger.valueOf(i));
        }
        return result;
    }
}
