function romanInt(Numeral) {

  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let result = 0;
  for (let i = 0; i < Numeral.length; i++) {
    const current = Numeral[i];
    const next = Numeral[i + 1];
    const currentValue = roman[current];
    const nextValue = roman[next];

    if (nextValue > currentValue) {
      result += nextValue - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }

  return result;
}

console.log(romanInt("IX"));

