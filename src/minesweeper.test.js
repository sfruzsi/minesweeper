const { MineSweeper } = require('./minesweeper');

describe('Testing Mine Sweeper', () => {
  let game;
  beforeEach(() => {
    game = new MineSweeper();
  });
  describe('US1 - Board creation', () => {
    it('Given 3x3 board When I start game Then I see the 3x3 board', () => {
      expect(game.createBoard()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given 3x3 board When I start the game Then I add mine to [0,0]', () => {
      global.Math.random = () => 0;
      expect(game.addMines()).toStrictEqual([
        ['X', '', ''],
        ['', '', ''],
        ['', '', '']
      ]);
    });

    it('Given 3x3 board When I start the game Then I add one random mine', () => {
      global.Math.random = () => 0.5;
      expect(game.addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });

    it('Given 3x3 board When I start the game Then I add random number of mines', () => {
      global.Math.random = () => 0.5;
      expect(game.addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });
  });

  describe('US2 - Clicking on a cell', () => {
    beforeEach(() => {
      global.Math.random = () => 0.5;
      game.addMines();
    });
    it('Given board with mine on [1,1] When I click on [1,1] Then mine blows up', () => {
      expect(game.clickCell(1, 1)).toBe('BOOM!');
    });

    it('Given board with mine on [1,1] When I click on [1,1] Then mine blows up', () => {
      game.clickCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given board with mine on [1,1] When I click on [0,0] Then cell cleared returns', () => {
      expect(game.clickCell(0, 0)).toBe('Cleared cell');
    });
  });
});
