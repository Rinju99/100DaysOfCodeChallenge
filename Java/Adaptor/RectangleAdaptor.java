package Java.Adaptor;

public class RectangleAdaptor implements Square{

  Rectangle rectangle;

  public RectangleAdaptor(Rectangle r){
    this.rectangle =r;
  }

  @Override
  public int sideLength() {
    return rectangle.len();
    
   
  }

  @Override
  public int area() {
   return rectangle.area();
  }
  
}
