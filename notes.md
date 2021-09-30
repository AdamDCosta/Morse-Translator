# Feedback

Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview

## Goals

1. Working morse code translator - ✔
2. Practice using TDD - Used TDD well ✔
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works ✔

## Specification

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files
  - Tests written and pass. Files separated well and modularised.
- Readme
  - Technically has a README although there is no information here about the application.
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive
  - Responsive and looks nice! Will break if you try to translate too much though.
- No tutorials
  - This work looks original.

## Overall

A very nice morse code translator which works well, provides some feedback if the character you type isn't able to be translate and the styling isn't too bad either.

Overall, very impressive! Some comments on the functions below and general clean-up.

## To work on

Follow the TDD cycle more closely. It looks to me like you changed both the inputs and output of your translate function which required a rewrite of your tests. Mostly in reference the function returning the morse code wrapped in `<p></p>` tags.

_Technically_ adding `<p></p>` tags aren't included in having to translate english to morse so it shouldn't live in this function. So you could add the wrapping `<p></p>` tags after you have called the function, or create a another wrapping function in order to achieve this functionality.

This would keep the purpose of `translateToMorse()` clearer.

Other bits of feedback are really simple, code cleanliness things:

- If you're importing the functions into `main.js` you don't need to put both `<scipt>` tags into the HTML file
- The `clearAll()` function shouldn't be defined inside the event listener in `main.js`
- In the `translateToMorse()` function you're using a lot of `let`s where you could be using `const` for every single variable instead. Golden rule here is to always use `const` in JS until you get an error saying "reassignment to constant variable"
- Remove all your commented out code if you're finished with it
