var i = 0;
var pares = [];
var impares = [];

function esPar(num) {
  return (num % 2 == 0);
}

for (i = 0; i < 50; i++) {
  n = Math.floor(1 + 100 * Math.random())
  if(esPar(n)) {
    pares.push(n)
  else {
    impares.push(n)
  }
}
