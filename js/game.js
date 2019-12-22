var characterScore = 0;
var characterScoreDisplay = document.getElementById("characterScore");


var character = localStorage.getItem("character");

var characterDisplay = document.getElementById("character");
characterDisplay.innerHTML = character;

var token = document.getElementById("token");
var characterClass = character.toLowerCase().replace(" ", "-");
token.classList.add(characterClass);

characterScoreDisplay.innerHTML = characterScore;


var dice = document.getElementById("dice");

dice.addEventListener("click", function() {
    
    var theDice = this;
    
    theDice.innerHTML = "Rolls";
    theDice.classList.add("rolling");

    setTimeout(function() {
        var diceRolling = Math.floor(Math.random() * 6) + 1;

        updateScore(diceRolling);
        moveToken();

        var diceClass = "dice" + diceRolling;

        theDice.classList = ""

        theDice.classList.add(diceClass);

        theDice.innerHTML = diceRolling;
        
        theDice.classList.remove("rolling");
    }, 500);
});

function updateScore(newRoll) {
    characterScore = characterScore + newRoll;
    updateScoreDisplay(characterScore);
}

function updateScoreDisplay(newScore) {
    characterScoreDisplay.innerHTML = newScore;
}

function moveToken() {
    var tiles = document.querySelectorAll(".tile");

    var totalTiles = tiles.length;

    if (characterScore > totalTiles - 1) {
        var scorePastTotal = characterScore - (totalTiles - 1);
        var recalculateScore = totalTiles - scorePastTotal;
        characterScore = recalculateScore;
        updateScoreDisplay(characterScore);
    }

    tiles.forEach(function(tile, indexOfTile) {

        var elementsInsideTile = tile.childNodes;

        elementsInsideTile.forEach(function(element) {
            if (element.id === "token") {
                element.remove();
            }
        });

        if (indexOfTile === characterScore) {

            var tokenOne = document.createElement("div");

            var characterClass = character.toLowerCase().replace(" ", "-");

            tokenOne.classList.add("token", characterClass);
            tokenOne.id = "token";

            tile.appendChild(tokenOne);

            if (characterScore === totalTiles - 1) {

                window.location.href = "winner.html";
            }
        }
    });

}
    