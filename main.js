import { validCharacters } from "./data/data.js";

// DOM elements

const textInput = document.querySelector(".translator__input");

const translateBtn = document.querySelector("button");

const textOutput = document.querySelector(".translation");

// run translate function when submitted

let invalid = "Character not available in morse code"


const translateToMorse = () => {
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
  // let userInput = textInput.textContent;
  translateToMorse(userInput);
})