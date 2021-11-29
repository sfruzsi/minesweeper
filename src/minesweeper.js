const createBoard = () => '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';

const addMines = () => [
  ['X', '', ''],
  ['', '', ''],
  ['', '', '']
];

module.exports = {
  createBoard,
  addMines
};
