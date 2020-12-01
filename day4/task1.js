const getSign = (a, b, c) => {
    if (a[0] == null && b[0] == null && c[0] == null) {
        console.log('Welcome to reactJs')
    }
    if (a[0] == '-' || b[0] == '-' || c[0] == '-') {
        console.log('-')
    }
    if (a[0] == '+' || b[0] == '+' || c[0] == '+') {
        console.log('+')
    }
}

getSign('3', '+4', '-5')