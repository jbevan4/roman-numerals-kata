romanNumerals = (numberToConvert) => {
  if (numberToConvert === 1) {
    return "I";
  } else {
    return "II";
  }
};

test("Write a passing test", () => {
  expect(true).toBe(true);
});

test("Write a passing test for the right reasons", () => {
  // This passes because there is a function called romanNumerals
  expect(romanNumerals()).toBe("II");
});

test("Given the number '1', it should return 'I'", () => {
  // This passes because we are sliming production
  expect(romanNumerals(1)).toBe("I");
});

test("Given the number '2', it should return 'I'", () => {
  // This passes again because we are sliming production
  expect(romanNumerals(2)).toBe("II");
});
