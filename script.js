function gameDisplay() {
    const gridContainer = document.querySelector("#game-container")

    let newGrid = function() {
        for (let i = 1; i <= 9; i++) {
            let newGridItem = document.createElement("button");
            newGridItem.textContent = ""
            newGridItem.classList.add(".grid-item");
            newGridItem.id = i;
            gridContainer.append(newGridItem)
        }
    }

    return {newGrid}
}



test = gameDisplay()
test.newGrid()