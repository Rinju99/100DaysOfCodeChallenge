public class Reverse_LinkedList {
    public ListNode reverseList(ListNode head) {
        ListNode prev=null;
        while(head!=null){
            ListNode nxt = head.next;
            head.next = prev_node;
            prev = head;
            head = nxt;
        }
        return prev; 
    }
}