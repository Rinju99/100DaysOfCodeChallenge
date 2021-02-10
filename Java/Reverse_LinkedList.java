class Solution {
  public ListNode reverseList(ListNode curr_node) {
      ListNode prev_node = null;
      while(curr_node!=null){
          ListNode temp = curr_node.next;
          curr_node.next = prev_node;
          prev_node = curr_node;
          curr_node = temp;
      }
      return prev_node; 
  }
}