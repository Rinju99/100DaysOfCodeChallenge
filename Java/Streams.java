package Java;
import java.util.stream.Stream;

public class Streams {
  public static void main(String[] args) {
    // Working with STREAMS in Java
    Stream.of("Black", "Green", "orange", "Pink", "purple", "blue")
      .map(String::toLowerCase)
      .sorted()
      .filter(x -> x.endsWith("e"))
			.forEach(System.out::println);
  }
}
//Output: 
//blue orange purple
