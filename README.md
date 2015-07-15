# Show_and_Repeat
<h1>WDI 14 LDN Project 1</h1>
</br>
<p>For my first project at General Assembly, I designed and built a two player version of simon says with a dancing theme. I wanted the
project to be colourful, use button inputs and have movement and sound feedback. The finalised version of my game can be <a href = "https://vert-bastille-1516.herokuapp.com/" target="_blank">viewed here.</a>
</br>
</br>
</p>
<ul>
<b>Game Rules:</b>
<li>The game begins with player 1 as default.</br></li>
<li>Player 1 enters 3 moves using the keyboard arrow keys.</br></li>
<li>These moves are displayed in sequence to player 2 then hidden.</br></li>
<li>Player two must iterate on these button inputs from memory and then add their own additional move on the end.</br></li>
<li>This new chain is again displayed to player 1 who iterates and adds another movement on the end.</br></li>
<li>The game continues until a player is unable to remember the full chain of moves in sequence.</br></li>
<li>When a player fails to repeat the chain, the other player gains a point and the game resets.</br></li>
</ul>

The final design of the project:
<img src="http://s28.postimg.org/mnf5divvh/Screen_Shot_2015_07_15_at_16_13_42.jpg" alt="ITERATORS" style="width:304px;height:228px;">

<b>Learning Outcomes</b>
</br>
<p>
This project really helped a lot with control flow. I wanted the game to play without always prompting the players or have the player click buttons to progress.
The project also made me feel better about my basic CSS skills and introduced me to features that will be useful for impressive web design such as CSS animations and using classes to change visuals.
</p>
</br>

<b>Development Profile</b>
<p>
The game was built with HTML, CSS and Javascript.
I used jQuery at some points to streamline event listeners, getting elements and altering attributes.
I used soundmanager 2 to implement sound effects in my game.
I drew the the simple 2-frame animations myself in Gimp image editor and sourced the sound effects online.
</p>
<img src="http://s7.postimg.org/em6rfzt0n/position_Default.gif?noCache=1436974785" alt="default">
<img src="http://s28.postimg.org/axp5j4wd5/position_Left.gif" alt="left">
<img src="http://s9.postimg.org/chciolo3f/position_Up.gif" alt="up">
<img src="http://s29.postimg.org/mvh7kslc3/position_Right.gif" alt="right">
<img src="http://s17.postimg.org/9c2izblu3/position_Down.gif" alt="down">


</br>
<b>Further Ideas</b>
<p>
If I had more time I would like to play around with the possibilities of the sound effects. I used drum sound effects and could easily allow the player to play these back creating a small drum loop of sorts.
Also, my game waits for the responding player to enter a chain of moves as long as the initial chain before checking if it is correct. In conventional simon says, the game over happens immediately when the first incorrect move is entered.
</p>
