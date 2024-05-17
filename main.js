import inquirer from "inquirer";
//step 01
const answer = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numberTwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "opertor",
        message: "Enter your opertor",
        choices: ["+", "-", "*", "/"] }
]);
//step 02
const { numberOne, numberTwo, opertor } = answer;
let result;
switch (opertor) {
    case "+":
        result = numberOne + numberTwo;
        break;
    case "-":
        result = numberOne - numberTwo;
        break;
    case "*":
        result = numberOne * numberOne;
        break;
    case "/":
        result = numberOne / numberTwo;
    default:
        console.log("Invalid opertor");
}
console.log('${nunberOne} ${opertor} ${nunmberTwo}  =[${result}');
console.log(6 + 5);
