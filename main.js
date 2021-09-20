import { validCharacters } from "./data/data.js";
import { translateToMorse, translateToEnglish } from "./translator.js";

// DOM elements

const textInput = document.querySelector(".translator__input");

const translateBtn = document.querySelector(".translator__submit");

const clearBtn = document.querySelector(".clear");

const textOutput = document.querySelector(".translation")




const englishInput = document.querySelector(".english-translator__input");

const englishTranslateBtn = document.querySelector(".english-translator__submit");

// const clearBtn = document.querySelector(".clear");

const englishTextOutput = document.querySelector(".english-translation")


// run translate function when submitted

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput);
})

englishTranslateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  englishTextOutput.innerHTML = translateToEnglish(englishInput);
})


// clear text to enter new translation

clearBtn.addEventListener("click", () => {
  const clearAll = () => {
    textInput.value = "";
    textOutput.innerHTML = "";
  }
  clearAll();
})