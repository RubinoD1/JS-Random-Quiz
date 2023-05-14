//DOM elements
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
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

 // remove selected from array choices 


 //if not empty display array info -- else go to score screen 

  //HTML text info 
  question.textContent = quizQuestions[0].question;
  answerButtonA.textContent = quizQuestions[0].answers[0];
  answerButtonB.textContent = quizQuestions[0].answers[1];
  answerButtonC.textContent = quizQuestions[0].answers[2];
  answerButtonD.textContent = quizQuestions[0].answers[3];
  //answerButtonD.textContent = quizQuestions[0].answers[3];
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
//console.log(quizQuestions[0]);

//Random select from array 
//console.log(quizQuestions[Math.floor(Math.random()*quizQuestions.length)]);