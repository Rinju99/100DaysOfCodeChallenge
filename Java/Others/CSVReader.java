package Java.Others;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class CSVReader {

	public static void main(String[] args) throws IOException,FileNotFoundException {
		String filePath = "/Users/rinjusherpa/Documents/email.csv";
		String line ="";
		BufferedReader reader = new BufferedReader(new FileReader(filePath));
		
		while((line = reader.readLine()) !=null) {
			String[] values = line.split(",");
			System.out.print("Email: "+values[0]+" id: "+values[1]+ " Name: "+ values[3]+"\n");
			
    }
    reader.close();

	}

}
