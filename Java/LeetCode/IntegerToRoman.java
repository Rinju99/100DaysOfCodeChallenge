//Write a function to Convert an Interger to Roman number...

public class IntegerToRoman {
  public static String intToRoman(int N) {
    int[] val = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    String[] roman = {"M", "CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
    String result ="";
    for(int i=0;N>0;i++){
      while(N>=val[i]){
        result+=roman[i];
        N-=val[i];
      }
    }
    return result;
  }
  public static void main(String[] args) {
    System.out.println(intToRoman(1994));
  }
}
