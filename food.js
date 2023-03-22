import { onSnake, expandSnake, SNAKE_SPEED} from './snake.js'
import { randomGridPosition} from './grid.js'

// Y-grid starts at 1 (must start at 1, not 0)
let food = getRandomFoodPosition()

// HOW MUCH SNAKE GROWS AFTER IT EATS FOOD
const EXPANSION_RATE = 1

export function update() {
    // check if snake is on top of food
    if (onSnake(food)) {
        // eat food and expand
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}