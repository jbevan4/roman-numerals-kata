romanNumerals = (numberToConvert) => {
  let result = "";
  if (numberToConvert) {
    if (numberToConvert <= 3) {
      result = "I".repeat(numberToConvert);
    } else if (numberToConvert === 4) {
      result = "IV";
    } else if (numberToConvert === 5) {
      result = "V";
    } else if (numberToConvert === 6) {
      result = "VI";
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
