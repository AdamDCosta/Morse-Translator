import { translateToMorse, translateToEnglish } from "./translator.js"






describe("Testing translateToMorse()", () => {
  it("Should return . when I pass e", () => {
    let result;
    result = translateToMorse("e");
    expect(result).toBe(".");
  })


  it("Should return . when I pass E", () => {
    let result;
    result = translateToMorse("E");
    expect(result).toBe(".");
  })



  it("Should return .---- when I pass 1", () => {
    let result;
    result = translateToMorse(1);
    expect(result).toBe(".----");
  })



  it("Should return .- -. -.. when I pass 'and'", () => {
    let result;
    result = translateToMorse("and");
    expect(result).toBe(".- -. -..");
  })
  


  it("Should return .... . .-.. .-.. --- / - .... . .-. . when I pass 'hello there'", () => {
    let result;
    result = translateToMorse("hello there");
    expect(result).toBe(".... . .-.. .-.. --- / - .... . .-. .");
  })


  it("Should return ..--.. when I pass ?", () => {
    let result;
    result = translateToMorse("?");
    expect(result).toBe("..--..");
  })

  

  it("Should return ... --- ... when I pass SOS", () => {
    let result;
    result = translateToMorse("SOS");
    expect(result).toBe("... --- ...");
  })




  it("Should return Character not available in morse code when I pass %", () => {
    let result;
    result = translateToMorse("%");
    expect(result).toBe("Character not available in morse code");
  })


  it("Should return Character not available in morse code when I pass empty string", () => {
    let result;
    result = translateToMorse("");
    expect(result).toBe("Character not available in morse code");
  })
  


   it("Should return Character not available in morse code when I pass an empty array", () => {
    let result;
    result = translateToMorse([]);
    expect(result).toBe("Character not available in morse code");
  })

})


xdescribe("Testing translateToEnglish()", () => {
  it("Should return e when I pass .", () => {
    let result;
    result = translateToMorse(".");
    expect(result).toBe("e");
  })

  it("Should return SOS when I pass ... --- ...", () => {
    let result;
    result = translateToMorse("... --- ...");
    expect(result).toBe("SOS");
  })

})







