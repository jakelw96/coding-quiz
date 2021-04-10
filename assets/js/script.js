var $timer = document.getElementById('timer');
var timeLeft = 10;
var $currentQuestion = document.getElementById('question');
//var $startBtn = document.getElementById('btn');
var $correctbox = document.getElementById('correct-box');
var score = 0; 
var $ans1 = document.getElementById('ans-btn1');
var $ans2 = document.getElementById('ans-btn2');
var $ans3 = document.getElementById('ans-btn3');


// array of questions for the quiz
var quizQuestions = [
  {
    question: "1. What is the term used for when water vapor is converted back into liquid water?",
    answers: {
       a: "Evaporation",
       b: "Condensation",
       c: "Precipitation"
    }
  },
  {
    question: "2. What destructive storm forms over the ocean and then makes landfall in coastal states?",
    answers: {
       a: "Squall",
       b: "Tornado",
       c: "Hurricane"
    }
  },
  {
    question: "3. What is the type of storm that spawns a funnel shaped cloud and very strong winds?",
    answers: {
       a: "Snow storm",
       b: "Tornado",
       c: "Dust-devil"
    }
  },
  {
    question: "4. What type of cloud is most common and generally doesn't bring rain?",
    answers: {
       a: "Cumulus",
       b: "Cirrus",
       c: "Stratus"
    }
  },
  {
    question: "5. What type of destructive storm is generally formed in the winter and usually brings high winds and white-out conditions?",
    answers: {
       a: "Squall",
       b: "Blizzard",
       c: "Monsoon"
    }
  },
  {
    question: "6. What comes first: lightning or thunder?",
    answers: {
      a: "Lightning",
      b: "Thunder"
    }
  }    
];

// Question one function from quizQuestions
function questionOne() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[0].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[0].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[0].answers.b));
  $ans3.textContent = JSON.parse(JSON.stringify(quizQuestions[0].answers.c));
  
  $ans1.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    questionTwo();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionTwo();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionTwo();
  } 
  console.log(score)
}

// Question two function from quizQuestions
function questionTwo() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[1].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[1].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[1].answers.b));
  $ans3.textContent = JSON.parse(JSON.stringify(quizQuestions[1].answers.c));
  
  $ans1.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionThree();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionThree();
  } 

  $ans3.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    questionThree();
  }
  console.log(score);
}

// Question three function from quizQuestions
function questionThree() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[2].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[2].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[2].answers.b));
  $ans3.textContent = JSON.parse(JSON.stringify(quizQuestions[2].answers.c));
  
  $ans1.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionFour();
  }

  $ans2.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    questionFour();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionFour();
  }
  console.log(score)
}



// Question four function from quizQuestions
function questionFour() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[3].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[3].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[3].answers.b));
  $ans3.textContent = JSON.parse(JSON.stringify(quizQuestions[3].answers.c));
  
  $ans1.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    questionFive();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionFive();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionFive();
  }
}

// Question five function from quizQuestions
function questionFive() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[4].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[4].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[4].answers.b));
  $ans3.textContent = JSON.parse(JSON.stringify(quizQuestions[4].answers.c));
  
  $ans1.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionSix();
  }

  $ans2.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    questionSix();
  }
  
  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    questionSix();
  }
}

// Question six function from quizQuestions
function questionSix() {
  $currentQuestion.textContent = JSON.parse(JSON.stringify(quizQuestions[5].question));
  $ans1.textContent = JSON.parse(JSON.stringify(quizQuestions[5].answers.a));
  $ans2.textContent = JSON.parse(JSON.stringify(quizQuestions[5].answers.b));
  $ans3.remove();
  
  $ans1.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    endQuiz();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    endQuiz();
  }
}

// Function that starts the quiz when start is clicked
function startQuiz() {
  timer();
  questionOne();
}

function endQuiz() {
  document.getElementById('btn').style.visibility = 'visible';
  
}











// Start time for quiz that will count down from 60
function timer() {
  var timeInt = setInterval(function() {
      if (timeLeft > 1) {
          $timer.textContent = "Time: " + timeLeft;
          timeLeft--;
      } else {
          $timer.textContent = "Time is up!";
          clearInterval(timeInt);
          endQuiz();
      }
  }, 1000)

}





document.getElementById('btn').addEventListener("click", function(){
  document.getElementById('btn').style.visibility='hidden';
  startQuiz();
});
