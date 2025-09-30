function gameDisplay() {
    const gridContainer = document.querySelector("#game-container")

    let currentPlayer = true

    let newGrid = function() {
        for (let i = 1; i <= 9; i++) {
            let newGridItem = document.createElement("button");
            newGridItem.textContent = ""
            newGridItem.classList.add("grid-item");
            newGridItem.id = i;

            newGridItem.addEventListener("click", function() {
                addSelection(newGridItem)
            })

            gridContainer.append(newGridItem)
        }
    }

    function addSelection(item) {
        if (currentPlayer && !item.textContent) {
            item.textContent = "X"
            item.style.color = "#2a9d8f";
            currentPlayer = false
        }
        else if (!currentPlayer && !item.textContent) {
            item.textContent = "O"
            item.style.color = "#ecd717";
            currentPlayer = true;
        }
    }

    return {newGrid}
}

let test = gameDisplay().newGrid()