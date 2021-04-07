package Java.Singleton;

public class Singleton {
  //Private Constructor
  private Singleton(){}

  // Creating the only instace of  the class.
  private static Singleton instance = new Singleton();

  //This method will return the instance we created
  public static Singleton getInstance(){
    return instance;
  }
}
//Singleton obj = Singleton.getInstance();