# Milestone Project II: Interactive Memory Game
This project aims to showcase my skills in JS and jQuery by creating an interactive memory game. The game is simple in concept. 16 tiles will display face down and their 'up' face will only reveal for a short period
after being clicked by the user. 8 images will be distributed between the 16 tiles and the aim of the game is to match all 8 images with their partner. Once all matches have been made users will have won the game.
The game is a test of memory and is meant to be enjoyed through desktop browsers.

## UX
The page has a simple web structure that stays consistent across mobile and desktop devices. A live score tracker will also be visible to plays as the game progresses. At the end of the game
a hidden html element will display itself allowing for the user to restart their game via a button. The CSS and layout has been layed out this way so that all tiles should be visible without scrolling regardless of 
the dimensions of the device in use (except for a landscape mobile). Only one navigation button shall be present and that will be upon game completion. JS will be used here to control the logic and responsivity of this.

## User Stories
As a user, I would like to be engaged as I play the game.
* This will be achieved by the flip effect present on every click on a tile. 

As a user, I would like to know my score as my game progresses.
* A live score tracker will update every time the user completes a move.

As a user, I would like to be rewarded for 'winning' the game
* A HTML element congratulating users on completing the game will appear as users finish the game.

## Purpose and Value
The purpose of my website is for users to have a fun, short experience that can be enjoyed

## Features
### Load In
* The page will only render images after the are all ready to be displayed. This should stop users from seeing 'behind' tiles before the game starts.

### Flip animation
* The flip animation after selection adds more interactivity to the page. This visually appealing motion should also help retains user attention.

### Restart
* Upon completing the game, users are able to restart the game for another try.

### Shuffle 
* When the page loads, the position of my divs shuffle. This increases the sites longevity as users can play the game multiple times.

### Matching tiles
* Tiles only have one match and will only remain face-up if their match has been found. My code is also built to protect against 3 tiles being clicked in quick succession or one tile being 
clicked more than once.

## Features left to Implement
I would like to implement increasing difficulty levels. This would be done by having buttons present on my site inbetween the opening paragraph and the game board.
By clicking on the buttons users could change the game board size or change the speed at which the tiles turn over. The faster they turn over and the bigger the board gets; the harder the game gets.
Another feature I would have liked to implement is a better restart tool. Instead of reloading the page, I would've like to build a function that resets the game state compleetly without
reloading the page. Another reset button could be added before the end game pop-in in case users make a mistake and would like to restart.

## Wireframes
My project is based on this initial wireframe mockup which can be found in this repository under the [wireframes directory](assets/wireframe/Memorygamewireframe.pdf).

## Technologies used
### [HTML](https://www.w3.org/html/)
HTML was used for the basic structure

### [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
CSS was used to style my page

### [Bootstrap](https://getbootstrap.com/)
Bootsrap was used for its responsivity and mobile first design

### [Font Awesome](https://fontawesome.com/)
The Font Awesome library was used for it rich text icons

### [jQuery](https://jquery.com/download/) and [Javascript](https://www.javascript.com/)
Javascript and jQuery was used for its ability to transverse and manipulate the DOM, thus incorparating interactivity into my website.

## Testing
Manual testing was done through out the projects creation, mainly throughout the projects creation inbetween git commits.
The CSS of the site was monitored to make sure the UX mission of keeping all tiles in view without scrolling was achieved. The below images were the final result of css tweaking which show this
objective was fulfilled. Using chrome developer tools, I can see the project looks correct on mobile screens all the way up to desktop screens. The images of this can be found 
in the images directory, under the readmeImages folder.

Javascript was also tested as it was implemented using the port command "python3 -m http.server" and by refreshing the page (with ctrl + shift + mouseclick) to ensure the code was working
as intended. Variables and functions were console logged as they were intialised/manipulated to ensure the desired result was obtained. Github's git commands were used to 
ensure working code was saved and pushed correctly into my deployed site. 
The deployed site was tested in Google chrome, Opera and Microsoft to ensure all elements were responsive and that the javascript executed correctly in all 3 browsers on desktop.



## Deployment
My project has been deployed to gitpages using the following procedure:
* Opening github and going to 'settings' tab on my page.
* Scrolling down to the 'Github Pages' selection
* Under 'Source' 2 options are available:
 * 'master' was chosen for the Branch option and 'root' was chosen for the Folder section.
 * My site has now been deployed to [https://futhimhlas.github.io/memoryGame/](https://futhimhlas.github.io/memoryGame/)

 Cloning my repository can be done by downloading the ZIP or by using the HTTPS URL.
 * First open a repository you'd like to copy into.
 * In your workspace terminal use the command 'git clone' + the https url of my site (https://github.com/futhimhlas/memoryGame.git).
 * So your command would look like this 'git clone https://github.com/futhimhlas/memoryGame.git' followed by enter

 ## Credits
[Tutorial on Memory games](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=863s) - This youtube video helped me understand the parts of my project that I'd have to defensively code for.

[W3Schools](https://www.w3schools.com/js/DEFAULT.asp) w3Schools is always a big help when it comes to harder to grasp concepts.

[JS Memory Game tutorial](https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae) This tutorial helped with some of the harder JS to code.

[Stackover Flow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array?noredirect=1&lq=1) I found the answer to shuffling my div order from a stackover forum answer.

## Media
[Provided the Tile back Image](https://www.pinterest.co.uk/pin/419538521538811471/)

[Provided the sports org pictures](https://favpng.com/) 

