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
    console.log(primesNum)
    return primesNum
}

let quantity = process.argv[2]
console.log('Количество простых чисел: ' + quantity)
arrNum(+quantity);


function getPrimeNums(n) {

    const arr = [];
    for (let i = 2; arr.length < n; i++) {
        let flag = false;
        for (let counter = 0; counter < i; counter++) {
            if (i % arr[counter] === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            arr.push(i)
        };

    }
    return arr;
}


console.time();
console.log(getPrimeNums(process.argv[2]));
console.timeEnd();