var $timer = document.getElementById('timer');
var timeLeft = 10;

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
