function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

  strokeWeight(8);
  stroke(255, 100, 150);
  noFill();
  let sec_angle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, sec_angle);

  stroke(255, 150, 150);
  let min_angle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, min_angle);

  stroke(150, 255, 100);
  let hr_angle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hr_angle);
}
