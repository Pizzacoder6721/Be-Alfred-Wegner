const progress = document.getElementById("progress");
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
    progressNum += 1;
    progress.textContent = `${progressNum}% beliveability`
    questionNum.textContent =`Question ${questionAmount}/10`
  }
}

choiceBtn2.onclick = function(){
  if(questionAmount == 1){
    questionAmount += 1;
    progressNum -= 1;
    progress.textContent = `${progressNum}% beliveability`
    questionNum.textContent =`Question ${questionAmount}/10`
  }
}

choiceBtn3.onclick = function(){
  if(questionAmount == 1){
    questionAmount+= 1;
    progressNum -= 1;
    progress.textContent = `${progressNum}% beliveability`
    questionNum.textContent =`Question ${questionAmount}/10`
  }
}
/*Just saying to make sure to make it += when adding progressNum because if you don't we can't check if a question never happened.
also we should make it so if you get a question wrong you lose a little believability.
*/
