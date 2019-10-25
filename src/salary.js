const readlineSync = require("readline-sync");

const four01kContribution = 0.93;
const federalIncome = 0.157;
const stateIncome = 0.0447;
const socialSecurity = 0.062;
const medicare = 0.0145;

const annualSalary = parseFloat(readlineSync.question("\nAnnual salary: "));

const salaryAfter401k= parseFloat(annualSalary * four01kContribution);
let annualSalaryAfterDeductions = salaryAfter401k * (federalIncome + stateIncome + socialSecurity + medicare)
annualSalaryAfterDeductions = annualSalaryAfterDeductions.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

const bimontlySalary = annualSalaryAfterDeductions/24;

console.log("\nYour take-home pay each check will be $" + bimontlySalary + ".");


//find out how to actually format the different taxes
