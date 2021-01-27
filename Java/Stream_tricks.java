package Java;
import java.util.Arrays;
import java.util.List;

public class Stream_tricks {
  public static void main(String[] args) {
    List<Integer> arr = Arrays.asList(1,2,3,4,5,6);
    
    //sum of even number in the array
    int a = arr.stream().filter(x->x%2==0).reduce(0,(sum,i)-> sum+i);
    System.out.println(a);
    //output: 12
    
    //print out the squares of elements in an array
    arr.stream().map(x->x*x).forEach(num-> System.out.println(num));
    //output: 1,4,9,16,25,36
  }
}
