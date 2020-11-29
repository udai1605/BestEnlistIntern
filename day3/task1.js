const check = (number) => {
    num = String(number)
    length = num.length
    if (length >= 2) {
        a = num[length - 2]
        b = num[length - 1]
        if (a == b) {
            console.log('true')
        } else {
            console.log('false')
        }
    } else if (num[0] == num[1]) {
        console.log('true')
    } else {
        console.log('false')
    }

}

check(211)