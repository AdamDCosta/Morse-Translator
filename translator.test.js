import { translateToMorse } from "./translator.js";


describe("Testing translateToMorse()", () => {
  it("Should return . when I pass e", () => {
    let result;
    result = translateToMorse("e");
    expect(result).toBe("<p>.</p>");
  })


  it("Should return . when I pass E", () => {
    let result;
    result = translateToMorse("E");
    expect(result).toBe("<p>.</p>");
  })



  it("Should return .---- when I pass 1", () => {
    let result;
    result = translateToMorse("1");
    expect(result).toBe("<p>.----</p>");
  })



  it("Should return .- -. -.. when I pass 'and'", () => {
    let result;
    result = translateToMorse("and");
    expect(result).toBe("<p>.- -. -..</p>");
  })
  


  it("Should return .... . .-.. .-.. --- / - .... . .-. . when I pass 'hello there'", () => {
    let result;
    result = translateToMorse("hello there");
    expect(result).toBe("<p>.... . .-.. .-.. --- / - .... . .-. .</p>");
  })


  it("Should return ..--.. when I pass ?", () => {
    let result;
    result = translateToMorse("?");
    expect(result).toBe("<p>..--..</p>");
  })

  

  it("Should return ... --- ... when I pass SOS", () => {
    let result;
    result = translateToMorse("SOS");
    expect(result).toBe("<p>... --- ...</p>");
  })




  it("Shouldn't return anything when I pass empty string", () => {
    let result ;
    result = translateToMorse("");
    expect(result).toBe("<p></p>");
  })
  


   it("Should return Character not available in morse code when I pass a square bracket", () => {
    let result;
    result = translateToMorse("[");
    expect(result).toBe("<p>Character not available in morse code</p>");
  })

})


xdescribe("Testing translateToEnglish()", () => {
  it("Should return e when I pass .", () => {
    let result;
    result = translateToMorse(".");
    expect(result).toBe("<p>e</p>");
  })

  it("Should return SOS when I pass ... --- ...", () => {
    let result;
    result = translateToMorse("... --- ...");
    expect(result).toBe("<p>SOS</p>");
  })

})







