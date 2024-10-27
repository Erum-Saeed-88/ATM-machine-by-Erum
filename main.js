#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 8000; // Dollar
let myPin = 1203;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter the amount"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("sorry! insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("withdraw successfully", amountAns.amount);
            console.log("your remaining balance is", myBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your account balance is", myBalance);
    }
}
else {
    console.log("incorrect pin number");
}
