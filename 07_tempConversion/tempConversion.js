const convertToCelsius = function(faren) {
  res = (faren - 32) * (5 / 9);
  return Math.round(res * 10) / 10; 
};

const convertToFahrenheit = function(celc) {
  res = (celc * (9 / 5) + 32);
  return Math.round(res * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
