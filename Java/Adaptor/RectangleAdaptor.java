package Java.Adaptor;

public class RectangleAdaptor implements Square{

  Rectangle rectangle;

  public RectangleAdaptor(Rectangle r){
    this.rectangle =r;
  }

  @Override
  public void setSideLen(int i) {
    rectangle.setLen(i);
    rectangle.setWidth(i);

  }
  @Override
  public int area() {
   return rectangle.area();
  }
}
