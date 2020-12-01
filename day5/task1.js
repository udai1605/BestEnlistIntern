str = 'hello'

String.prototype.bespacify = function () {
    str2 = str.split('').join(' ')
    console.log(str2)
}

str.bespacify()