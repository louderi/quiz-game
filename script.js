let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice) {

document.getElementById("question")
      .innerText = questionText;

  document.getElementById("choice0")
      .innerText = choice1;
  document.getElementById("choice1")
      .innerText = choice2;
  document.getElementById("choice2")
      .innerText = choice3;
  document.getElementById("choice3")
      .innerText = choice4;
  correctChoice = function(){checkCorrect(this)};
  correctOne = correctChoice;

};

let doTheThing = function(){

  btn1.onclick = function(){checkCorrect(this)};
  btn2.onclick = function(){checkCorrect(this)};
  btn3.onclick = function(){checkCorrect(this)};
  btn4.onclick = function(){checkCorrect(this)};


  if(count === 1){
    createQuestion("Who am I?", "A computer", "A person", "A figment of my imagination", "A program", "A figment of my imagination");
    correctOne = btn3;
  } else if (count === 2 ){
    createQuestion("Who are you", "I don't know", "A robot", "A human", "A program ", "A robot");
    correctOne = btn2;
  } else if (count === 3){
    createQuestion("What do I like?", "Oil", "Nuts & Bolts", "Nothing", "Other programs", "Oil");
    correctOne = btn1;
  } else if (count === 4){
    createQuestion("Why are you here?", "To suffer", "No idea", "To torture you", "To have death", "To suffer");
    correctOne = btn1;
  }else {
    let question = document.getElementById("question");
    question.innerText = "You got " + (numRight-1) + " correct out of " + numQuestions;
    document.getElementById("buttons").innerHTML = " ";
  }

  document.getElementById("progress").innerText = "Question " + (count) + " of " + numQuestions;


};

let checkCorrect = function(button){

  if(button === correctOne){
    numRight++;
  }
  count++;
  doTheThing();
};