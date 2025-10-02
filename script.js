const progress = document.getElementById("progress");
const questionNum = 1;
const choiceBtn1 = document.getElementById("choiceButton1");
let progressNum;

choiceBtn1.onclick = function(){
  if(questionNum == 1){
    progressNum = 1;
    progress.textContent = `{progressNum}% beliveability`
  }
}
