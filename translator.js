import { validCharacters } from "./data/data.js";

import { translateToMorse } from "./main.js";




export const translateToMorse = (english) => {
  return ".----";
}

export const translateToEnglish = (morse) => {
  return "e";
}

// input a - returns corresponding morse

// let userInput = textInput.value;

let invalid = "Character not available in morse code"


export const translateToMorse = () => {
  let userInput = textInput.value.toLowerCase();
  let inputLetters = userInput.split("");
  let morseOutput = inputLetters.map(letter => {
    if (validCharacters[letter]) {
      return validCharacters[letter];
    }
    else {
      return invalid;
    }
    
  })
  let result = morseOutput.join(" ");
  textOutput.innerHTML = `<p>${result}</p>`;
  
}


translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let userInput = textInput.textContent;
  translateToMorse(userInput);
  
})



// ->when translate button pressed, the function takes the user input - finds the corresponding values to the keys and returns the output in <p></p> as a string without commas

// -> how to take input?
// -> function for each individual letter, which then adds each one to a new array
// can you loop through this array to find values in data object
// -> return array of translated code, convert to string, remove commas
// -> function to add the code to p tags inside the translate div below the input text box?



// object with english as key, morse as value

//translateToMorse --> receive input

// --> loop through object to find key and return value

// const translateToMorse = () => {
// validCharacters.map(character => {
  
//})
//}