const removeFromArray = function (numArray, ...theArgs) {
    const newArray = [];

    numArray.forEach((element) => {
        if (!theArgs.includes(element)){
            newArray.push(element);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
