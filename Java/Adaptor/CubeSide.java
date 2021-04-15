package Java.Adaptor;

public class CubeSide implements Square{
  int side;

  @Override
  public void setSideLen(int sideLen) {
    this.side = sideLen;
    
    
  }

  @Override
  public int area() {
    return this.side*this.side;
  }
  
}
