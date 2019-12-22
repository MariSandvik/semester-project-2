var character = localStorage.getItem("character");

var characterDisplay = document.getElementById("character");
characterDisplay.innerHTML = "You won! The winner is "  + character;