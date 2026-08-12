const container = document.querySelector(".grid-container");
// Use a nested for-loop to create a 16x16 grid
for (let i = 0; i < 16; i++) {

    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    container.appendChild(rowContainer);

    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("empty-grid");
        rowContainer.appendChild(box);
    }
}