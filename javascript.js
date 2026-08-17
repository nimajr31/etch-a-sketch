function changeColor(box) {
    box.classList.add("hover-box");
}
function clear() {
    const boxes = document.querySelectorAll(".hover-box");
    boxes.forEach(box => box.classList.remove("hover-box"))
}
function createGrid(size) {
    const container = document.querySelector(".grid-container");
    // Use a nested for-loop to create a 16x16 grid
    for (let i = 0; i < size; i++) {

        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        container.appendChild(rowContainer);

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("empty-box");
            box.addEventListener("mouseover", () => changeColor(box));
            rowContainer.appendChild(box);
        }
    }
}
function removeGrid() {
    const container = document.querySelector(".grid-container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function newGridPrompt() {
    let num = prompt("Enter the number of of rows you'd like!\nYour number must be between 1 and 100.", 16);
    // Check for cancel button
    if (num === null) {
        return;
    }
    // Check for number being in range
    if (num > 100 || num < 1) {
        newGridPrompt();
        return;
    }
    clear();
    removeGrid();
    createGrid(num);
}


// Create event listeners for our buttons
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clear);
clearButton.addEventListener("mouseover", (e) => clearButton.classList.add("hover-button"));
clearButton.addEventListener("mouseout", (e) => clearButton.classList.remove("hover-button"));

const newGridButton = document.querySelector(".new-grid-button");
newGridButton.addEventListener("click", newGridPrompt);
newGridButton.addEventListener("mouseover", (e) => newGridButton.classList.add("hover-button"));
newGridButton.addEventListener("mouseout", (e) => newGridButton.classList.remove("hover-button"));


// Make function calls
createGrid(16);

