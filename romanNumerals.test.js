romanNumerals = () => {
  return "I";
};

test("Write a passing test", () => {
  expect(true).toBe(true);
});

test("Write a passing test for the right reasons", () => {
  // This passes because there is a function called romanNumerals
  expect(romanNumerals()).toBe("I");
});

test("Given the number '1', it should be returned as 'I'", () => {
  // This passes because we are sliming production
  expect(romanNumerals(1)).toBe("I");
});
