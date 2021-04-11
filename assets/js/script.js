var $timer = document.getElementById('timer');
var timer = null;
var timeLeft = 45;
var $currentQuestion = document.getElementById('question');
var $startBtn = document.getElementById('btn');
var $correctbox = document.getElementById('correct-box');
var score = 0; 
var $ans1 = document.getElementById('ans-btn1');
var $ans2 = document.getElementById('ans-btn2');
var $ans3 = document.getElementById('ans-btn3');
$correctbox.style.visibility = 'hidden';
$ans1.style.visibility = 'hidden';
$ans2.style.visibility = 'hidden';
$ans3.style.visibility = 'hidden';




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
    $correctbox.style.visibility = 'visible';
    questionTwo();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
    questionTwo();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
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
    $correctbox.style.visibility = 'visible';
    questionThree();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
    questionThree();
  } 

  $ans3.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    $correctbox.style.visibility = 'visible';
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
    $correctbox.style.visibility = 'visible';
    questionFour();
  }

  $ans2.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    $correctbox.style.visibility = 'visible';
    questionFour();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
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
    $correctbox.style.visibility = 'visible';
    questionFive();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
    questionFive();
  } 

  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
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
    $correctbox.style.visibility = 'visible';
    questionSix();
  }

  $ans2.onclick = function() {
    score++;
    $correctbox.textContent = "Correct!";
    $correctbox.style.visibility = 'visible';
    questionSix();
  }
  
  $ans3.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
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
    $correctbox.style.visibility = 'visible';
    endQuiz();
    endTimer();
  }

  $ans2.onclick = function() {
    timeLeft -= 5;
    $correctbox.textContent = "Incorrect!";
    $correctbox.style.visibility = 'visible';
    endQuiz();
    endTimer();
  }
}

// Function that starts the quiz when start is clicked
function startQuiz() {
  $ans1.style.visibility = 'visible';
  $ans2.style.visibility = 'visible';
  $ans3.style.visibility = 'visible';
  startTimer();
  questionOne();
}

// Creates elements for storing data, stores in localStorage, then displays on scores page
function endQuiz() {
  $correctbox.style.visibility = 'hidden';
  $ans1.remove();
  $ans2.remove();
  $ans3.remove();
  
  $currentQuestion.textContent = `All finished! You scored ${score}/6 correct!`;
  var $endQuiz = document.createElement('div');
  $endQuiz.id = "end-quiz";
  var $endQuizP = document.createElement('h3');
  $endQuizP.id = "end-quiz-p";
  var $endQuizInput = document.createElement('input');
  $endQuizInput.id = "end-quiz-input";
  var $endQuizBtn = document.createElement('button');
  $endQuizBtn.id = "end-quiz-btn";

  $endQuizP.textContent = "Please enter your initials to record your score:";
  $endQuizInput.setAttribute("type", "text");
  $endQuizBtn.textContent = "Submit";
  $endQuiz.appendChild($endQuizP);
  $endQuiz.appendChild($endQuizInput);
  $endQuiz.appendChild($endQuizBtn);
  document.getElementById("end-quiz-box").appendChild($endQuiz)

  $endQuizBtn.onclick = function() {
    location.href = "./score-page.html"
    var scoreStorage = {
      initials: $endQuizInput.value,
      score: score
    };
    localStorage.setItem("Name and Score", JSON.stringify(scoreStorage));
    var scoreStorageRetrieve = JSON.parse(localStorage.getItem("Name and Score"));
    console.log(scoreStorageRetrieve);
    var scoreStorageDisplay = document.createTextNode(scoreStorageRetrieve);
    
    //Shows scores on scores html page
    var $scoreList = document.querySelector('#score-list');
    var $scoreListItem = document.createElement('li');
    $scoreListItem.textContent = scoreStorageDisplay;
    $scoreList.appendChild($scoreListItem);
    
    location.href = "./score-page.html"
  }
}

// Start time for quiz that will count down from 60
function startTimer() {
  var timer = setInterval(function() {
      if (timeLeft > 1) {
          $timer.textContent = "Time: " + timeLeft;
          timeLeft--;
      } else {
          $timer.textContent = "Time is up!";
          clearInterval(timer);
          endQuiz();
      }
  }, 1000)
}

// to stop timer when user completes quiz before time is up
function endTimer() {
  clearInterval(timer)
};

// Button to start quiz
document.getElementById('btn').addEventListener("click", function(){
  $startBtn.style.visibility='hidden';
  startQuiz();
});


