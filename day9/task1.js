var sampleInput = [1, 2, 4, 3, 5, 2, 5, 3]

Array.prototype.begetduplicate = function () {
    var resultObject = {}
    var result = []
    sampleInput.forEach(input => {
        if (!resultObject[input])
            resultObject[input] = 0
        resultObject[input] += 1
    })

    for (var property in resultObject) {
        if (resultObject[property] > 1) {
            result.push(property)
        }
    }
    return result
}

console.log(sampleInput.begetduplicate())