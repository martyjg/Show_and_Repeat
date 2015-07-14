var game = function() {

$('#p1ScoreIncrease').hide();
$('#p2ScoreIncrease').hide();

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

var matchedMoves = 0;

var player1Score = 0;
var player2Score = 0;
$("#p1Score").html(player1Score);
$("#p2Score").html(player2Score);

//chain about to be displayed
var currentChain = player1Chain;

//allows for pause during movesDisplay
var playing = true;

//keeps track of no. of turns switched
var switchedTurns = 0;

if (player1Score === 0 && player2Score === 0) {
$("#message").html(currentPlayer + ", what you got?");
}

//changes dancing animation according to current player when buttons are pushede
function throwMove(move) {
	if (!playing) return;

	if (currentPlayer === 'player1') {
		player1Chain.push(move);
		if (move === '&larr;') {
			move = 'left';
		} else if (move === '&uarr;') {
			move = 'up';
		} else if (move === '&rarr;') {
			move = 'right';
		} else if (move === '&darr;') {
			move = 'down';
		}
		player1Dancer.attr('class', 'throw' + move);


	} if (currentPlayer === 'player2') {
		player2Chain.push(move);
		if (move === '&larr;') {
			move = 'left';
		} else if (move === '&uarr;') {
			move = 'up';
		} else if (move === '&rarr;') {
			move = 'right';
		} else if (move === '&darr;') {
			move = 'down';
		}
		player2Dancer.attr('class', 'throw' + move);
	}

	if (currentChain.length === moveCounter) {
		if (switchedTurns % 2 !== 0) {
			checkForMatch();
		}
		else {
			displayMoves();
			playing = false; }
		}
	}


	function displayMoves() {
		console.log("the current player is " + currentPlayer);
		if (currentPlayer === "player1") {
			$("#message").html("player2, check it out").delay(2000).fadeOut('slow');
		} 
		else {
			$("#message").show().html("player1, check it out").delay(2000).fadeOut('slow');
		}

		currentChain.forEach(function(element, index) {
			setTimeout(function(){

				$("#chainDisplay").show().html(element).fadeOut('slow');

				if (index === currentChain.length - 1) {
					switchPlayers();
				}
			}, 1200 * (index+1));
		});
	}


	function checkForMatch() {
		N = player1Chain.length
		for (var i = 0; i < N; i++) {
			if (player1Chain[i] === player2Chain[i]) {
				matchedMoves++;
			} 
		}
		if (matchedMoves === N) {
			moveCounter++
			switchedTurns = 0;
			matchedMoves = 0; 
			$("#message").show().html(currentPlayer + " nailed it. Step it up.")
			if (currentPlayer === 'player1') {
				player2Chain = [];
			} else {
				player1Chain = [];
			}
		} else {
			matchedMoves = 0;
			debugger;
			if (currentPlayer === 'player1') {
				$("#p2ScoreIncrease").show().fadeOut(1500);
				$("#message").show().html("player1, you suck. 1 point for player2.").delay(2000);
				player2Score++;
			} else { 
				$("#p1ScoreIncrease").show().fadeOut(1500);
				$("#message").show().html("player2, you suck. 1 point for player1.").delay(2000);
				player1Score++;
			}
			$("#p1Score").html(player1Score);
			$("#p2Score").html(player2Score);
			resetGame();
		}
	}


	function resetGame() {
		moveCounter = 3; 

		player1Chain = [];
		player2Chain = [];

		playing = true;


		switchPlayers();
		switchedTurns = 0;
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
		$("#message").show().html(currentPlayer + ", what you got?");
	}


	$(document).keydown(function(key) {
		if (key.keyCode === 37) { 
			throwMove('&larr;');
		} else if (key.keyCode === 38) {
			throwMove('&uarr;');
		} else if (key.keyCode === 39) {
			throwMove('&rarr;');
		} else if (key.keyCode === 40) {
			throwMove('&darr;');
		}
	});
}



$(document).ready(game);
