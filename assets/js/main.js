$(document).ready(function(){
    let tiles = document.querySelectorAll(".tile-wrap");
    console.log(tiles)
    
    function flipTiles(){
        this.classList.toggle("flip-tile");
    }

    for(let i = 0; i < tiles.length; i++){
        tiles[i].addEventListener("click", flipTiles)
    }; // Calls flip tile function which then flips each tile as it is clicked
});
// Generates list of all elements with the class tile and moves into our tiles constant

// Randomizes tile order

// Live update of users score

// Different time out speeds depending on  difficulty chosen

//live score update

// High score tracking for browser

// Stops additional cards from being if animation for first two cards is still running

// Double click protection

// Cards disappearing after being matched




