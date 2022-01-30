'use strict';

import { RESTART_BUTTON_ID } from '../constants.js';

export const createResultElement = (correctSum, wrongSum, timeScore) => {
  const element = document.createElement('div');
  element.id = "result-interface";
  element.innerHTML = String.raw`
        <h1>Congratulations!</h1>
        <p>You have finished the quiz about JavaScript</p>
        <p>Correct answers: ${correctSum}</p>
        <p>Wrong answers: ${wrongSum}</p>
        <p>Fast answering: ${timeScore}/10 points</p>
        <p>For more about JavaScript, visit:</p>
        <a href="https://www.w3schools.com/" class="link reference-link">https://w3schools.com</a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="link reference-link">MDN-WebDocs/javascript</a>
        <a href="https://javascript.info/" class="link reference-link">https://javascript.info</a>
        <button class ="btn" id="${RESTART_BUTTON_ID}"> try again</button>
    `;
  return element;
};
