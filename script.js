const screen = document.querySelector(".screen");
const gridSizeInput = document.getElementById("quantity");
const form = document.getElementById("my_form");
form.addEventListener("submit", submitForm);
const reset = document.querySelector(".reset");
reset.addEventListener("click", clearGrid);
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", toggleGridLines);



document.querySelector(".rainbow").addEventListener("click", () => {
  currentColorMode = "rainbow";
});

document.getElementById("colorPicker").addEventListener("input", () => {
  currentColorMode = "custom";
});

//default color 
let currentColorMode = "black";


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

  function getCurrentColor() {
    if (currentColorMode === "rainbow") return getRandomColor();
    if (currentColorMode === "custom") return document.getElementById("colorPicker").value;
    return "black";
  }

  // Allows the user to click and hold to color on the grid
  const cells = Array.from(document.getElementsByClassName('cell'));
      let isDrawing = false; 
      window.onmouseup = () => { isDrawing = false; }
      cells.forEach(cell => {
          cell.onmouseover = () => { if(isDrawing) cell.style.backgroundColor = getCurrentColor(); }
          cell.onmousedown = (e) => { cell.style.backgroundColor= getCurrentColor(); isDrawing = true 
            e.preventDefault(); }                  
      });
}

function toggleGridLines() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.toggle("no-border");
  });
}


// rainbow mode generator
const getRandomColor = () => {
  color = `hsl(${Math.random() * 360}, 100%, 50%)`
  return color;
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
  const size = Number(gridSizeInput.value);
  createGrid(size);
}

createGrid(16)
