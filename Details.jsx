import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.text.DecimalFormat;

public class Currency extends HttpServlet{
public void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException{
	
	response.setContentType("text/html");
	PrintWriter out=response.getWriter();

	double value, result=0;
	double dollar=0.011, pound=0.0081, yen=1.73;
	
	String p=request.getParameter("c");
	String cureency=request.getParameter("rs");	

	DecimalFormat d1= new DecimalFormat("#.00");
	DecimalFormat d2= new DecimalFormat("#.00");	

	if((p.equals("")) || ( cureency.equals(""))){
		ServletContext sc=getServletContext();
		RequestDispatcher rd=sc.getRequestDispatcher("/index.html");
		rd.include(request, response);
		out.println("<center><h2><font color='red'> Field can't be empty </font></h2></center>");
		return;
		}
	p=p.replaceAll("\\s+", "");

	try{
		value=Double.parseDouble(p);
		d1=d1.format(value);
		}
	catch(NumberFormatException nfe){
		ServletContext sc=getServletContext();
		RequestDispatcher rd=sc.getRequestDispatcher("/index.html");
		rd.include(request, response);
		out.println("<center><h2><font color='red'> Plz enter valid amount. "+nfe+"</font></h2></center>");
		return;
		}	
		
	if(value<=0){
		ServletContext sc=getServletContext();
		RequestDispatcher rd=sc.getRequestDispatcher("/index.html");
		rd.include(request, response);
		out.println("<center><h2><font color='red'> cureency always getter than zero. </font></h2></center>");
		return;
		}
	
	if("dollar".equals(cureency)){
		result=d1*dollar;
		d2=d2.format(result);
		out.println("<center><h2> Indian currency is:: "+d1+"</h2></center>");
		out.println("<center><h2> United States currency is:: "+d2+"</h2></center>");
		}
	else if("pound".equals(cureency)){
		result=d1*pound;
		d2=d2.format(result);
		out.println("<center><h2> Indian currency is:: "+d1+"</h2></center>");
		out.println("<center><h2> United Kingdom currency is:: "+d2+"</h2></center>");
		}
	else if("yen".equals(cureency)){
		result=d1*yen;
		d2=d2.format(result);
		out.println("<center><h2> Indian currency is:: "+d1+"</h2></center>");
		out.println("<center><h2> Japan currency is:: "+d2+"</h2></center>");
		}
	else{
		out.println("chose value");
		}
	}
}
	







import java.util.Scanner;

public class StringSwitchExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a color (Red, Blue, Green): ");
        String color = scanner.nextLine();

        switch (color) {
            case "Red":
                System.out.println("Color is Red");
                break;
            case "Blue":
                System.out.println("Color is Blue");
                break;
            case "Green":
                System.out.println("Color is Green");
                break;
            default:
                System.out.println("Unknown color");
        }

        scanner.close();
    }
}



