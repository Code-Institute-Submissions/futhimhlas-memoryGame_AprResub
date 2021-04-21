$(document).ready(function(){
    let tiles = document.querySelectorAll(".tile-wrap"); // tiles returns all divs with the class tile-wrap as a NodeList which can then be acted upon like an array
    let gameBoard = $(".tile-board").children() //captures all divs of my gameboard which then allows for them to be shuffled

    let firstTile, secondTile; //Intializes variables to hold our two cards
    let hasFlippedTile = false;
    let boardLock = false;
    let turns = 0;
    let moveCount = $("#live-score");
    
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

        tileMatchCheck();
    }

    function tileMatchCheck(){
        if (firstTile.dataset.image === secondTile.dataset.image){
            removeTile();
            return;
        }

        unflipTiles();
    }

    function removeTile(){
        firstTile.removeEventListener("click", flipTiles);
        secondTile.removeEventListener("click", flipTiles);

        resetGameState();
    }

    function unflipTiles() {
        boardLock = true;
        setTimeout(function(){
            firstTile.classList.remove("flip-tile");
            secondTile.classList.remove("flip-tile");
            resetGameState();
        }, 1000)
    }

    function resetGameState(){
        hasFlippedTile = false;
        boardLock = false;
        firstTile = null;
        secondTile = null;
    }

    for(let i = 0; i < tiles.length; i++){
        tiles[i].addEventListener("click", flipTiles);
    }; // Calls flip tile function which then flips each tile as it is clicked
    
    function shuffle(a){ // Modified version of fischer yates shuffle. .before method handles moving the elements 
    let j;
    for (let i = 0; i < a.length; i++) {
        j = Math.floor(Math.random() * a.length);
        $(a[i]).before($(a[j]))
}
return this; // function works better with 'this' included
    };
shuffle(gameBoard);
/*function scoreUpdate(turns){
    document.getElementById("live-score") = " Score:" + turns;
    console.log(turns);
}*/
});



