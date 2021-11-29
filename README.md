# Exercise: minesweeper

|[![Testing](https://github.com/sfruzsi/minesweeper/actions/workflows/test.yml/badge.svg)](https://github.com/sfruzsi/minesweeper/actions/workflows/test.yml)|[![Linting](https://github.com/sfruzsi/minesweeper/actions/workflows/lint.yml/badge.svg)](https://github.com/sfruzsi/minesweeper/actions/workflows/lint.yml)|[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_minesweeper&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=sfruzsi_minesweeper)|[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=sfruzsi_minesweeper&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=sfruzsi_minesweeper)

> Installed with automatic script

- Source file
- Basic test file
- Jest for testing (watch and coverage)
- EsLint + Prettier for code style check
- Complexity check

## User story 1

> As a player I want to see the board and have mines So that I can play

- Scenario 1: Given the board is 3x3 When I start the game Then I see a 3x3 board
- Scenario 2: Given the board is 3x3 When I create the board Then I have 1 < x < 9 number of mines

## User story 2

> As a player I want to click on a cell So that I can see what's there

- Scenario 1: Given the board has mines When I click on te mine Then the mine goes BOOM
- Scenario 2: Given the board has mines When I click on the mine Then the board revelas the mine
- Scenario 3: Given the board has mines When I click on a non-mine Then the board revelas the number of mines

## User storty 3

> As a player I want to click the second time So that I can continue the game

- Scenario 1: Given the board has mines When I click first on a non-mine then a mine Then both should appear on the board

## User story 4

> As a player I want to flag the mines so that I can plan my moves

- Scenario 1: Given the board has mines When I flag a cell Then a \* woll appear

## User story 5

> As a player I want the cells surrounding a 0 appear when I click on it So that I can see the empty fields

- Scenario 1: Given a board When I click on a cell with \_ Then the cells next to it will appear on the board
