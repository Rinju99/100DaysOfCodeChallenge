//Clone Regular Expressions...
const cloneRegExp = (expr) => new RegExp(expr.source, expr.flags);
const regExp = /lorem ipsum/gi;
const regExp2 = cloneRegExp(regExp); // /lorem ipsum/gi
