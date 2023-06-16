//DOM elements
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
const answerButtonA = document.getElementById("answer-a");
const answerButtonB= document.getElementById("answer-b");
const answerButtonC = document.getElementById("answer-c");
const answerButtonD = document.getElementById("answer-d");
const hero = document.getElementById("hero"); //start page box 
const quizBox = document.getElementById("quiz"); //quiz page box
const scoreScreen = document.getElementById("score"); //score paage box 
const results = document.getElementById("user-score"); //user score 
const replay = document.getElementById("replay-button");

let tracker = 0;//iteration tracker 
let score = 0; //user score tracker

//event listener for start button 
startButton.addEventListener("click", function(){
  hero.classList.add("hidden"); //add hidden class to hero (start screen)
  quizBox.classList.remove("hidden"); //unhide quiz by removing the hidden class 
  shuffleQueestions(quizQuestions); //shuffle the quizQuestions array
  quiz(); //trigger quiz function
});

//reshuffle array and begin the quiz 
replay.addEventListener("click", function(){
  score = 0; //reset the user score 
  tracker = 0; //reset iteration
  scoreScreen.classList.add("hidden"); //hide the score screen 
  quizBox.classList.remove("hidden"); //unhide quiz 
  shuffleQueestions(quizQuestions); //reshuffle array
  quiz(); //begin the quiz 
})

//answer buttons event listeners 
//set answer button user click to userAnswer var and call the validity function with the var passed in
answerButtonA.addEventListener("click", function() {
  let userAnswer = document.getElementById("answer-a").innerHTML; 
  answerCheck(userAnswer);
}); 

answerButtonB.addEventListener("click", function() {
  let userAnswer = document.getElementById("answer-b").innerHTML; 
  answerCheck(userAnswer);
}); 

answerButtonC.addEventListener("click", function() {
  let userAnswer = document.getElementById("answer-c").innerHTML; 
  answerCheck(userAnswer);
}); 

answerButtonD.addEventListener("click", function() {
  let userAnswer = document.getElementById("answer-d").innerHTML; 
  answerCheck(userAnswer);
}); 


//Using the Fisher-Yate's Shuffle to randomize the quiz questions 
function shuffleQueestions(quizQuestions) {
  let lastElement; //used in the iteration process to hold the last element in the array. 
  for (let i = quizQuestions.length - 1; i > 0; i--) {//iterate through the array reducing its length by 1 untill the first element is reached
    let rand = Math.floor(Math.random() * (i + 1));//used to randomly select an array element
    lastElement = quizQuestions[i];//value is the last element in array
    quizQuestions[i] = quizQuestions[rand];//randomly choose a array element
    quizQuestions[rand] = lastElement;//put the randomly slected array element in the place of the index
  }
    return quizQuestions;//return the shuffled array  
} 
 

//function to select quiz question and add info to HTML page
function quiz() {
    //reset bg color to default (it is altered when an answer is selected) 
    document.body.style.backgroundColor = "#135473"; 
  if(tracker < quizQuestions.length){
    //HTML text info 
    question.textContent = quizQuestions[tracker].question;
    answerButtonA.textContent = quizQuestions[tracker].answers[0];
    answerButtonB.textContent = quizQuestions[tracker].answers[1];
    answerButtonC.textContent = quizQuestions[tracker].answers[2];
    answerButtonD.textContent = quizQuestions[tracker].answers[3];
    return;
  }else {
    quizBox.classList.add("hidden");//No more questions, hide quiz layout
    scoreScreen.classList.remove("hidden");//unhide score screen 
    results.textContent = `${score}` + " / " + `${quizQuestions.length}`;  //user score results
  }
}


//function to check user answer for correctness 
function answerCheck(userAnswer) {
  if (userAnswer === quizQuestions[tracker].correct){
    document.body.style.backgroundColor = "#008000"; //change bg color  
    question.textContent = "Correct!"; //Change question HTML to correct
    tracker = tracker + 1; //iteration tracker
    score = score + 1; //add to user score 
    setTimeout(() => {quiz();}, 1000); //call the quiz function after 1 sec. The delay is for the bg color change. 
  } else {
    document.body.style.backgroundColor = "#d91e10";//change bg color 
    question.textContent = "Incorrect :("; //Change question HTML to incorrect
    tracker = tracker + 1; //iteration tracker
    setTimeout(() => {quiz();}, 1000);
  }
}

//nested array for the quiz questions/answers
const quizQuestions = 
[
  {
    question: "This is question 1?",
    answers: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    question: "This is question 2?",
    answers: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    question: "This is question 3?",
    answers: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    question: "This is question 4?",
    answers: ["A", "B", "C", "D"],
    correct: "D"
  }  
];

