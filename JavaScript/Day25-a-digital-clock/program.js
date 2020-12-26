function setup() {
  angleMode(DEGREES);
  img = loadImage("assets/image2.jpg");
  createCanvas(500, 500);
}
function draw() {
  background(img);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(8);
  stroke(7, 134, 92);
  stroke(255, 100, 150);
  noFill();

  stroke(204, 122, 0);
  let sec_angle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, sec_angle);

  stroke(255, 100, 150);
  let min_angle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, min_angle);

  stroke(20, 131, 226);
  let hr_angle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hr_angle);

  push();
  rotate(min_angle);
  stroke(255, 100, 150);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hr_angle);
  stroke(20, 131, 226);
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(sec_angle);
  stroke(204, 122, 0);
  line(-10, 0, 100, 0);
  pop();

  stroke(255);
  point(0, 0);
}
