const { createBoard, addMines, clickCell } = require('./minesweeper');

describe('Testing Mine Sweeper', () => {
  describe('US1 - Board creation', () => {
    it('Given 3x3 board When I start game Then I see the 3x3 board', () => {
      expect(createBoard()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given 3x3 board When I start the game Then I add mine to [0,0]', () => {
      global.Math.random = () => 0;
      expect(addMines()).toStrictEqual([
        ['X', '', ''],
        ['', '', ''],
        ['', '', '']
      ]);
    });

    it('Given 3x3 board When I start the game Then I add one random mine', () => {
      global.Math.random = () => 0.5;
      expect(addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });

    it('Given 3x3 board When I start the game Then I add random number of mines', () => {
      global.Math.random = () => 0.5;
      expect(addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });
  });

  describe('US2 - Clicking on a cell', () => {
    it('Given board with mine on [1,1] When I click on [1,1] Then mine blows up', () => {
      expect(clickCell(1, 1)).toBe('BOOM!');
    });
  });
});
