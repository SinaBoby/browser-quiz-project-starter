'use strict';

import { START_QUIZ_BUTTON_ID } from '../constants.js';

export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.id = "welcome-interface"
  element.innerHTML = String.raw`
    <h1>Welcome To JS Strijders Quiz App</h1>
    <div>
    <div class="instruction">
    <h3>User Guide</h3>
    <ul>
    <li>You have <b>1</b> minute for each question.</li>
    <hr>
    <li>Answer within <b>30</b> seconds and get extra 'time points'</li>
    <hr>
    <li>Feel confused? Check out the references.</li>
    <hr>
    <li>You will find your final score at the result page.</li>
    </ul>
    </div>
    <div class="img-container">
    <img src="public/Assets/welcome-logo.png" alt="ninja warrior">
    </div>
    </div>
    <button class ="btn" id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
    `;
  return element;
};
