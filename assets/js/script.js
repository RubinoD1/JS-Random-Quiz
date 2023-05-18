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
  //add hidden class to hero-text
  hero.classList.add("hidden");
  //unhide quiz remove hidden class 
  quizBox.classList.remove("hidden");
  //trigger quiz function
  shuffleQueestions(quizQuestions);
  quiz();
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

//answer buttons event listener 
//set answer button user click to userAnswer var and call the validity function with the var
answerButtonA.addEventListener("click", function() {
  let userAnswer = document.getElementById("answer-a").innerHTML; 
  //console.log(userAnswer);
  answerCheck(userAnswer);
}); 





//Using the Fisher Yates shuffle to randomize the quiz questions 
function shuffleQueestions(quizQuestions) {
  let oldElement; //holds reference to the current element in the loop 
  for (let i = quizQuestions.length - 1; i > 0; i--) {//iterate through the array starting at the last element.
    let rand = Math.floor(Math.random() * (i + 1));//used to randomize the selected array element
    oldElement = quizQuestions[i];//last element in array
    quizQuestions[i] = quizQuestions[rand];//put the selected array element in a random place
    quizQuestions[rand] = oldElement;//put the randomly slected array element in the place of the index
  }
    return quizQuestions;//return the shuffled array and call the quiz function 
} 
 


//function to select quiz question and add info to HTML page
function quiz() {
  if(tracker < quizQuestions.length){
    //HTML text info 
    question.textContent = quizQuestions[tracker].question;
    answerButtonA.textContent = quizQuestions[tracker].answers[0];
    answerButtonB.textContent = quizQuestions[tracker].answers[1];
    answerButtonC.textContent = quizQuestions[tracker].answers[2];
    answerButtonD.textContent = quizQuestions[tracker].answers[3];
    return;
    //call timer fuction or simply return tracker updated value
  }else {
    //No more questions, hide quiz layout
    quizBox.classList.add("hidden");
    //unhide score screen remove hidden class 
    scoreScreen.classList.remove("hidden");
    //user score results
    results.textContent = `${score}` + " / " + `${quizQuestions.length}`; 
    //call score screen function to end quiz
  }
}

//function to check user answer for correctness 
function answerCheck(userAnswer) {
 //after answer check call the quiz function 
 console.log(tracker);
 if (userAnswer === quizQuestions[tracker].correct){
  tracker = tracker + 1; //iteration tracker
  score = score + 1; //add to user score 
  //console.log("Correct!");
  quiz();
 } else {
  //console.log("Incorrect :(");
  tracker = tracker + 1; //iteration tracker
  quiz();
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
//quizQuestions[0].correct[0] would be A -- access sample.
//console.log(quizQuestions[0].correct[0]);

