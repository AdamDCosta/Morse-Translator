import { validCharacters } from "./data/data.js";
import { translateToMorse } from "./translator.js";

// DOM elements

const textInput = document.querySelector(".translator__input");

const translateBtn = document.querySelector(".translator__submit");

const clearBtn = document.querySelector(".clear");

const textOutput = document.querySelector(".translation")

// run translate function when submitted

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput);
})

// clear text to enter new translation

clearBtn.addEventListener("click", () => {
  const clearAll = () => {
    textInput.value = "";
    textOutput.innerHTML = "";
  }
  clearAll();
})