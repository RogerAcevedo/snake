import { SNAKE_SPEED,
update as updateSnake,
draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'

// IMPORT FOOD.JS
import { update as updatedFood, draw as drawFood} from './food.js'

// IMPORT GRID
import {outsideGrid} from './grid.js'

let lastRenderTime = 0 

let gameOver = false

// pass gameBoard and add id 'game-board'
const gameBoard = document.getElementById('game-board')

// GAME LOOP
function main(currentTime) {

    if (gameOver) {
        if (confirm ('LOSER! Try again')) {
            window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()

    draw()
}

window.requestAnimationFrame(main) 

function update() {
    updateSnake()
    updatedFood()
    checkDeath()
}

function draw() {
    // delete the previous index
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
