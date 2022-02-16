# JavaScript mini Quiz App

This project has created as the end project for  [Browsers module](https://github.com/HackYourFuture/Browsers) of [Hack Your Future](https://www.hackyourfuture.net/) program.

---

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

## Development

To run this project locally you will need to open `index.html` in your browser using a local server. LiveServer, `http-server`, `study-lenses`, or any other local static server will work.

## Installing Dependencies

There are no dependencies needed to run the website, everything is prepared to work with vanilla JavaScript. However, if you want to install prettier for this project then run (generally you always want to do this if you see a `package.json` file):

- `npm install`

# Structure

Let's run through the folders:

```
public
src
└── pages
|    └── welcomePage.js
|    └── questionPage.js
|    └── resultPage.js
└── views
|    └── answerView.js
|    └── clickErrorView.js
|    └── questionView.js
|    └── referenceView.js
|    └── resultView.js
|    └── timerView.js
|    └── welcomeView.js
└── app.js
└── constants.js
└── data.js
└── router.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
- `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
  it also contains our code that links up our handler code to the DOM.
- `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
- `app.js` this file our initialization code. Generally this code should only run once and starts the application
- `data.js` this is our data model. Anything we need to store in the browser we place inside the data file
- `router.js` this file will transition the app from one page to the other and clear the HTML.

# Backlog

So what should be built? Below is a collection of user stories you can choose from. Stories inside of each priority level are not necessarily in order, it's up to your group to decide how they fit into your strategy. These are also just suggestion, feel free to change them or create your own! Feel free to get creative.

## Must-Haves

> these are necessary for basic usability

- [x] A user can see one question at a time, stepping through the quiz
- [ ] A user can select an answer for each question
- [ ] A user can know which questions they got correct and incorrect (either immediately or at the end of the quiz)
- [ ] A user can see the correct answer for questions (either immediately or at the end of the quiz)
- [ ] A user can see their score at the end of the quiz

## Nice-to-Haves

> if time, add more features!

- [ ] A user can see their score update in real-time as they select answers
- [ ] A user can refresh the page and still have his/her given answers available
- [ ] A user has access to resources for further study on each question
- [ ] A user can "cheat" to see the correct answer, this forfeits the question
- [ ] A user can get more points for fast answers (if your quiz works like a test)
- [ ] A user can learn the about the correct answer and look into resources (if your quiz is more educational)
- [ ] Transition between pages or question look fancy like TypeForm for example
- [ ] Anything else you can think of... go nuts!
