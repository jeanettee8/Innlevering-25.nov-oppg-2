const calculator = (num1, num2, operator) => {
  let total = 0;
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
  }
};

console.log(calculator(5, 10, "-"));
console.log(calculator(10, 4, "*"));
console.log(calculator(8, 4, "/"));
console.log(calculator(12, 7, "+"));
