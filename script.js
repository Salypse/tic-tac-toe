function newGameDisplay() {
    const gridContainer = document.querySelector("#game-container")
    const currentPlayerText = document.querySelector(".current-player")
    const resetGameButton = document.querySelector(".reset")

    /* Player 1 is 0, Player2 is 1*/
    let currentPlayer = Math.round(Math.random(1))

    let player1 = newPlayer()
    let player2 = newPlayer()
    currentPlayerText.textContent = setDefaultText()

    let newGrid = function() {
        gridContainer.innerHTML = ""
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
        if (currentPlayer === 0 && !item.textContent) {
            item.textContent = "X"
            item.style.color = "#2a9d8f";
            /*Switch to player2 turn */
            currentPlayerText.textContent = `${player2.name}'s Turn`
            currentPlayer = 1;
        }
        else if (currentPlayer === 1 && !item.textContent) {
            item.textContent = "O"
            item.style.color = "#ecd717";
            /*Switch to player1 turn */
            currentPlayerText.textContent = `${player1.name}'s Turn`
            currentPlayer = 0;
        }
    }

    function setDefaultText() {
        if (currentPlayer === 0) {
            return `${player1.name}'s Turn`
        } else if (currentPlayer === 1) {
            return `${player2.name}'s Turn`
        }
    }

    resetGameButton.addEventListener("click", () => {
        currentGame = newGrid()

        player1 = newPlayer()
        player2 = newPlayer()

        currentPlayerText.textContent = setDefaultText()
    })

    let currentGame = newGrid()

    return {newGrid}
}

function gameController() {
    
}

function newPlayer() {
    let name = prompt("Player Name: ");
    return{name}
}


newGameDisplay()