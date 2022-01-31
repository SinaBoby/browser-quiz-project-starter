'use strict';


import { REDO_QUIZ_BUTTON_ID } from '../constants.js';

export const createResultElement = (correctSum, wrongSum, timeScore) => {
  const element = document.createElement('div');
  element.id = "result-interface";
  element.innerHTML = String.raw`
        <h1>Congratulations!</h1>
        <p>You have finished the quiz about JavaScript</p>
        <p>Correct answers: <b>${correctSum}</b></p>
        <p>Wrong answers: <b>${wrongSum}</b></p>
        <p>Fast answering: <b>${timeScore}/10</b> points</p>
        <p>For more info about JavaScript, visit:</p>
        <a href="https://www.w3schools.com/" class="link reference-link">https://w3schools.com</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="link reference-link">MDN-WebDocs/javascript</a>
        <a href="https://javascript.info/" class="link reference-link">https://javascript.info</a>
        <button class ="btn" id="${REDO_QUIZ_BUTTON_ID}">Try again</button>
    `;
  return element;
};
