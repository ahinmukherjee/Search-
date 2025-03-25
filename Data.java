import java.awt.*;  
import javax.swing.*;  

public class FrameTest {  
    public static void main(String args[]) {  
        SampleFram st = new SampleFram();  
        st.setVisible(true);  
        st.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);  
    }  
}  

class SampleFram extends JFrame {  
    public SampleFram() {  
        Toolkit kit = Toolkit.getDefaultToolkit();  
        Dimension scrsize = kit.getScreenSize();  
        int w = scrsize.width;  
        int h = scrsize.height;  
        
        setSize(w / 2, h / 2);  
        setLocation(w / 4, h / 4);  
        setTitle("Hello");  
        setResizable(false);  
    }  
}



import java.awt.*;  
import javax.swing.*;  

public class FrameString {  
    public static void main(String args[]) {  
        SampleFram st = new SampleFram();  
        st.setVisible(true);  
        st.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);  
    }  
}  

class SampleFram extends JFrame {  
    public SampleFram() {  
        Toolkit kit = Toolkit.getDefaultToolkit();  
        Dimension scrsize = kit.getScreenSize();  
        int w = scrsize.width;  
        int h = scrsize.height;  
        setSize(w / 2, h / 2);  
        setLocation(w / 4, h / 4);  
        setTitle("Hello");  
        setResizable(false);  
        
        MyPanel p = new MyPanel();  
        add(p);  
    }  
}  

class MyPanel extends JPanel {  
    @Override  
    public void paintComponent(Graphics g) {  
        super.paintComponent(g);  
        setBackground(Color.YELLOW);  
        Font f = new Font("Serif", Font.BOLD | Font.ITALIC, 15);  
        g.setFont(f);  
        g.setColor(Color.RED);  
        g.drawString("I love You", 100, 200);  
    }  
}
