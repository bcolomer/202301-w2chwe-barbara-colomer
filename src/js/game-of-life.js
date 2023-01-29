const gameGrid = [
  [false, false, false],
  [true, true, true],
  [false, false, false],
];
contAlive = 0;
console.table(gameGrid);

gameGrid.forEach((row) => {
  row.forEach((cell) => {
    if (cell) {
      console.log("the cell  alive is " + cell);
    } else console.log("the cell dead is " + cell);
  });
});

if (cell && contAlive < 2) {
  cell = false;
}
if ((cell && contAlive >= 2) || contAlive >= 3) {
  cell = true;
}
if (cell && contAlive > 3) {
  cell = false;
}
if (cell === false && contAlive >= 3) {
  cell = true;
}
