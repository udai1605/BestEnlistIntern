var sampleInput = [{ name: 'john', age: 26 }, { name: 'siva', age: 27 }]
// console.log(sampleInput[0].name)

Array.prototype.befindobject = function () {
    result = []
    for (i = 0; i < sampleInput.length; i++) {
        result.push(sampleInput[i].name)
    }
    return result
}

console.log(sampleInput.befindobject())