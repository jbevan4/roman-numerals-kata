let romanUniqueBreakpoints = [
  { number: 10, symbol: "X" },
  { number: 9, symbol: "IX" },
  { number: 5, symbol: "V" },
  { number: 4, symbol: "IV" },
  { number: 1, symbol: "I" },
];

romanNumerals = (numberToConvert) => {
  let result = "";
  let arrayIndex = 0;
  while (numberToConvert > 0) {
    let romanPair = romanUniqueBreakpoints[arrayIndex];
    if (numberToConvert >= romanPair.number) {
      numberToConvert -= romanPair.number;
      result += romanPair.symbol;
    } else {
      arrayIndex += 1;
    }
  }
  return result;
};

test("Write a passing test", () => {
  expect(true).toBe(true);
});

test("Write a passing test for the right reasons", () => {
  expect(romanNumerals()).toBe("");
});

test("Given the number '1', it should return 'I'", () => {
  expect(romanNumerals(1)).toBe("I");
});

test("Given the number '2', it should return 'I'", () => {
  expect(romanNumerals(2)).toBe("II");
});

test("Given the number '3', it should return 'III", () => {
  expect(romanNumerals(3)).toBe("III");
});

test("Given the number '4', it should return 'IV'", () => {
  expect(romanNumerals(4)).toBe("IV");
});

test("Given the number '5', it should return 'V'", () => {
  expect(romanNumerals(5)).toBe("V");
});

test("Given the number '6', it should return 'VI'", () => {
  expect(romanNumerals(6)).toBe("VI");
});

test("Given the number '9', it should return 'IV'", () => {
  expect(romanNumerals(9)).toBe("IX");
});

test("Given the number '10', it should return 'X'", () => {
  expect(romanNumerals(10)).toBe("X");
});

test("Given the number '11', it should return 'XI'", () => {
  expect(romanNumerals(11)).toBe("XI");
});
