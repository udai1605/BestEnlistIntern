str = 'hello'
vow = ''
String.prototype.bevowel = function () {
    const vowels = 'aeiou';
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vow += str[i]

        }
    }
    console.log(vow);
}

str.bevowel()