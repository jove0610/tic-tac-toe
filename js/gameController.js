const gameController = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const player1 = { name: 'You', mark: 'X' };
  const player2 = { name: 'Computer', mark: 'O' };
  const currentPlayer = player1;

  const insertMarkOnBoard = (mark, index) => {
    board[index] = mark;
  };

  const insertMarkRandomly = (mark) => {
    for (;;) {
      const randomNum = Math.floor(Math.random() * 9);
      if (board[randomNum] === '') {
        board[randomNum] = mark;
        break;
      }
    }
  };

  const switchPlayer = (player) => {
    if (player === player1) {
      return player2;
    }
    return player1;
  };

  const isThereAWinner = () => {
    // 3 vertical
    if (board[0] === board[3] && board[3] === board[6]) {
      if (board[0] !== '') {
        return true;
      }
    }
    if (board[1] === board[4] && board[4] === board[7]) {
      if (board[1] !== '') {
        return true;
      }
    }
    if (board[2] === board[5] && board[5] === board[8]) {
      if (board[2] !== '') {
        return true;
      }
    }
    // 3 horizontal
    if (board[0] === board[1] && board[1] === board[2]) {
      if (board[0] !== '') {
        return true;
      }
    }
    if (board[3] === board[4] && board[4] === board[5]) {
      if (board[3] !== '') {
        return true;
      }
    }
    if (board[6] === board[7] && board[7] === board[8]) {
      if (board[6] !== '') {
        return true;
      }
    }
    // 2 diagonals
    if (board[0] === board[4] && board[4] === board[8]) {
      if (board[0] !== '') {
        return true;
      }
    }
    if (board[2] === board[4] && board[4] === board[6]) {
      if (board[2] !== '') {
        return true;
      }
    }

    return false;
  };

  const isThereADraw = () => {
    let temp = true;
    board.forEach((cell) => {
      if (cell === '') {
        temp = false;
      }
    });

    if (temp) {
      return true;
    }
    return false;
  };

  return {
    board,
    currentPlayer,
    insertMarkOnBoard,
    insertMarkRandomly,
    switchPlayer,
    isThereAWinner,
    isThereADraw,
  };
})();

export default gameController;
