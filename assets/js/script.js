var $timer = document.getElementById('timer');
var timeLeft = 60;
var $currentQuestion = document.getElementById('question');
var $startBtn = document.getElementById('btn');
var score = 0; 
var $ans1 = document.getElementById('ans-btn1');
var $ans2 = document.getElementById('ans-btn2');
var $ans3 = document.getElementById('ans-btn3');


// array of questions
var quizQuestions = [
  {
    question: "What is the term used for when water vapor is converted back into liquid water?",
    answers: {
       a: "Evaporation",
       b: "Condensation",
       c: "Precipitation"
    }
  },
  {
    question: "What destructive storm forms over the ocean and then makes landfall in coastal states?",
    answers: {
       a: "Hurricane",
       b: "Tornado",
       c: "Squall"
    }
  },
  {
    question: "What is the type of storm that spawns a funnel shaped cloud and very strong winds?",
    answers: {
       a: "Snow storm",
       b: "Dust-devil",
       c: "Tornado"
    }
  },
  {
    question: "What type of cloud is most common and generally doesn't bring rain?",
    answers: {
       a: "Cumulus",
       b: "Cirrus",
       c: "Stratus"
    }
  },
  {
    question: "What type of destructive storm is generally formed in the winter and usually brings high winds and white-out conditions?",
    answers: {
       a: "Squall",
       b: "Blizzard",
       c: "Monsoon"
    }
  },
  {
    question: "What comes first: lightning or thunder?",
    answers: {
      a: "lightning",
      b: "thunder"
    }
  }    
];

function questionOne() {
  $currentQuestion.textContent = JSON.stringify(quizQuestions[0].question);
  $ans1.textContent = JSON.stringify(quizQuestions[0].answers.a);
  $ans2.textContent = JSON.stringify(quizQuestions[0].answers.b);
  $ans3.textContent = JSON.stringify(quizQuestions[0].answers.c);
  
  $ans1.onclick = function() {
    score++;
    console.log("correct!");
    console.log(score);
    //questionTwo();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    console.log("INCORRECT!");
    console.log(score);
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    console.log("INCORRECT!");
    console.log(score);
  } 
}

function questionTwo() {
  $currentQuestion.textContent = JSON.stringify(quizQuestions[1].question);
  $ans1.textContent = JSON.stringify(quizQuestions[1].answers.a);
  $ans2.textContent = JSON.stringify(quizQuestions[1].answers.b);
  $ans3.textContent = JSON.stringify(quizQuestions[1].answers.c);
  
  $ans1.onclick = function() {
    score++;
    console.log("correct!");
    console.log(score);
    
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    console.log("INCORRECT!");
    console.log(score);
    
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    console.log("INCORRECT!");
    console.log(score);
    
  } 
}

var questionArray = [];
questionArray.push(questionOne);
questionArray.push(questionTwo);



// Start time for quiz that will count down from 60
function timer() {
  var timeInt = setInterval(function() {
      if (timeLeft > 1) {
          $timer.textContent = "Time: " + timeLeft;
          timeLeft--;
      } else {
          $timer.textContent = "Time is up!";
          clearInterval(timeInt);
      }
  }, 1000)

}

function startQuiz() {
  timer();

  for (var i = 0; questionArray.length; ++i) {
    questionArray[i]();
  }
  
  
  
  



  
  


}



$startBtn.addEventListener("click", function(){
  $startBtn.remove();

  startQuiz();
});
