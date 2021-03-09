const mask = (str, char = "#") =>
  str.slice(str.length - 4).padStart(str.length, char);
mask("123456789"); //#####6789
