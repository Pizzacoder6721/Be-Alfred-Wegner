const progress = document.getElementById("progress");
const questionNum = 1;
const choiceBtn1 = document.getElementById("choiceButton1");
let progressNum = 0;
//Button logic
choiceBtn1.onclick = function(){
  if(questionNum == 1){
    progressNum += 1;
    progress.textContent = `${progressNum}% beliveability`
  }
}
/*Just saying to make sure to make it += when adding progressNum because if you don't we can't check if a question never happened.
also we should make it so if you get a question wrong you lose a little believability.
*/
