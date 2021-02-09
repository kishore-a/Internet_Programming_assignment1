var ans;
var Operator;
var Operand2=0;
var Operand1=0;

function calc(val) {
  document.getElementById("result").value += val;
  if ((val === "+") || (val === "-") || (val === "*") || (val === "/")) {
    Operator = val;
  }
  ans = document.getElementById("result").value.split(Operator);
  Operand1 = ans[0];
  Operand2 = ans[1];
  
}
function solve() {
  if (Operator === "+") {
    ans = Number(Operand1) + Number(Operand2);
  } else if (Operator === "-") {
    ans = Number(Operand1) - Number(Operand2);
  } else if (Operator === "*") {
    ans = Number(Operand1) * Number(Operand2);
  } else {
    ans = Number(Operand1) / Number(Operand2);
  }
  document.getElementById("result").value = ans;
}
function clr() {
  document.getElementById("result").value = "";
  Operand1 = 0;
  Operand2 = 0;
  ans = 0;
  Operator = "";
}