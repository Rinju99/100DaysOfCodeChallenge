package Java;
//Working with HashMap in Java...
import java.util.HashMap;

public class HashMaps{
  public static void main(String[] args) {
  
    HashMap<String,String> aHashMap = new HashMap<String,String>();

    //inserting values in hashmap...
    aHashMap.put("rob123@gmail.com", "rob123");
    aHashMap.put("joe54@gmail.com", "joe54");
    aHashMap.put("ashley99@gmail.com", "ashley99");

    //remove  and replace the key vlaue par
    aHashMap.remove("ashley99@gmail.com");
    aHashMap.replace("rob123@gmail.com", "rob321");

    //print out keys and values in HashMap..
    System.out.println(aHashMap.keySet());
    System.out.println(aHashMap.values());

    //Validating existing values in HashMap..
    System.out.println(aHashMap.containsKey("joe54@gmail.com"));
    System.out.println(aHashMap.containsValue("123"));

  }
}