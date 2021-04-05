var $timer = document.getElementById('timer');


// Start time for quiz that will count down from 60
function timer() {
  timeLeft = 60;

  var timeInt = setInterval(function() {
      if (timeLeft > 1) {
          $timer.textContent = "Time: " + timeLeft;
          timeLeft--;
      }
  }, 1000)

}
