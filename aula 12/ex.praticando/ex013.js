var n1 = 10;
var n2 = 5;
var Operação = "*";

switch (Operação) {
  case "+":
    console.log(`${n1 + n2}`);
    break;
  case "-":
    console.log(`${n1 - n2}`);
    break;
  case "*":
    console.log(`${n1 * n2}`);
    break;
  case "/":
    console.log(`${n1 / n2}`);
    break;

  default:
    console.log("Operação invalida");
    break
}

