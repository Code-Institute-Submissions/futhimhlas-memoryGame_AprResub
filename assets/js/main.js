$(document).ready(function(){
    let tiles = document.querySelectorAll(".tile-wrap"); // tiles returns all divs with the class tile-wrap as a NodeList which can then be acted upon like an array
    let gameBoard = $(".tile-board").children() //captures all divs of my gameboard which then allows for them to be shuffled
    
    function flipTiles(){
        this.classList.toggle("flip-tile");
    }

    for(let i = 0; i < tiles.length; i++){
        tiles[i].addEventListener("click", flipTiles)
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
});



