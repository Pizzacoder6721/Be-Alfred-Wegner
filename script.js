const progress = document.getElementById("progress");
const question = document.getElementById("questionNum")
let progressNum = 0;
let questionNum = 1;
const choiceBtn1 = document.getElementById("choiceButton1");
//Button logic
choiceBtn1.onclick = function(){
  if(questionNum == 1){
    questionNum += 1;
    progressNum += 1;
    progress.textContent = `${progressNum}% beliveability`
    question.text
  }
}
/*Just saying to make sure to make it += when adding progressNum because if you don't we can't check if a question never happened.
also we should make it so if you get a question wrong you lose a little believability.
*/
