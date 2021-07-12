class Solution {
  public static void main(String[] args) {
    int[] arr = new int[]{-2,1,-3,4,-1,2,1,-5,4};
    System.out.println(maxSubArray(arr));
  }
  public static int maxSubArray(int[] nums) {
      int res = nums[0];
      for(int i = 1;i< nums.length;i++){
          nums[i] = nums[i-1] > 0 ? nums[i] + nums[i-1] : nums[i];
          System.out.println(res);
          res = Math.max(res,nums[i]);
      }
      return res;
  }
}