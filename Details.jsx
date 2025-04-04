import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

public class TextChange {
    public static void main(String args[]) {
        FrameSample st = new FrameSample();
        st.setVisible(true);
        st.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}

class FrameSample extends JFrame {
    public FrameSample() {
        Toolkit kit = Toolkit.getDefaultToolkit();
        Dimension scrsize = kit.getScreenSize();
        int w = scrsize.width;
        int h = scrsize.height;
        setSize(w / 2, h / 2);
        setLocation(w / 4, h / 4);
        setTitle("Hello");
        setResizable(false);
        MyPanel mp = new MyPanel();
        add(mp);
    }
}

class MyPanel extends JPanel {
    JButton yellowButton, greenButton, blueButton, redButton, exitButton;
    JLabel label;

    public MyPanel() {
        yellowButton = new JButton("Yellow");
        greenButton = new JButton("Green");
        blueButton = new JButton("Blue");
        redButton = new JButton("Red");
        exitButton = new JButton("Exit");

        label = new JLabel("Default Text"); // Added JLabel
        add(label);

        add(yellowButton);
        add(greenButton);
        add(blueButton);
        add(redButton);
        add(exitButton);

        ColorAction yellowAction = new ColorAction(Color.YELLOW);
        ColorAction greenAction = new ColorAction(Color.GREEN);
        ColorAction blueAction = new ColorAction(Color.BLUE);
        ColorAction redAction = new ColorAction(Color.RED);

        yellowButton.addActionListener(yellowAction);
        greenButton.addActionListener(greenAction);
        blueButton.addActionListener(blueAction);
        redButton.addActionListener(redAction);

        TextAction textYellowButton = new TextAction("Hello");
        yellowButton.addActionListener(textYellowButton);

        ExitAction ea = new ExitAction();
        exitButton.addActionListener(ea);
    }

    class ColorAction implements ActionListener {
        Color bgcolor;

        public ColorAction(Color c) {
            bgcolor = c;
        }

        public void actionPerformed(ActionEvent ae) {
            setBackground(bgcolor);
        }
    }

    class TextAction implements ActionListener {
        String bgstring;

        public TextAction(String s) {
            bgstring = s;
        }

        public void actionPerformed(ActionEvent ae) {
            label.setText(bgstring); // Corrected setText()
        }
    }

    class ExitAction implements ActionListener {
        public void actionPerformed(ActionEvent ae) {
            System.exit(0);
        }
    }
}
