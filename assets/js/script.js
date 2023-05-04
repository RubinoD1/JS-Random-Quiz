//DOM elements
const startButton = document.getElementById("start-button");
const answerButtonA = document.getElementById("answer-a");
const answerButtonB= document.getElementById("answer-b");
const answerButtonC = document.getElementById("answer-c");
const answerButtonD = document.getElementById("answer-d");

//event listener for start button 
startButton.addEventListener("click", function(){
  console.log("Hello");
  //add hidden class to hero-text
  //unhide quiz remove hidden class 
  //trigger quiz function
});



//nested array for the quiz questions/answers
const quiz = 
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
]
//quiz[0].validity[0] would be true -- access sample.
//console.log(quiz[0].validity[0]);