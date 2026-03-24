const add = function(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

function divide(a, b){
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function multiply(a, b){
  return a * b;
}

module.exports = {
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply
};