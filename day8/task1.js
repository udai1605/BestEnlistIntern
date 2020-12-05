var sampleInput = [
    { name: 'john', age: 26, Country: 'india' },
    { name: 'siva', age: 27, Country: 'india' }
]

Array.prototype.beremoveobject = function () {

    for (i = 0; i < sampleInput.length; i++) {
        delete sampleInput[i].Country
    }
    return sampleInput
}

console.log(sampleInput.beremoveobject())