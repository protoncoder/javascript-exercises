const repeatString = function(string, num) {
  
  //returns 'ERROR' with negative numbers
  if ( num < 0) {
    return 'ERROR';
  }  
  
  //return 'hey' many times
  let stringHolder = '';
  for (let i = 0; i < num; i++) {
    stringHolder += string; //same as stringHolder = stringHolder + string
  }
  return stringHolder;
};

// Do not edit below this line
module.exports = repeatString;
