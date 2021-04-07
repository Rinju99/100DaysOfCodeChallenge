package Java.Factory;

public class Main {
  public static void main(String[] args) {
    Factory factory = new Factory();

    Polygon triangle = factory.getPolyogn(3);
    Polygon rectangle = factory.getPolyogn(4);
    Polygon pentagon = factory.getPolyogn(5);

    triangle.msg(); // triangle
    rectangle.msg(); // rectangle
    pentagon.msg();  //pentagon
  }
}

