//DOM elements
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
const answerButtonA = document.getElementById("answer-a");
const answerButtonB= document.getElementById("answer-b");
const answerButtonC = document.getElementById("answer-c");
const answerButtonD = document.getElementById("answer-d");
const hero = document.getElementById("hero"); //start page box 
const quizBox = document.getElementById("quiz"); //quiz page box

let tracker = 0;//iteration tracker 

//event listener for start button 
startButton.addEventListener("click", function(){
  //add hidden class to hero-text
  hero.classList.add("hidden");
  //unhide quiz remove hidden class 
  quizBox.classList.remove("hidden");
  //trigger quiz function
  shuffleQueestions(quizQuestions);
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
    return quiz(quizQuestions);//return the shuffled array and call the quiz function 
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
    return tracker = tracker + 1; //iteration tracker
    //call timer fuction or simply return tracker updated value
  }else {
    //call score screen function to end quiz
  }
}

//function to check user answer for correctness 
function answerCheck() {
 //after answer check call the quiz function 
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
//console.log(tracker);

