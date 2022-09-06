'use strict';

const wrapper = str => {
  let qty = 0;
  for (let b = 0; b <= str.length - 1; b++) {
    const elements = str[b].split(' ');
    const numbers = elements[0].split('-').map(Number);
    const letter = elements[1].slice(0, 1);
    const pass = elements[2];

    let checkLetterQty = 0;
    for (let i = 0; i <= pass.length - 1; i++) {
      if (pass[i] === letter) {
        checkLetterQty++;
      }
    }
    if (checkLetterQty >= numbers[0] && checkLetterQty <= numbers[1]) {
      qty++;
    }
  }
  return qty;
};

module.exports = { wrapper };
