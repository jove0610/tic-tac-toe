const uiController = (() => {
  const board = document.querySelector('[data-board]');
  const cell0 = document.querySelector('[data-cell-0]');
  const cell1 = document.querySelector('[data-cell-1]');
  const cell2 = document.querySelector('[data-cell-2]');
  const cell3 = document.querySelector('[data-cell-3]');
  const cell4 = document.querySelector('[data-cell-4]');
  const cell5 = document.querySelector('[data-cell-5]');
  const cell6 = document.querySelector('[data-cell-6]');
  const cell7 = document.querySelector('[data-cell-7]');
  const cell8 = document.querySelector('[data-cell-8]');
  const message = document.querySelector('[data-message]');
  const restartBtn = document.querySelector('[data-restart]');

  const renderBoard = (boardArray) => {
    for (let i = 0; i <= 8; i += 1) {
      const cell = document.querySelector(`[data-cell-${i}]`);
      cell.textContent = boardArray[i];
    }
  };

  return {
    board,
    cell0,
    cell1,
    cell2,
    cell3,
    cell4,
    cell5,
    cell6,
    cell7,
    cell8,
    message,
    restartBtn,
    renderBoard,
  };
})();

export default uiController;
