const LENGTH = 48;
const WIDTH = 24;
const DIAMETER = 6;

const RADIUS = DIAMETER/2;

const SA_BOARD = LENGTH * WIDTH;
const AREA_HOLE = Math.PI * Math.pow(RADIUS, 2);
let SA_CORNHOLE_BOARD = SA_BOARD - AREA_HOLE;
SA_CORNHOLE_BOARD = SA_CORNHOLE_BOARD.toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nThe surface area of a standard Cornhole board is " + SA_CORNHOLE_BOARD + " square inch(es).");
