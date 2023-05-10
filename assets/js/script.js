//DOM elements
const startButton = document.getElementById("start-button");
const answerButtonA = document.getElementById("answer-a");
const answerButtonB= document.getElementById("answer-b");
const answerButtonC = document.getElementById("answer-c");
const answerButtonD = document.getElementById("answer-d");
const hero = document.getElementById("hero"); //start page box 
const quizBox = document.getElementById("quiz"); //quiz page box

//event listener for start button 
startButton.addEventListener("click", function(){
  //add hidden class to hero-text
  hero.classList.add("hidden");
  //unhide quiz remove hidden class 
  quizBox.classList.remove("hidden");
  //trigger quiz function
  quiz();
});

//function to select quiz question and add info to HTML page
function quiz() {
  console.log("hello");
}











//nested array for the quiz questions/answers
const quizQuestions = 
[
  {
    question: "This is question 1?",
    answers: ["A", "B", "C", "D"],
    validity: [true, false, false, false]
  },
  {
    question: "This is question 2?",
    answers: ["A", "B", "C", "D"],
    validity: [false, true, false, false]
  },
  {
    question: "This is question 3?",
    answers: ["A", "B", "C", "D"],
    validity: [false, false, true, false]
  }  
];
//quizQuestions[0].validity[0] would be true -- access sample.
//console.log(quizQuestions[0].validity[0]);