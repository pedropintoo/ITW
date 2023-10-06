// function to implement a calculator with a switch statement
function calculator(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
    }
    console.log(calculator(2, 3, "+"));
    console.log(calculator(2, 3, "-"));
    console.log(calculator(2, 3, "*"));
    console.log(calculator(2, 3, "/"));
    console.log(calculator(2, 3, "a"));
    console.log(calculator(2, 3, true));

