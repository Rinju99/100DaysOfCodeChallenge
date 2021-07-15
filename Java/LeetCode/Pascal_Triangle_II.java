import java.util.*;

public class Pascal_Triangle_II {
  public static void main(String[] args){
    System.out.println(getRow(4));
  }

  public static List<Integer> getRow(int rowIndex){
    List<Integer> list = new ArrayList<>();
      list.add(1);

      int num = 1;
      for(int i = 1; i <= rowIndex; i++)
      {
         num = num*(rowIndex + 1 - i) / i;
         list.add(num);
      }
      return list;
    
  }
}



//Alternate version-
// Integer[] arr = new Integer[rowIndex+1];
    // Arrays.fill(arr,0);
    // arr[0]=1;
    // for(int i=1;i<=rowIndex;i++){
    //     for(int j=i;j>0;j--){
    //       arr[j]+= arr[j-1];
    //     }
    // }
    // return Arrays.asList(arr);