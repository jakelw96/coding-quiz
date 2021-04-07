var $timer = document.getElementById('timer');
var timeLeft = 60;


// array of questions
var quizQuestions = [
  {
    question1: "What is the term used for when water vapor is converted back into liquid water?",
    answers: {
       a: "Evaporation",
       b: "Condensation",
       c: "Precipitation"
    },
    correctAnswer: "b"
  },
  {
    question2: "What destructive storm forms over the ocean and then makes landfall in coastal states?",
    answers: {
       a: "Hurricane",
       b: "Tornado",
       c: "Squall"
    },
    correctAnswer: "a"
  },
  {
    question3: "What is the type of storm that spawns a funnel shaped cloud and very strong winds?",
    answers: {
       a: "Snow storm",
       b: "Dust-devil",
       c: "Tornado"
    },
    correctAnswer: "c"
  },
  {
    question4: "What type of cloud is most common and generally doesn't bring rain?",
    answers: {
       a: "Cumulus",
       b: "Cirrus",
       c: "Stratus"
    },
    correctAnswer: "a"
  },
  {
    question5: "What type of destructive storm is generally formed in the winter and usually brings high winds and white-out conditions?",
    answers: {
       a: "Squall",
       b: "Blizzard",
       c: "Monsoon"
    },
    correctAnswer: "b"
  },
  {
    question6: "What comes first: lightning or thunder?",
    answers: {
      a: "lightning",
      b: "thunder"
    },  
  }    
];

// Score at start of quiz
var score = 0;



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
  $question = document.getElementById("question");
  $question.textContent = ;
  console.log($question);


}



document.getElementById("btn").addEventListener("click", startQuiz);
