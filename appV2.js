$(document).ready(function () {


	firstChain = [];
	secondChain = [];
	moveCount = 3;
	turn = 0;

	var states = [
		"GAME_START",
		"PLAYER_1_TURN",
		"PLAYER_2_TURN",
		"PLAYER_1_WIN",
		"PLAYER_2_WIN"
	];


	chainBuilder = function(chain) {
		$(document).keydown(function(key) {
			if (chain.length < moveCount) {
				if (key.keyCode === 37) { 
					chain.push("left");
				} else if (key.keyCode === 38) {
					chain.push("up");
				} else if (key.keyCode === 39) {
					chain.push("right");
				} else if (key.keyCode === 40) {
					chain.push("down");
				}
				console.log("The chain is " + chain)
			}
		})
	}

	displayMoveChain = function(chain) {
		chain.forEach(function(element, index) {
			setTimeout(function(){
				$("#chainDisplay").html(element);
			}, 1000 * (index+1));
		})
	}

	clearDisplay = function() {
		$("#chainDisplay").html("");
		$(document).off();
	}

	checkForMatch = function() {
		if (firstChain.length >= secondChain.length) {
			N = firstChain.length}
			else {N = secondChain.length}

			matchedMoves = 0;
			for (var i = 0; i < N; i++) {
				if (firstChain[i] === secondChain[i]) {
					matchedMoves++;
				}
			}
			if (matchedMoves === N) {
				console.log("Nailed it")
				if (turn % 2 === 0) {
					firstChain = [];
				}
				else {
					secondChain = [];
				}
				moveCount++;
				turn++;
			} else {
				console.log("Not even close")
				firstChain = [];
				secondChain = [];
				turn = 0;
				moveCount = 3;
			}
		}

});
