const readlineSync = require("readline-sync");

const hourlyWage = parseFloat(readlineSync.question("\nHourly Wage: "));

let hoursTotal = 0;
hoursTotal += parseFloat(readlineSync.question("\nMonday: "));
hoursTotal += parseFloat(readlineSync.question("Tuesday: "));
hoursTotal += parseFloat(readlineSync.question("Wednesday: "));
hoursTotal += parseFloat(readlineSync.question("Thursday: "));
hoursTotal += parseFloat(readlineSync.question("Friday: "));
hoursTotal += parseFloat(readlineSync.question("Saturday: "));
hoursTotal += parseFloat(readlineSync.question("Sunday: "));

let weeklyEarnings = hourlyWage * hoursTotal;
weeklyEarnings = weeklyEarnings.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYou'll make $" + weeklyEarnings + " this week.")
