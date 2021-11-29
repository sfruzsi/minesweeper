const createBoard = require('./minesweeper');

describe('US1 - Board creation', () => {
  it('Given 3x3 board When I start game Then I see the 3x3 board', () => {
    expect(createBoard()).toBe(
      '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
    );
  });
});
