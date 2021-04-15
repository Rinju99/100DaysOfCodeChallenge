package Java.Adaptor;

public class RectangleAdaptor implements Square{

  Rectangle rectangle;

  public RectangleAdaptor(Rectangle r){
    this.rectangle =r;
  }

  @Override
  public void setSideLen(int side) {
    rectangle.setLen(side);
    rectangle.setWidth(side);

  }
  @Override
  public int area() {
   return rectangle.area();
  }
}
