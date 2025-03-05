const sumAll = function(min, max) {
    if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }

    if ((min < 0) || (max < 0)){
        return "ERROR"
    }
    else if (!Number.isInteger(min) || !Number.isInteger(max)){
        return "ERROR" 
    }
    let res = 0;
    for (let i = min; i <= max; i++){
        res += i
    }
    return res
};

// Do not edit below this line
module.exports = sumAll;
