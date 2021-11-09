# Morse Code Translator

Here is the link the the [project](https://adamdcosta.github.io/Morse-Translator/)

****

![Morse code translator](https://github.com/AdamDCosta/Morse-Translator/blob/main/morse-translator.png)

****

## About

This is my morse code translator written in vanilla JS, with a TDD process during week 4 of the *_nology* course.  
Tests were written first using Jest.

****

## The Code

```
export const translateToMorse = (english) => {
  let userInput = english.toLowerCase();
  let inputLetters = userInput.split("");
  let morseOutput = inputLetters.map(letter => {
    if (validCharacters[letter]) {
      return validCharacters[letter];
    }
    
    else {
      let invalid = "Character not available in morse code"
      return invalid;
      
    } 
  })
  let result = morseOutput.join(" ");
  return `<p>${result}</p>`; 
}
```

The object validCharacters contained the english letters as the key and the morse translation as the value. The translateToMorse function takes the english string, converts it to an array and then maps over the array. For each letter it checks whether the validCharacters object contains a corresponding value and returns that value. If the input is invalid then a message will appear in the translated text box. Finally the function turns the array back to a string and returns it in a <p> tag. 




