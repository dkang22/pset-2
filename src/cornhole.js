const length = 48;
const width = 24;
const diameter = 6;
const radius = diameter/2;

const saBoard = length * width;
const areaHole = Math.PI * Math.pow(radius, 2);
let saCornhole = saBoard - areaHole;
saCornhole = saCornhole.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nThe surface area of a standard Cornhole board is " + saCornhole + " square inch(es).");
