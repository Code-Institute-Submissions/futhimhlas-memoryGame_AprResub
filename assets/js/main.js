$(document).ready(function(){
    let tiles = document.querySelectorAll(".tile-wrap"); // tiles returns all divs with the class tile-wrap as a NodeList which can then be acted upon like an array
    let gameBoard = $(".tile-board").children() //captures all divs of my gameboard which then allows for them to be shuffled

    let firstTile, secondTile; //Intializes variables to hold our two cards
    let hasFlippedTile = false; //
    let boardLock = false; //When true, new cards cannot be clicked
    let turns = 0; // Live score tracker
    let endState = 0; //Keeps track of Game progress
    let resetButton = document.getElementById("reset-button") // Container for button housing reset
    
    function flipTiles(){
        if (boardLock) return;
        if(this === firstTile) return;
        this.classList.add("flip-tile");

        if (!hasFlippedTile){
            hasFlippedTile = true;
            firstTile = this;
            return;
        }

        secondTile = this;

        turns ++;
        scoreUpdate(turns);

        tileMatchCheck();
    }

    // tileMatchCheck checks to see if the two flipped cards have the same data attribute (same image)
    function tileMatchCheck(){
        if (firstTile.dataset.image === secondTile.dataset.image){
            removeTile();
            endState ++;
            endStateCheck(endState);
            return;
        }

        unflipTiles();
    }

    // removeTile() removes the eventListeners from the tile card, removing it from the game
    function removeTile(){
        firstTile.removeEventListener("click", flipTiles);
        secondTile.removeEventListener("click", flipTiles);

        resetGameState();
    }

    // unflipTiles() flips the tiles back over if a match isn't made
    function unflipTiles() {
        boardLock = true;
        setTimeout(function(){
            firstTile.classList.remove("flip-tile");
            secondTile.classList.remove("flip-tile");
            resetGameState();
        }, 1000)
    };
    // resetGameState allows the player to continue with the game after making a choice
    function resetGameState(){
        hasFlippedTile = false;
        boardLock = false;
        firstTile = null;
        secondTile = null;
    };

    // endStateCheck checks to see if all the pairs have been made. Once all have been made the winning modul pops up
    function endStateCheck(b){
        if(b === 8){
            document.getElementById("modal").style.display="block";
        };
    };

    // gameReady adds the click event listeners to every tile, allowing for the game to start.
    function gameReady(){
        for(let i = 0; i < tiles.length; i++){
        tiles[i].addEventListener("click", flipTiles); // Calls flip tile function which then flips each tile as it is clicked
    }; 
};

    
    function shuffle(a){ // Modified version of fischer yates shuffle. .before method handles moving the elements 
    let j;
    for (let i = 0; i < a.length; i++) {
        j = Math.floor(Math.random() * a.length);
        $(a[i]).before($(a[j]));
}
return this; // function works better with 'this' included
    };
shuffle(gameBoard);

// scoreUpdate updates both the final modal and the live score screen
function scoreUpdate(a){
    document.getElementById("live-score").innerHTML = " Moves: " + a;
    document.getElementById("end-score").innerHTML = a
};


resetButton.addEventListener("click", gameReset);
function gameReset(){
    location.reload();
}
gameReady();

});



