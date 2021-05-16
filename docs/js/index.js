import ui from './uiController.js';
import game from './gameController.js';

document.addEventListener('DOMContentLoaded', () => {
  ui.renderBoard(game.board);
});

ui.board.addEventListener('click', (e) => {
  if (!game.isThereAWinner() && !game.isThereADraw()) {
    // Insert player's mark in the board array
    if (e.target.textContent === '') {
      if (e.target === ui.cell0) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 0);
      }
      if (e.target === ui.cell1) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 1);
      }
      if (e.target === ui.cell2) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 2);
      }
      if (e.target === ui.cell3) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 3);
      }
      if (e.target === ui.cell4) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 4);
      }
      if (e.target === ui.cell5) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 5);
      }
      if (e.target === ui.cell6) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 6);
      }
      if (e.target === ui.cell7) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 7);
      }
      if (e.target === ui.cell8) {
        game.insertMarkOnBoard(game.currentPlayer.mark, 8);
      }
    }
    ui.renderBoard(game.board);

    if (!game.isThereAWinner()) {
      game.currentPlayer = game.switchPlayer(game.currentPlayer);
      setTimeout(() => {
        game.insertMarkRandomly(game.currentPlayer.mark);
        ui.renderBoard(game.board);

        if (game.isThereAWinner()) {
          ui.message.textContent = `${game.currentPlayer.name} Won!`;
        }

        game.currentPlayer = game.switchPlayer(game.currentPlayer);
      }, 500);
    }

    if (game.isThereADraw() && !game.isThereAWinner()) {
      ui.message.textContent = `It's a Draw!`;
    }

    if (game.isThereAWinner()) {
      ui.message.textContent = `${game.currentPlayer.name} Won!`;
    }
  }
});

ui.restartBtn.addEventListener('click', () => {
  window.location.reload();
});
