//DOM Init variables
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const container = document.getElementById("container");

//Quiz Questions in an Array of objects
const quizData = [
  {
    //Question Title
    question: "What is the name of Yoda’s home?",
    //Options:
    a: "Dagobah",
    b: "Aponini",
    c: "Kosovo",
    d: "Tekinoa",
    //Correct answer. Get's checked with HTML's ID if it's correct
    correct: "a",
  },
  {
    question: "Who is the young Jedi Knight who becomes Darth Vader?",
    a: "Kylo Ren",
    b: "Han",
    c: "Anakin Skywalker",
    d: "Chewie the Wookie",
    correct: "c",
  },
  {
    question: "Who is the First Order’s supreme leader?",
    a: "Grand Admiral Rae Sloane",
    b: "Brendol Hux",
    c: "Captain Phasma",
    d: "Snoke",
    correct: "d",
  },
  {
    question: "Who is Luke and Leia’s mother?",
    a: "Padmé Amidala",
    b: "Rey",
    c: "Jyn Erso",
    d: "Hera Syndulla",
    correct: "a",
  },
];

//An Array of quotes that gets displayed together with the score
let quotes = [
  `“Try not. Do or do not. There is no try.” —Yoda, Star Wars Episode V: The Empire Strikes Back`,
  `“Your eyes can deceive you; don’t trust them.” —Obi-Wan Kenobi, Star Wars Episode IV: A New Hope`,
  `“Who’s the more foolish: the fool or the fool who follows him? —Obi-Wan Kenobi, A New Hope`,
  `“Your focus determines your reality.” —Qui-Gon Jinn, Star Wars Episode I: The Phantom Menace`,
  `“No longer certain that one ever does win a war, I am.” —Yoda, The Clone Wars`,
  `“In a dark place we find ourselves and a little more knowledge lights our way.” —Yoda, Star Wars Episode III: Revenge Of The Sith`,
  `“The ability to speak does not make you intelligent.” —Qui-Gon Jinn, The Phantom Menace`,
  `“Difficult to see; always in motion is the future.” —Yoda, The Empire Strikes Back`,
  `“Many of the truths that we cling to depend on our viewpoint.” — Obi-Wan Kenobi, Star Wars Episode VI: Return Of The Jedi`,
  `“The fear of loss is a path to the dark side.” —Yoda, Revenge Of The Sith`,
];

//Current Question from quiz
let currentQuiz = 0;
//Answered Correctly Score
let score = 0;

//Loads question/s
function loadQuiz() {
  //Remove last radio input selected answer
  deselectAnswers();
  //Takes currentQuiz question from data
  const currentQuizData = quizData[currentQuiz];
  //Fill HTML with data
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

//Remove radio input selection from last question
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

//Finds last elm == checked
function getSelected() {
  //Answer's ID: a, b, c, d
  let answer;
  answerEls.forEach((answerEl) => {
    //Checks all answers, finds checked, take's it's ID from HTML
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  //Returns answer (that has the checked HTML's ID)
  return answer;
}

submitBtn.addEventListener("click", () => {
  //onclick NEXT => Find checked element's ID
  const answer = getSelected();
  //if there is an answer
  if (answer) {
    //and that answer is the same as data correct answer
    if (answer === quizData[currentQuiz].correct) {
      //than score +1
      score++;
    }
    //Else, if the answer is not correct, just change question
    currentQuiz++;

    //If there are more questions, load
    if (currentQuiz < quizData.length) {
      //Load next question
      loadQuiz();
    } else {
      //End of Quiz, Render to HTML, random quote and add some styling for displaying score
      quiz.innerHTML = `
            <h2 id="quote">${
              quotes[Math.floor(Math.random() * quotes.length)]
            }</h2>
            <h2>You answered ${score}/${quizData.length} (${
        (score / quizData.length) * 100
      }%) questions correctly!</h2>
            <button onclick="location.reload()">Reload</button>
           `;
      submitBtn.style.display = "none";
      container.style.backgroundImage = "url(../img/background-image.jpeg)";
      container.style.color = "white";
    }
  }
});

//Loads quiz on page load
loadQuiz();
