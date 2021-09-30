import { validCharacters } from "./data/data.js";
import { translateToMorse } from "./translator.js";

// DOM elements

// --> english to morse

const textInput = document.querySelector(".translator__input");

const translateBtn = document.querySelector(".translator__submit");

const clearBtn = document.querySelector(".clear");

const textOutput = document.querySelector(".translation")


// --> morse to english - NOT FINISHED

// const englishInput = document.querySelector(".english-translator__input");

// const englishTranslateBtn = document.querySelector(".english-translator__submit");

// const englishTextOutput = document.querySelector(".english-translation")


// run translate function when submitted

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput.value);
})

// englishTranslateBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   englishTextOutput.innerHTML = translateToEnglish(englishInput.value);
// })


// clear text to enter new translation

clearBtn.addEventListener("click", () => {
  const clearAll = () => {
    textInput.value = "";
    textOutput.innerHTML = "";
    englishInput.value = "";
    englishTextOutput.innerHTML = "";
  }
  clearAll();
})