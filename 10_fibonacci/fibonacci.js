const fibonacci = function(someNum) {
    if (someNum == 0) return 0
    if (someNum < 0) return "Invalid Num"

    let first = 1
    let second = 0

    for (let i = 2; i <= someNum; i++){
        let curr = first + second
        second = first
        first = curr
    }
    return first
};

// Do not edit below this line
module.exports = fibonacci;
