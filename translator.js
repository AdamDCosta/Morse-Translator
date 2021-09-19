import { validCharacters } from "./data/data.js";

const textInput = document.querySelector("textarea");

const translateBtn = document.querySelector("button");

const textOutput = document.querySelector(".translation");

// export const translateToMorse = (english) => {
//   return ".----";
// }

export const translateToEnglish = (morse) => {
  return "e";
}

// input a - returns corresponding morse

let userInput = "";
let morseOutput = "";


export const translateToMorse = (input) => {
  input.forEach(letter => {
    if (validCharacters.hasOwnProperty(input.charAt(i))) {
      morseOutput += validCharacters(input.charAt(i))
      textOutput = `<p>${morseOutput}</p>`
    }
  })
  
}





// const index 
// const input = "abc"

// `the translation of ${input} is ${validCharacters.charAt(input(i))}`


translateBtn.addEventListener("click", () => {
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