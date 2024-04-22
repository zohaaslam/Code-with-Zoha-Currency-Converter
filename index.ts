#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\n \t\t Code with Zoha - `Currency Converter`"));
console.log("=".repeat(100));
let exchange_rate: any ={
    "USD": 1, //base currency
    "DIRHAM":0.27,
    "INDR":83.66,        
    "BANGLADESH":109.81,   
    "EURO":0.94,
    "YEN":154.66,
    "CAD":1.38,
    "AUD":1.56,
    "PKR":278.12,          
    "AFN":72.21,
    "ALL":95.00,
    "AMD":395.24,
    "AOA":832.82,
    "ARS":868.75,
    "AWG":1.80,
    "AZN":1.70
};
let userAnswer = await inquirer.prompt(
    [
        {
            name: "from_currency",
            message:"Select the currency to convert from:",
            type:"list",
            choices: ["USD","DIRHAM","INDR","BANGLADESH","EURO","YEN","CAD","AUD","PKR" , "AFN" , "ALL" ,"AMD" ,"AOA" ,"ARS" , "AWG" , "AZN"]
        },
        {
            name:"to_currency",
            message:"Select the currency to convert into:",
            type:"list",
            choices:["USD","DIRHAM","INDR","BANGLADESH","EURO","YEN","CAD","AUD","PKR"]
        },
        {
            name:"amount",
            message:"Enter the amount to convert",
            type:"input"
        }
]
);
let from_amount = exchange_rate[userAnswer.from_currency];
let to_amount = exchange_rate[userAnswer.to_currency];
let amount = userAnswer.amount



let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount
console.log("=".repeat(100))

console.log(chalk.bold.yellow`converted_amount = ${converted_amount.toFixed(2)}`);