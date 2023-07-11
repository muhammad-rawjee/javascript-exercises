const removeFromArray = function(array_val, ...theArgs) {
    for (let i = 0; i < arguments.length; i++){
        if (array_val.includes(arguments[i])){
            index = array_val.indexOf(arguments[i]);
            array_val.splice(index, 1);
        }
    }
    return array_val;
};

// Do not edit below this line
module.exports = removeFromArray;
