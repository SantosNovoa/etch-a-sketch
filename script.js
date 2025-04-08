const screen = document.querySelector(".screen");
const cell = document.querySelector("cell");






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


      const cells = Array.from(document.getElementsByClassName('cell'));
      let isDrawing = false; 
      window.onmouseup = () => { isDrawing = false; }
      cells.forEach(cell => {
          cell.onmouseover = () => { if(isDrawing) cell.style.backgroundColor="black"; }
          cell.onmousedown = () => { cell.style.backgroundColor="black"; isDrawing = true; }                  
      });
    }

    
    screen.appendChild(row);
  }
}

// Create a 16x16 table
createGrid(50);
