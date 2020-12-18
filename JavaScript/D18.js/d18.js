var textfield;
var output;
var submit;

function setup() {
  noCanvas;
  textfield = Select("#input");
  textfield.change(newText);
  output = Select("#output");
  submit = Select("#ouput");
  submit.mousePressed(newText);
}

function newText() {
  var s = textfield.value();
  var r = /\W+@+\W+\.(net|com|org)/;
  createP(r.test(s));
}
