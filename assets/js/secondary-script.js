document.getElementById('go-back-btn').addEventListener("click", function() {
    history.back();
});

document.getElementById('clear-scores').addEventListener("click", function() {
    localStorage.clear();
})