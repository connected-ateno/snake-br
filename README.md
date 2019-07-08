# Snake: Battle Royale

## Asana

https://app.asana.com/0/1131036943725251/board

## Objective

The goal is to create an implementation of the classic snake video game that supports multiple players in a death-match scenario. 

## Rules

1. A snake has a few movements options, up, down, left or right. The snake will not accept an input that would move it in the direction of it's second point of articulation (immediately behind the 'head').

2. A snake can grow in length by consuming certain items. This growth occurs by adding a new length of body-segment at the tail position of the snake.

3. A snake's 'head' cannot enter a space occupied by a body-segment. This results in a game loss for that snake.

## Optional Rules

These are rules that occur in some instances of the game snake.

* Wrapping: A snake can screen-wrap, if a snake would move off-screen, it's head moves to the opposite x or y coordinate (depending on the axis being crossed)

* Power-ups: Bunches of Apples, Speed, etc...

## Commands

`npm start`: Will launch a simple Express server (powered by NodeJS) that supports a Socket.io connection.

`npm test`: Will launch Jest tests.

