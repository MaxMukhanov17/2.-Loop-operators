function arrNum(quantity) {
    var primesNum = []
    nextNum:
    for (let divisible = 2; divisible < 500; divisible++) {

        for (let divider = 2; divider < divisible; divider++) {
            if (divisible % divider === 0) continue nextNum

        }
        if (primesNum.length === quantity) {
            break
        }
    primesNum.push(divisible);

    }
    console.log(primesNum);
}

let quantity = process.argv[2]
console.log('Количество простых чисел: ' + quantity)
arrNum(+quantity);