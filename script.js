const screen = document.querySelector(".screen");
const inputElement = document.getElementById("quantity");
const inputValue = inputElement.value;
const form = document.getElementById("my_form");
form.addEventListener("submit", submitForm);
const reset = document.querySelector(".reset");
reset.addEventListener("click", clearGrid);
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", toggleGridLines);




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
  const cells = Array.from(document.getElementsByClassName('cell'));
      let isDrawing = false; 
      window.onmouseup = () => { isDrawing = false; }
      cells.forEach(cell => {
          cell.onmouseover = () => { if(isDrawing) cell.style.backgroundColor="black"; }
          cell.onmousedown = () => { cell.style.backgroundColor="black"; isDrawing = true; }                  
      });
}

function toggleGridLines() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.toggle("no-border");
  });
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.style.removeProperty("background-color");
  })
}

function submitForm(e) {
  e.preventDefault(); // stop page from reloading
  screen.innerHTML = "";
  const size = Number(inputElement.value);
  createGrid(size);
}

createGrid(16)
