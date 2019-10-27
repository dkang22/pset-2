const readlineSync = require("readline-sync");

const hourlyWage = Number(readlineSync.question("\nHourly wage: "));

let hoursTotal = 0;
hoursTotal += Number(readlineSync.question("\nMonday: "));
hoursTotal += Number(readlineSync.question("Tuesday: "));
hoursTotal += Number(readlineSync.question("Wednesday: "));
hoursTotal += Number(readlineSync.question("Thursday: "));
hoursTotal += Number(readlineSync.question("Friday: "));
hoursTotal += Number(readlineSync.question("Saturday: "));
hoursTotal += Number(readlineSync.question("Sunday: "));

let weeklyEarnings = hourlyWage * hoursTotal;
weeklyEarnings = weeklyEarnings.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nYou'll make $" + weeklyEarnings + " this week.")
