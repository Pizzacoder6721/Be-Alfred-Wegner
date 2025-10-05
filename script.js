/*








check out this:
https://pizzacoder6721.github.io/sprite-practice/

this is definitly not self-promo




*/
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
    questionAmount += 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse";
  }
  else if(questionAmount == 3){
    questionAmount  += 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok but that isn't enough to prove anything, give some more evidence";
    choiceBtn1.textContent = "Native americans got here before advanced boats";
    choiceBtn2.textContent = "Penguin fossils were found in wyoming";
    choiceBtn3.textContent = "Fossils are found in continents really far away from eachother";
  }
  else if(questionAmount == 4){
    questionAmount += 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok, but this theory is still too stupid";
    choiceBtn1.textContent = "Evidence of glaciers were found nere the equator, which shouldn't be possible due to the heat"
    choiceBtn2.textContent = "How else would the clouds move"
    choiceBtn3.textContent = "There are European elaphants and Asian ones"
  }
  else if(questionAmount == 5){
    questionAmount += 1;
    progressNum += 6;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Your theory is getting more believable";
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
    questionAmount += 1;
    progressNum += 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse";
  }
  else if(questionAmount == 3){
    questionAmount += 1;
    progressNum += 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok but that isn't enough to prove anything";
    choiceBtn1.textContent = "Native americans got here before advanced boats";
    choiceBtn2.textContent = "Penguin fossils were found in wyoming";
    choiceBtn3.textContent = "Fossils are found in continents really far away from eachother";
  }
  else if(questionAmount == 4){
    questionAmount += 1;
    progressNum -= 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok, but this theory is still too stupid";
    choiceBtn1.textContent = "Evidence of glaciers were found nere the equator, which shouldn't be possible due to the heat";
    choiceBtn2.textContent = "How else would the clouds move";
    choiceBtn3.textContent = "There are European elaphants and Asian ones";
  }
  else if(questionAmount == 5){
    questionAmount += 1;
    progressNum -= 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "put question here";
  }
}

choiceBtn3.onclick = function(){
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
    questionAmount += 1;
    progressNum -= 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "What was it like before";
    choiceBtn1.textContent = "A whole bunch of islands";
    choiceBtn2.textContent = "A supercontinent";
    choiceBtn3.textContent = "Mickey mouse land";
  }
  else if(questionAmount == 3){
    questionAmount += 1;
    progressNum -= 5;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok but that isn't enough to prove anything";
    choiceBtn1.textContent = "Native americans got here before advanced boats";
    choiceBtn2.textContent = "Penguin fossils were found in wyoming";
    choiceBtn3.textContent = "Fossils are found in continents really far away from eachother";
  }
  else if(questionAmount == 4){
    questionAmount += 1;
    progressNum += 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "Ok, but this theory is still too stupid";
    choiceBtn1.textContent = "Evidence of glaciers were found nere the equator, which shouldn't be possible due to the heat"
    choiceBtn2.textContent = "How else would the clouds move"
    choiceBtn3.textContent = "There are European elaphants and Asian ones"
  }
  else if(questionAmount == 5){
    questionAmount += 1;
    progressNum -= 3;
    progress.textContent = `${progressNum}% beliveability`;
    questionNum.textContent =`Question ${questionAmount}/10`;
    question.textContent = "put question here";
  }
}
/*Heres some ifromation that can be used for questions.
  1.
ancient coal-forming swamps (requiring tropical conditions) were found in frigid regions. This suggested that continents had moved to different climatic zones over time. 
  */
