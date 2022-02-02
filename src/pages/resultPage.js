'use strict';

import { createResultElement } from '../views/resultView.js';
import { router } from '../router.js';
import { quizData } from '../data.js';
import {REDO_QUIZ_BUTTON_ID} from '../constants.js';

export const resultPage = (userInterface, refresh = '') => {
  let resultElement;

  if (refresh === 'result') {
    resultElement = createResultElement(
      sessionStorage.correctSum,
      sessionStorage.wrongSum,
      sessionStorage.timeScore
    );
  } else {
    resultElement = createResultElement(
      quizData.correctSum,
      quizData.wrongSum,
      quizData.timeScore
    );
    sessionStorage.setItem('result', 'true');
    sessionStorage.setItem('correctSum', `${quizData.correctSum}`);
    sessionStorage.setItem('wrongSum', `${quizData.wrongSum}`);
    sessionStorage.setItem('timeScore', `${quizData.timeScore}`);
    }

    userInterface.appendChild(resultElement);

    document
    .getElementById(REDO_QUIZ_BUTTON_ID)
    .addEventListener('click', redoQuiz);

    function redoQuiz() {
      quizData.currentQuestionIndex = 0;
      quizData.wrongSum = 0;
      quizData.correctSum = 0;
      quizData.timeScore = 0;
      
      for (const question of quizData.questions) {
        question.selected = null;
      }

      sessionStorage.clear();
      //sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", "true");
      router('welcome');
    }
};
