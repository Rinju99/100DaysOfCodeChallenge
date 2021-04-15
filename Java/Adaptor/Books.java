package Java.Adaptor;

public class Books implements Rectangle{

  int length;
  int width;



  @Override
  public void setLen(int len) {
    this.length = len;
    
    
  }

  @Override
  public void setWidth(int wid) {
    this.width = wid;
    
  }

  @Override
  public int area() {
    return this.length*this.width;
  }
  
}
