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
