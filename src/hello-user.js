const readlineSync = require("readline-sync");

const userName = readlineSync.question("Hi! What's your name? ");

console.log("Hello, " + userName + "!");
