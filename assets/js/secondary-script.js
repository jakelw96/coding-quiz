var $scoreList = document.createElement("ul");

function retrieveScores() {
    var scoreStorageRetrieve = JSON.parse(localStorage.getItem("Name and Score"));

    if (scoreStorageRetrieve) {
        //Shows scores on scores html page
        $scoreList.id = "score-list"
        var $scoreListItem = document.createElement('li');
        $scoreListItem.id = "score-list-item";
        $scoreListItem.textContent = ("Initials: " + scoreStorageRetrieve.initials + " " + "Score: " + scoreStorageRetrieve.score);
        $scoreList.appendChild($scoreListItem);
        document.getElementById("score-storage").appendChild($scoreList)
    } else {
        var $message = document.createElement("h2");
        $message.textContent = "No high scores yet! Be the first!"
        document.getElementById("score-storage").appendChild($message)
    }
};

retrieveScores()

document.getElementById('go-back-btn').addEventListener("click", function() {
    history.back();
});

document.getElementById('clear-scores').addEventListener("click", function() {
    localStorage.clear();
    $scoreList.remove();
    retrieveScores();
});