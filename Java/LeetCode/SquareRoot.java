public class SquareRoot {
  public static void main(String[] args) {
    System.out.println(mySqrt(40));
    
  }
  public static int mySqrt(int x) {
    long r = x;
    while (r * r > x){
      r = (r + x/r) / 2;
      System.out.println(r);
    }
    return (int) r;
  }
}



/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the 
result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/
