Tic Tac Toe

A Tic Tac Toe game built as part of The Odin Project's Full Stack JavaScript curriculum — the classic project used to practice factory functions, closures, and keeping game logic completely separate from the DOM.

🎯 Goals

- Practice **factory functions** (`function create...() { return {...} }`) instead of constructors/classes
- Use **closures** to keep internal state (like the board array) private, exposed only through specific methods
- Separate concerns cleanly: `Gameboard` holds the board state, `Player` represents a player, `GameController` drives turn order and win/draw checking — none of them touch the DOM directly
- Practice event delegation for the 3x3 grid (one listener on the board, not nine separate ones)
- Re-render the UI from game state after every move, rather than manipulating the DOM as the source of truth

✨ Features

- Enter your name once, then the name field locks (with an animated lock icon) to prevent changing it mid-game
- Start / Reset controls for the game
- 3x3 grid built with CSS Grid, click a cell to place a mark
- Win detection across all 8 possible lines (3 rows, 3 columns, 2 diagonals)
- Draw detection when the board fills up with no winner

## 🛠 Tech Stack

- HTML5 — semantic structure
- CSS3 — Grid-based board, animated locked-state styling
- JavaScript (Vanilla) — factory functions, closures, event delegation, DOM rendering decoupled from game logic

📁 Project Structure

```
tic-tac-toe/
├── index.html      Page markup, name form, board grid
├── style.css         Styling, locked-state animation
├── script.js          Gameboard / Player / GameController factories, rendering, event handling
└── README.md          Project documentation
```

Status

In progress — board and name-lock UI complete, game logic (Gameboard, Player, GameController) being implemented.

---

Practice project — part of The Odin Project's Full Stack JavaScript curriculum.
