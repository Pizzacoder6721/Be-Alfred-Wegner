const progress = document.getElementById("progress");
const questionn = document.getElementById("question")
const questionNum = document.getElementById("questionNum")

let progressNum = 0;
let questionAmount = 1;

const choiceBtn1 = document.getElementById("choiceButton1");
const choiceBtn2 = document.getElementById("choiceButton2");
const choiceBtn3 = document.getElementById("choiceButton3");
//Button logic

choiceBtn1.onclick = function(){
  if(questionAmount == 1){
    questionAmount += 1;
    progressNum += 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    choiceBtn1.textContent = "Tornado's pull it each year";
    choiceBtn2.textContent = "The earth's rotation";
    choiceBtn3.textContent = "Ocean currents push the land";
  }
  else if(questionAmount == 2){
    questionAmount+= 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse";
  }
  else if(questionAmount == 3){
    questionAmount+= 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "need qeustion rn";
  }
}

choiceBtn2.onclick = function(){
  if(questionAmount == 1){
    questionAmount += 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What do you think causes it?(what wegner thought, not actual answer)";
    choiceBtn1.textContent = "Tornado's pull it each year";
    choiceBtn2.textContent = "The earth's rotation";
    choiceBtn3.textContent = "Ocean currents push the land";
  }
  else if(questionAmount == 2){
    questionAmount+= 1;
    progressNum += 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse";
  }
  else if(questoinAmount == 3){
    questionAmount+= 1;
    progressNum += 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "put question here";
  }
}

choiceBtn3.onclick = function(){
  if(questionAmount == 1){
    questionAmount+= 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What do you think causes it?(what wegner thought, not actual answer)";
    choiceBtn1.textContent = "Tornado's pull it each year";
    choiceBtn2.textContent = "The earth's rotation";
    choiceBtn3.textContent = "Ocean currents push the land";
  }
  else if(questionAmount == 2){
    questionAmount+= 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse";
  }
  else if(questionAmount == 3){
    questionAmount+= 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "need qeustion rn";
  }
}
/*Just saying to make sure to make it += when adding progressNum because if you don't we can't check if a question never happened.
also we should make it so if you get a question wrong you lose a little believability.
*/
