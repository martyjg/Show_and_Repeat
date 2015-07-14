var game = function() {

//div surrounding character
var player1Container = $("#player1");
var player2Container = $("#player2");

//character model
var player1Dancer = $("#player1 > div");
var player2Dancer = $("#player2 > div");

//player currently in play
var currentPlayer = 'player1';
player1Container.addClass('currentPlayer')
var moveCounter = 3; 


var player1Chain = [];
var player2Chain = [];

	//chain about to be displayed
	var currentChain = player1Chain;

//allows for pause during movesDisplay
var playing = true;

	//keeps track of no. of turns switched
	var switchedTurns = 0;


//chnages dacning animation according to current player when buttons are pushede
function throwMove(move) {
	if (!playing) return;

	if (currentPlayer === 'player1') {
		player1Dancer.attr('class', 'throw' + move);
		player1Chain.push(move);

	} if (currentPlayer === 'player2') {
		player2Dancer.attr('class', 'throw' + move);
		player2Chain.push(move);
	}
	if (currentChain.length === moveCounter) {
		if (switchedTurns % 2 !== 0) {
			checkForMatch();
		}
		else {
			displayMoves();
			playing = false; }
		}
		console.log(player1Chain);
		console.log(player2Chain);
		console.log(currentPlayer);
		console.log(moveCounter);
		console.log(currentChain);
		console.log(playing);
		console.log(switchedTurns);
	}

	function displayMoves() {
		currentChain.forEach(function(element, index) {
			setTimeout(function(){

				$("#chainDisplay").show().html(element).fadeOut('slow');

				if (index === currentChain.length - 1) {
					switchPlayers();
				}

			}, 1000 * (index+1));
		});

	}

	function checkForMatch() {
		for (var i = 0; i < player1Chain.length; i++) {
			if (player1Chain[i] !== player2Chain[i]) {
				resetGame();
			} else {
				moveCounter++
				switchedTurns = 0; 
				if (currentPlayer === 'player1') {
					player2Chain = [];
				} else {
					player1Chain = [];
				}
			}
		}
	}

	function resetGame() {
		debugger

		var currentPlayer = 'player1';

		var moveCounter = 3; 

		var player1Chain = [];
		var player2Chain = [];

		var currentChain = player1Chain;

		var playing = true;

		var switchedTurns = 0;
	}

	function switchPlayers() {
		playing = true;
		if (currentPlayer === 'player1') {
			currentPlayer = 'player2';
			player1Container.removeClass('currentPlayer');
			player2Container.addClass('currentPlayer');
			player1Dancer.attr('class', 'idle');
			currentChain = player2Chain;

		} else {
			currentPlayer = 'player1';
			player2Container.removeClass('currentPlayer');
			player1Container.addClass('currentPlayer');
			player2Dancer.attr('class', 'idle');
			currentChain = player1Chain;
		}
		switchedTurns++;
	}


	$(document).keydown(function(key) {
		if (key.keyCode === 37) { 
			throwMove('Left');
		} else if (key.keyCode === 38) {
			throwMove('Up');
		} else if (key.keyCode === 39) {
			throwMove('Right');
		} else if (key.keyCode === 40) {
			throwMove('Down');
		}
	});





}



$(document).ready(game);
