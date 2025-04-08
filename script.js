const screen = document.querySelector(".screen");

console.log(screen);

function createGrid(x) {
  const newWidth = 660 / x;
  const newHeight = 660 / x;
  for (let i = 0; i < x; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.style.height = `${newHeight}px`;
    for (let j = 0; j < x; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = `${newWidth}px`;
      cell.style.height = `${newHeight}px`;
      row.appendChild(cell);
    }
    screen.appendChild(row);
  }
}

// Example: Create a 5x5 table
createGrid(16);
