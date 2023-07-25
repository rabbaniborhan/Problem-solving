function calculation(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
   else if (operator === "-") {
    return num1 - num2;
  }
   else if (operator === "*") {
    return num1 * num2;
  } 
  else if (operator === "/") {
    if (num2 !== 0) {
      return num1 / num2;
    }
     else {
      return "Division by zero is not allowed.";
    }
  }
   else {
    return " Invalid operator.";
  }
}

const number1 = 5;
const number2 = 3;
const operator = "*";
const result = calculation(number1, number2, operator);
console.log(result);
