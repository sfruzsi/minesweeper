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

    it('Given board with mine on [1,1] When I click on [0,0] Then cell cleared returns', () => {
      game.clickCell(0, 0);
      expect(game.board).toBe(
        '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [1,1] When I click on [0,1] Then 1 will appear on [0,1]', () => {
      game.clickCell(0, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [0,0] and [1,1] When I click on [0,1] Then 2 will appear on [0,1]', () => {
      global.Math.random = () => 0;
      game.addMines();
      game.clickCell(0, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |2| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('US3 - Clicking on a cell then a bomb', () => {
    it('Given a board with mine on [1,1] When I click on [0,1] and [1,1] Then both appear on board', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.clickCell(0, 1);
      game.clickCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('US4 - Flag cells', () => {
    it('Given a board with mine on [1,1] When I flag [1,1] Then * appear on board', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.flagCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [1,1] When I flag [1,1] Then cell flagged as mine returns', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      expect(game.flagCell(1, 1)).toBe('Cell flagged as mine!');
    });

    it('Given a board with mine on [1,1] When click [0,1] and I flag [1,1] Then both appears on board', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.clickCell(0, 1);
      game.flagCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('Clicking on a blank', () => {
    it('Given a board with bomb on [0,0] When I click on [2,2] Then cells next to it will open', () => {
      global.Math.random = () => 0;
      game.addMines();
      game.clickCell(2, 2);
      expect(game.board).toBe(
        '+-+-+-+\n| |1|_|\n+-+-+-+\n|1|1|_|\n+-+-+-+\n|_|_|_|\n+-+-+-+'
      );
    });
  });
});
