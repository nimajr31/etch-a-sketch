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

// Create event listeners for our buttons
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clear);


// Make function calls
createGrid(16);