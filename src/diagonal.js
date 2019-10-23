const readlineSync = require("readline-sync");

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const diagonal = Math.sqrt(width * width + length * length);
let diagonalFormatted = diagonal.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has a diagonal of " + diagonalFormatted + " inch(es).");
