'use strict';

import { initQuestionPage } from './pages/questionPage.js';
import { welcomePage } from './pages/welcomePage.js';
import { resultPage } from './pages/resultPage.js';
import { USER_INTERFACE_ID } from './constants.js';

export const router = (page, sessionKey = '') => {
  const userInterfaceElement = document.getElementById(USER_INTERFACE_ID);
  userInterfaceElement.innerHTML = '';

  switch (page) {
    case 'refresh':
      const question = /question[0-9]/;
      sessionKey === 'result'
      ? resultPage(userInterfaceElement, sessionKey)
      ? sessionKey === question
      : initQuestionPage(userInterfaceElement, sessionKey)
      : welcomePage(userInterfaceElement);
      break;
    case 'question':
      initQuestionPage(userInterfaceElement);
      break;
    case 'welcome':
      sessionKey = null;
      welcomePage(userInterfaceElement);
      break;
    case 'result':
      resultPage(userInterfaceElement);
      break;
  }
};
