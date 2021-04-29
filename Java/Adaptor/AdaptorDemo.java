package Java.Adaptor;

public class AdaptorDemo {
  public static void main(String[] args) {

    Square sq = new CubeSide();
    Rectangle rc = new Books();
    RectangleAdaptor adaptor = new RectangleAdaptor(rc);

    sq.setSideLen(5);
    System.out.println(sq.area());  // 25

    // using square interface for rectangle object
    adaptor.setSideLen(5);
    System.out.println(adaptor.area());  //25
  }
}