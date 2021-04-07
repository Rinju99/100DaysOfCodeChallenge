package Java.Factory;

// factory to create an object..
public class Factory {

  public Polygon getPolyogn(int sides){

    if(sides == 3){
      return new Triangle();
    }

    if(sides == 4){
      return new Rectangle();
    }

    if(sides == 5){
      return new Pentagon();
    }
    return null;


  }
  
}
