const player1Form = document.querySelector('.player1-form');

const player1InputWrapper = document.querySelector('.player1-input-wrapper');
const player1Input = document.getElementById('player1Input');
const player1SubmitNameBtn = document.getElementById('player1SubmitBtn');
const player1ResetNameBtn = document.getElementById('player1ResetNameBtn');
player1ResetNameBtn.disabled = true;
player1ResetNameBtn.classList.toggle('disabled-btn', player1ResetNameBtn.disabled);

const player2Form = document.querySelector('.player2-form');
const player2InputWrapper = document.querySelector('.player2-input-wrapper');
const player2Input = document.getElementById('player2Input');
const player2SubmitNameBtn = document.getElementById('player2SubmitBtn');
const player2ResetNameBtn = document.getElementById('player2ResetNameBtn');
player2ResetNameBtn.disabled = true;
player2ResetNameBtn.classList.toggle('disabled-btn', player2ResetNameBtn.disabled);

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

player1Form.addEventListener('submit', e => {
    e.preventDefault();

    player1Input.disabled = true;
    player1InputWrapper.classList.add('input-locked');

    updateButtonState(player1SubmitNameBtn, true);
    updateButtonState(player1ResetNameBtn, false);

});

player1ResetNameBtn.addEventListener('click', () => {
    console.clear();
    player1Input.value = '';
    player1Input.disabled = false;
    player1InputWrapper.classList.remove('input-locked');

    updateButtonState(player1SubmitNameBtn, false);
    updateButtonState(player1ResetNameBtn, true);

    player1Input.focus();
});

player2Form.addEventListener('submit', e => {
    e.preventDefault();

    player2Input.disabled = true;
    player2InputWrapper.classList.add('input-locked');

    updateButtonState(player2SubmitNameBtn, true);
    updateButtonState(player2ResetNameBtn, false);

});

player2ResetNameBtn.addEventListener('click', () => {
    console.clear();
    player2Input.value = '';
    player2Input.disabled = false;
    player2InputWrapper.classList.remove('input-locked');

    updateButtonState(player2SubmitNameBtn, false);
    updateButtonState(player2ResetNameBtn, true);

    player2Input.focus();
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
