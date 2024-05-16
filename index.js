import inquirer from 'inquirer';
const currency = {
    USD: 1, //BASE currency
    EUR: 0.91,
    GBP: 9.76,
    INR: 74.57,
    PKR: 280
};
let uer_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter To Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number'
    }
]);
let fromAmount = currency[uer_answer.from];
//currency['USD']
let toAmount = currency[uer_answer.to];
let amount = uer_answer.amount;
let baseAmount = amount / fromAmount; //USD BASE.AB
// 15000 /280 any currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
