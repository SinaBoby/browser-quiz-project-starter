'use strict';

import { createResultElement } from '../views/resultView.js';
import { createReferenceElement } from '../views/referenceView.js';
import { quizData } from '../data.js';
import { REFERENCE_LIST_ID } from '../constants.js';

export const resultPage = (userInterface, refresh = '') => {
  
  let resultElement;
  
  if (refresh === 'result') {
    resultElement = createResultElement(
      sessionStorage.correctSum,
      sessionStorage.wrongSum,
      sessionStorage.timeScore);
  } else {
    resultElement = createResultElement(quizData.correctSum, quizData.wrongSum, quizData.timeScore);
    sessionStorage.setItem('result', 'true');
    sessionStorage.setItem('correctSum', `${quizData.correctSum}`);
    sessionStorage.setItem('wrongSum', `${quizData.wrongSum}`);
    sessionStorage.setItem('timeScore', `${quizData.timeScore}`);
    }

    userInterface.appendChild(resultElement);

    // const referenceListElement = document.getElementById(REFERENCE_LIST_ID);

    // for (const {links} of quizData.questions) {
    //   for (const link of links) {
    //       const referenceElement = createReferenceElement(link.text, link.href);
    //       referenceListElement.appendChild(referenceElement);  
    //     }
        
    //   }
};
