# JS-Random-Quiz
A JavaScript built random quiz app. 

GitHub repository:https://github.com/RubinoD1/JS-Random-Quiz
GitHub live page:

Splash page background image: https://picography.co/


## pseudo code

Current to-do 
1. array.length is score total and score is answered correctly 
- displaying correctly on score screen

2. Make score function 

3. Replay button 
- add Dom element 
- reset score 
- hide score screen, unhide quizBox
- run shuffle function again (Add shuffled or same quiz options?)

-- General check list --- 

Quiz function 
- if/else statement
if i < array.length 
display next question

else go to score screen 

- need a var to track iteration place (could double on the score page for how many questions the quiz was).

Answer validation 
- event listener for answer button clicks 
- pass in button click and check if true 


Score screen 
- create html for score screen 
Score title 
answered correctly / questions asked 

- create score function to trigger in the quiz else statement 




Title on top and button in middle-- button larger and prominent

Make layout for quiz itself
- flash green if correct, red if false (could flash the selected button, or the background itslef, experiment to see what looks better). 
- Timer box? 
- Score, or how many correct at end of quiz (4/10). 




General 
- local storage to save scores? 
- Replay button? 
- Selectable time ranges (60, 30, 15) with increased score for harder. 
- Footer with GitHub info? 
- Rename to quiz game? 


