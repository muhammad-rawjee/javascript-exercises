const repeatString = function(string, rep) {
    let res = ''
    if (rep < 0){
        return "ERROR";
    }
    for (let i = 0; i < rep; i++){
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
