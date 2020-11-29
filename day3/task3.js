const squareDigits = num => {
    const digits = num.toString().split('')
    const squaredDigits = digits.map(n => n * n)
    const squaredNumber = squaredDigits.join('')
    return +squaredNumber
}

console.log(squareDigits(2125))