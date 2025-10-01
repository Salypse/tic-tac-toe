function newGameDisplay() {
    const gridContainer = document.querySelector("#game-container")
    const currentPlayerText = document.querySelector(".current-player")
    const gameWinnerText = document.querySelector(".winner")
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
        let gridItems = document.querySelectorAll(".grid-item")

        if (currentPlayer === 0 && !item.textContent) {
            item.textContent = "X"
            item.style.color = "#2a9d8f";
    
            if (gameController.checkForWin(gridItems)) {
                currentPlayerText.textContent = ""
                gameWinnerText.textContent = `${player1.name} Wins!`
            } else {
                /*Switch to player2 turn */
                currentPlayerText.textContent = `${player2.name}'s Turn`
                currentPlayer = 1;
            }
        }
        else if (currentPlayer === 1 && !item.textContent) {
            item.textContent = "O"
            item.style.color = "#ecd717";

            if (gameController.checkForWin(gridItems)) {
                currentPlayerText.textContent = ""
                gameWinnerText.textContent = `${player2.name} Wins!`
            } else {
                /*Switch to player1 turn */
                currentPlayerText.textContent = `${player1.name}'s Turn`
                currentPlayer = 0;
            }
        }
    }

    function setDefaultText() {
        gameWinnerText.textContent = ""
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
    const gameController = newGameController()

    return {newGrid}
}

function newGameController() {
    let checkForWin = function(items) {
        const winCombinations = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [7,5,3]
        ];

        for (let i = 0; i < winCombinations.length; i++) {
            let item1 = items[winCombinations[i][0] - 1].textContent;
            let item2 = items[winCombinations[i][1] - 1].textContent;
            let item3 = items[winCombinations[i][2] - 1].textContent;

            if (item1 && item2 && item3) {
                if (item1 === item2 && item2 === item3) {
                    return true
                }
            }
        }
    }

    return {checkForWin};
}

function newPlayer() {
    let name = prompt("Player Name: ");
    return{name}
}


newGameDisplay()