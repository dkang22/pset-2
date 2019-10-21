const readlineSync = require("readline-sync");

const width = readlineSync.question("Width: ");
const length = readlineSync.question("Length: ");
const areaInches = (width * length);
const areaMillimeters = areaInches * 25.4 * 25.4;


console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).");

//add: round the result to two decimals, format it with separating commas
