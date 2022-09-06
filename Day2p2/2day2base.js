'use strict';
// const num = '1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc\n1-3 a: abcde';
// const strings = num.slice(/\d+-\d+\s[a-z]:\s\w+/g);
// const str = strings.split('\n');
const wrapper = str => {
  let qty = 0;
  for (let i = 0; i < str.length; i++) {
    const elements = str[i].split(' ');
    const numbers = elements[0].split('-').map(Number);
    const letter = elements[1].slice(0, 1);
    const pass = elements[2];

    for (let i = 0; i < pass.length; i++) {
      if (
        pass[i] === letter &&
        pass.indexOf(pass[i + 1]) === numbers[0] &&
        pass.charAt(numbers[1] - 1) !== letter
      ) {
        qty++;
        console.log(qty);
      }
    }
  }
  return qty;
};

module.exports = { wrapper };
