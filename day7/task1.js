var sampleInput = [{ name: 'john', age: 26 }, { name: 'siva', age: 27 }]
// sampleInput[0].Country = 'India'
// console.log(sampleInput)

Array.prototype.beaddobject = function () {

    for (i = 0; i < sampleInput.length; i++) {
        sampleInput[i].Country = 'india'
    }
    return sampleInput
}

console.log(sampleInput.beaddobject())