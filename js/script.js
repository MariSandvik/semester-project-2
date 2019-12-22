fetch('https://anapioficeandfire.com/api/characters/583')
    .then(result => result.json())
  .then((res) => {
    createChOne(res);
  })
.catch(err => console.log(err))

function createChOne(result){
    var details = document.getElementById('ch-1');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/339')
    .then(result => result.json())
  .then((res) => {
    createChTwo(res);
  })
.catch(err => console.log(err))

function createChTwo(result){
    var details = document.getElementById('ch-2');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Died:   " + result.died + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/238')
    .then(result => result.json())
  .then((res) => {
    createChThree(res);
  })
.catch(err => console.log(err))

function createChThree(result){
    var details = document.getElementById('ch-3');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/232')
    .then(result => result.json())
  .then((res) => {
    createChFour(res);
  })
.catch(err => console.log(err))

function createChFour(result){
    var details = document.getElementById('ch-4');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Died:   " + result.died + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/640')
    .then(result => result.json())
  .then((res) => {
    createChFive(res);
  })
.catch(err => console.log(err))

function createChFive(result){
    var details = document.getElementById('ch-5');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/54')
    .then(result => result.json())
  .then((res) => {
    createChSix(res);
  })
.catch(err => console.log(err))

function createChSix(result){
    var details = document.getElementById('ch-6');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Died:   " + result.died + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/12')
    .then(result => result.json())
  .then((res) => {
    createChSeven(res);
  })
.catch(err => console.log(err))

function createChSeven(result){
    var details = document.getElementById('ch-7');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Died:   " + result.died + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/206')
    .then(result => result.json())
  .then((res) => {
    createChEight(res);
  })
.catch(err => console.log(err))

function createChEight(result){
    var details = document.getElementById('ch-8');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Culture: " + result.culture + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Died:   " + result.died + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/271')
    .then(result => result.json())
  .then((res) => {
    createChNine(res);
  })
.catch(err => console.log(err))

function createChNine(result){
    var details = document.getElementById('ch-9');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

fetch('https://anapioficeandfire.com/api/characters/1052')
    .then(result => result.json())
  .then((res) => {
    createChTen(res);
  })
.catch(err => console.log(err))

function createChTen(result){
    var details = document.getElementById('ch-10');
    details.innerHTML += "<span><h1>" + result.name + "</h1></span>";
    details.innerHTML += "<span> Gender:   " + result.gender + "</span>";
    details.innerHTML += "<span> Born:   " + result.born + "</span>";
    details.innerHTML += "<span> Titles:   " + result.titles + "</span>";
}

const characters = document.querySelectorAll(".character");

characters.forEach(function(character) {
        character.addEventListener("click", function() {
        console.log(this.id)
    });
});


var character = null;
var selectedCharacter = document.getElementById("selectCharacter");
var startButton = document.getElementById("startButton");

var allCharacters = document.querySelectorAll(".character");


allCharacters.forEach(function(player) {
    
    player.addEventListener("click", function() {

        var characterName = this.dataset.name;

        character = characterName;
        selectedCharacter.innerHTML = character;
        this.classList.add("select-character");

        localStorage.setItem("character", character);

        if(character !== null) {
            startButton.disabled = false;
        }
        else {
            startButton.disabled = true;
        }        
    })
})

startButton.addEventListener("click", function() {
    window.location.href = "game.html";
}) 
