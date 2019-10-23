const readlineSync = require("readline-sync");

const converstionFactorInMmSquared = 645.16;
let width = readlineSync.question("Width: ");
let length = readlineSync.question("Length: ");
let areaInches = (width * length);
let areaMillimeters = areaInches * converstionFactorInMmSquared;
areaMillimeters = Number(area.Millimeters);
areaMillimeters = areaMillimeters.toFixed(2);
areaMillimeters = areaMillimeteres.toLocaleString();

console.log("A(n) " + width + "-by-" + length + "-inch sheet of paper has an area of " + areaMillimeters + " square millimeter(s).");

//commas still don't wor
