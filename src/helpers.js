// Returns number between 0 and the max
export const randomNum = (max) => {
    return Math.floor(Math.random() * max)
}

// returns random bool
export const randomCondition = () => {
    return randomNum(2) < 1
}
