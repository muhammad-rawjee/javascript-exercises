const add = function(a, b) {
  return a + b
};

const subtract = function(a ,b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(...args) {
  let res = 1;
  
  args.forEach(elem => res *= elem);
  
  return res
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a == 0 || a == 1) return 1
  else {
    res = 1
    let count = a
    while (count > 0){
      res *= count;
      count--;
    }
    return res
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
