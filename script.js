const form = document.querySelector('form');
const inputWrapper = document.querySelector('.input-wrapper');
const input = document.querySelector('.input');
const submitNameBtn = document.querySelector('.submit-btn');
const resetNameBtn = document.querySelector('.reset-name-btn');
const startGameBtn = document.querySelector('.start-game-btn');

startGameBtn.textContent = "Start Game";
startGameBtn.classList.toggle('disabled-btn', startGameBtn.disabled);

startGameBtn.addEventListener('click', () => {
    startGameBtn.textContent = "Game Started!";
    // updateButtonState(startGameBtn, true)
})

const updateButtonState = (button, isDisabled) => {
    button.disabled = isDisabled;
    button.classList.toggle('disabled-btn', isDisabled);
};

resetNameBtn.disabled = true;
resetNameBtn.classList.toggle('disabled-btn', resetNameBtn.disabled);

form.addEventListener('submit', e => {
    e.preventDefault();

    input.disabled = true;
    inputWrapper.classList.add('input-locked');

    updateButtonState(submitNameBtn, true);
    updateButtonState(resetNameBtn, false);

});

resetNameBtn.addEventListener('click', () => {
    console.clear();
    input.value = '';
    input.disabled = false;
    inputWrapper.classList.remove('input-locked');

    updateButtonState(submitNameBtn, false);
    updateButtonState(resetNameBtn, true);

    input.focus();
});

const resetGameBtn = document.querySelector('.reset-game-btn')
resetGameBtn.disabled = true;
resetGameBtn.classList.toggle('disabled-btn', resetGameBtn.disabled);

function createGameBoard () {
    const board = ["", "", "", "", "", "", "", "", ""];

    const makeMove = (index, operator) => {
        if (board[index] === "") {
            board[index] = operator;
         }
    };

    const getBoard = () => {
        const newBoard = board.map(cell => cell);
        return newBoard;
    };

    const clearBoard = () => {
        board.fill("");
    };

    return {
        makeMove,
        getBoard,
        clearBoard
    }
}

const game = createGameBoard();

function createPlayerName (name, operator) {
    return { name, operator };
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkCombinations (board) {
    return winningCombinations.some(e => {
        return board[e[0]] !== "" && board[e[0]] === board[e[1]] && board[e[1]] === board[e[2]];
    });
}

function createGameController (firstPlayer, secondPlayer) {
    const board = createGameBoard();

    let currentPlayer = firstPlayer;

    const switchPlayer = () => {
        currentPlayer = currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
    };

    const playRound = index => {
        board.makeMove(index, currentPlayer.operator);

        if (checkCombinations(board.getBoard())) {
            console.log(`${currentPlayer} wins!`);
            return;
        };
        switchPlayer();
    };

    const getCurrentPlayer = () => currentPlayer;

    return {
        playRound,
        getBoard: board.getBoard,
        getCurrentPlayer
    };
};

// const p1 = createPlayerName('any', 'o');
// const p2 = createPlayerName('bot', 'x');
// const game2 = createGameController(p1, p2);

// game2.playRound(3);
// console.log(game2.getBoard());
// console.log(game2.getCurrentPlayer())
