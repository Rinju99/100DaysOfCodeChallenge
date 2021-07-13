import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Streams {
  public static void main(String[] args) {
    // Working with STREAMS in Java
    
    Stream.of("Black", "Green", "orange", "Pink", "purple", "blue")
      .map(String::toLowerCase)
      .sorted()
      .filter(x -> x.endsWith("e"))
			.forEach(System.out::println);

// ----------------------------------------------------------------------
    List<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

    List<Integer> doubled = list.stream().map(x -> x*x).collect(Collectors.toList());
    System.out.println(doubled);

// ----------------------------------------------------------------------
//
    List<String> colors = List.of("Black", "Green", "orange", "Pink", "purple", "blue"); // Or = Arrays.asList();
    List<String> modifiedColor = colors.stream()
    .map(x -> x.toLowerCase())
    .filter(c -> c.startsWith("p"))
    .collect(Collectors.toList());
    System.out.println(modifiedColor);


// ----------------------------------------------------------------------
//Reduce
    int sum = list.stream().reduce(0,(total,i)->total+i);
    System.out.println(sum);

  }

}
