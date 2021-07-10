//Finding the nth fibonacci number with different techniques...

public class Fib_Dynamic_Solution {
  public static void main(String[] args) {
    System.out.println(fib2(20));
  }
  //Recursive approach but not efficient - O(2^n)
  public static int fib1(int n){
    if(n<2) return n;
    return fib(n-1)+fib(n-2);
  }

//Momoization technique for faster approach - O(n).
  public static int fib2(int n){
    if(n==0) return n;
    int[] cache = new int[n+1];
    cache[1] =1;
    for(int i=2;i<=n;i++){
      cache[i] = cache[i-1] +cache[i-2];
    }
    return cache[n];
  }


  //this solution has time complexity of O(n)- fasted so far
  public static int fib3(int n){
    if(n<2) return n;
    int n1=0,n2=1;
    for(int i=2;i<n;i++){
      int n0=n1+n2;
      n1 =n2;
      n2=n0;
    }
    return n1+n2;
  }
}
