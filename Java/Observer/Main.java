package Java.Observer;

public class Main {
  public static void main(String[] args) {

    Channel channel_1 = new Channel();
    //Create subscribers..
    Subscriber s1 = new Subscriber("Sam");
    Subscriber s2 = new Subscriber("Harry");
    Subscriber s3 = new Subscriber("Tyshawn");
    
    // Add subscribers to the channel
    channel_1.subscribe(s1);
    channel_1.subscribe(s2);
    channel_1.subscribe(s3);

    channel_1.upload();  //uploading a video-triggers an update

    /* Output: 
        Sam has been notified! 
        Harry has been notified! 
        Tyshawn has been notified! 
    */
    
  }
}
