let romanUniqueBreakpoints = [
  { number: 10, symbol: "X" },
  { number: 9, symbol: "IX" },
  { number: 5, symbol: "V" },
  { number: 4, symbol: "IV" },
  { number: 1, symbol: "I" },
];

romanNumerals = (numberToConvert) => {
  let result = "";
  for (let romanPair of romanUniqueBreakpoints) {
    while (numberToConvert >= romanPair.number) {
      result += romanPair.symbol;
      numberToConvert -= romanPair.number;
    }
  }
  return result;
};

test("Write a passing test", () => {
  expect(true).toBe(true);
});

test("Write a passing test for the right reasons", () => {
  // This passes because there is a function called romanNumerals
  // This test case is giving eroneous results, refactoring
  expect(romanNumerals()).toBe("");
});

test("Given the number '1', it should return 'I'", () => {
  // This passes because we are sliming production
  expect(romanNumerals(1)).toBe("I");
});

test("Given the number '2', it should return 'I'", () => {
  // This passes again because we are sliming production
  expect(romanNumerals(2)).toBe("II");
});

test("Given the number '3', it should return 'III", () => {
  // This is the point at which we push the pain as a pattern is emerging
  expect(romanNumerals(3)).toBe("III");
});

test("Given the number '4', it should return 'IV'", () => {
  // This is a unique case for now, so we can slime it
  expect(romanNumerals(4)).toBe("IV");
});

test("Given the number '5', it should return 'V'", () => {
  // Another unique case for now, so we can slime it
  expect(romanNumerals(5)).toBe("V");
});

test("Given the number '6', it should return 'VI'", () => {
  // This can be slimed
  expect(romanNumerals(6)).toBe("VI");
});

test("Given the number '9', it should return 'IV'", () => {
  // Slimed again
  expect(romanNumerals(9)).toBe("IX");
});

test("Given the number '10', it should return 'X'", () => {
  // Slimed... For the last time
  expect(romanNumerals(10)).toBe("X");
});

test("Given the number '11', it should return 'XI'", () => {
  // Right... Lets add some logic...
  expect(romanNumerals(11)).toBe("XI");
});
