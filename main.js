import { validCharacters } from "./data/data.js";
import { translateToMorse } from "./translator.js";

// DOM elements

const textInput = document.querySelector(".translator__input");

const translateBtn = document.querySelector(".translator__submit");


const clearBtn = document.querySelector(".clear");

// run translate function when submitted

// let invalid = "Character not available in morse code"


//  export const translateToMorse = () => {
//   let userInput = textInput.value.toLowerCase();
//   let inputLetters = userInput.split("");
//   let morseOutput = inputLetters.map(letter => {
//     if (validCharacters[letter]) {
//       return validCharacters[letter];
//     }
//     else {
//       return invalid;
//     }
    
//   })
//   let result = morseOutput.join(" ");
//   textOutput.innerHTML = `<p>${result}</p>`;
  
// }
const textOutput = document.querySelector(".translation")

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput);
})

clearBtn.addEventListener("click", () => {
  const clearAll = () => {
    textInput.value = "";
    textOutput.innerHTML = "";
  }
  clearAll();
})