import { validCharacters } from "./data/data.js";

// import { translateToMorse } from "./main.js";


export const translateToMorse = (string) => {
  let userInput = string.value.toLowerCase();
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
  // textOutput.innerHTML = `<p>${result}</p>`;
  return `<p>${result}</p>`;
  
}



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