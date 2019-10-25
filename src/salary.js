const readlineSync = require("readline-sync");

const four01kContribution = 0.93;
const federalIncome = 0.157;
const stateIncome = 0.0447;
const socialSecurity = 0.062;
const medicare = 0.0145;

const annualSalary = parseFloat(readlineSync.question("\nAnnual salary: "));

const salaryAfter401k = parseFloat(annualSalary * four01kContribution);
const annualSalaryAfterDeductions = parseFloat(salaryAfter401k - (salaryAfter401k * (federalIncome + stateIncome + socialSecurity + medicare)));
let bimontlySalary = parseFloat(annualSalaryAfterDeductions/24);
bimontlySalary = bimontlySalary.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });



console.log("\nYour take-home pay each check will be $" + bimontlySalary + ".");
