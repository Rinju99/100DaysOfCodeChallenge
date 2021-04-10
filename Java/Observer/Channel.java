package Java.Observer;

import java.util.ArrayList;
import java.util.List;

public class Channel {

  List<Subscriber> subscibers = new ArrayList<Subscriber>();


  public void subscribe(Subscriber sub){
    subscibers.add(sub);
  }

  public void unsubscribe(Subscriber sub){
    subscibers.remove(sub);
  }

  public void notifySubscribers(){

    for(Subscriber s: subscibers){
      s.update();
    }
  }

  public void upload(){
    notifySubscribers();
  }
}
