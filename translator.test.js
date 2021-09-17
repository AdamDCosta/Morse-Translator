// it should 

const { it, expect } = require("@jest/globals");
const { describe } = require("yargs");

// it should 

// it should 

// it should 

// remember to think of all valid cases

// think about invalid cases too

// It should return '.' when I pass 'e' to translateToMorse()
// (this would apply to all letters)

// describe("Testing formatNumberToSterling()", () => {
//   it("Should format 5 to £5.00", () => {
//     // ARRANGE
//     let result;
//     // ACT
//     result = formatNumberToSterling(5);
//     // ASSERT -> test will pass or fail
//     expect(result).toBe("£5.00");
//   })

describe("Testing translateToMorse()", () => {
  it("Should return . when I pass e", () => {
    let result;
    result = translateToMorse(e);
    expect(result).toBe(".");
  })

  // It should return '.' when I pass 'E' to translateToMorse()
  // (apply to all uppercase letters)

  it("Should return . when I pass E", () => {
    let result;
    result = translateToMorse(E);
    expect(result).toBe(".");
  })

  //It should return '.----' when I pass '1' to translateToMorse()
  // (should apply to all numbers)

  it("Should return .---- when I pass 1", () => {
    let result;
    result = translateToMorse(1);
    expect(result).toBe(".----");
  })

})










// It should return a space between each letter(.- -. -..) when I pass 'and' to translateToMorse()

// It should return a forward slash between the words (.... . .-.. .-.. --- / - .... . .-. .)when I pass "hello there" to translateToMorse()

//It should return '..--..' when I pass '?' to translateToMorse
// (this should apply to all other valid punctuation)

//It should return 'SOS' when I pass '... --- ...' through translateToEnglish()

///It should return “Character not available in morse code” if character “%” is input.

// (This would return whenever a symbol that is not registered with the internation morse code dictionary is input)

//It should return “Character not available in morse code” if I pass an "" to translateToMorse()
//(this would apply to all datatypes)


