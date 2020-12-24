// Most of this is by Daniel Shiffman
// http://codingtra.in
// I have added my own words and also changed the position and size of the graph.
// I hope to make more improvements in this cool animation.

var font;
var vehicles = [];

var texts = ["100DaysOfCode", "Day-23!", "Thanks!"];
var nextT = 0;
var maxChangeForce = 20;

var instructions = [];
var insText = "Click to change the Text";

function preload() {
  font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(1410, 780);
  background(139);

  var bounds = font.textBounds(texts[nextT], 100, 100, 130);
  var posx = width / 2 - bounds.w / 2;
  var posy = height / 2 + bounds.h / 2;

  var points = font.textToPoints(texts[nextT], posx, posy, 150, {
    sampleFactor: 0.1,
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }

  var boundsIns = font.textBounds(insText, 0, 10, 30);
  var posxIns = width / 2 - boundsIns.w / 2;
  var posyIns = height / 6 + boundsIns.h / 2;

  var insAr = split(insText, " ");

  for (var i = 0; i < insAr.length; i++) {
    var bounds2 = font.textBounds(insAr[i], 10, 30, 30);
    var posx2 = posxIns;
    var posy2 = posyIns;

    posxIns += bounds2.w + 10;

    var points2 = font.textToPoints(insAr[i], posx2, posy2, 30, {
      sampleFactor: 0.5,
    });

    for (var j = 0; j < points2.length; j++) {
      var pt = points2[j];
      var v = new Vehicle(pt.x, pt.y, 3);
      instructions.push(v);
    }
  }
}

function draw() {
  background(51);

  for (var i = 0; i < instructions.length; i++) {
    var v = instructions[i];
    v.behaviors();
    v.update();
    v.show();
  }

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mouseClicked() {
  nextT++;
  if (nextT > texts.length - 1) {
    nextT = 0;
  }

  var bounds = font.textBounds(texts[nextT], 0, 0, 192);
  var posx = width / 2 - bounds.w / 2;
  var posy = height / 2 + bounds.h / 2;

  var points = font.textToPoints(texts[nextT], posx, posy, 192, {
    sampleFactor: 0.1,
  });

  if (points.length < vehicles.length) {
    var toSplice = vehicles.length - points.length;
    vehicles.splice(points.length - 1, toSplice);

    for (var i = 0; i < points.length; i++) {
      vehicles[i].target.x = points[i].x;
      vehicles[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      vehicles[i].applyForce(force);
    }
  } else if (points.length > vehicles.length) {
    for (var i = vehicles.length; i < points.length; i++) {
      var v = vehicles[i - vehicles.length].clone();

      vehicles.push(v);
    }

    for (var i = 0; i < points.length; i++) {
      vehicles[i].target.x = points[i].x;
      vehicles[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      vehicles[i].applyForce(force);
    }
  } else {
    for (var i = 0; i < points.length; i++) {
      vehicles[i].target.x = points[i].x;
      vehicles[i].target.y = points[i].y;

      var force = p5.Vector.random2D();
      force.mult(random(maxChangeForce));
      vehicles[i].applyForce(force);
    }
  }
}
