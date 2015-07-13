$(document).ready(function () {


	firstChain = [];
	secondChain = [];
	moveCount = 10;
	turn = 0;
	playerTurn = 0;
	player1Score = 0;
	player2Score = 0;
	$("#p1Score").html(player1Score);
	$("#p2Score").html(player2Score);

	// var states = [
	// "GAME_START",
	// "PLAYER_1_TURN",
	// "PLAYER_2_TURN",
	// "PLAYER_1_WIN",
	// "PLAYER_2_WIN"
	// ];

	// showAndRepeat = function() {

	// 	if (turn % 2 === 0) {
	// 		chainBuilder(firstChain);
	// 		if (firstChain.length === moveCount) {
	// 			displayMoveChain(firstChain);
	// 			clearDisplay();
	// 			chainBuilder(secondChain);
	// 			if (secondChain.length === moveCount) {
	// 				checkForMatch();
	// 			}
	// 		}
	// 	} else {
	// 		chainBuilder(secondChain);
	// 		if (secondChain.length === moveCount) {
	// 			displayMoveChain(secondChain);
	// 			clearDisplay();
	// 			chainBuilder(firstChain);
	// 			if (firstChain.length === moveCount) {
	// 				checkForMatch();
	// 			}
	// 		}
	// 	}
	// }

	$("#checkMoves").click(function() {
		checkForMatch();
	})


	$("#resetButton").click(function() {
		if (turn % 2 === 0) {
			if (playerTurn === 0) {
				chainBuilder(firstChain);
				playerTurn++;
			} else {chainBuilder(secondChain);
				playerTurn = 0;}
			} else {
				if (playerTurn === 0) {
					chainBuilder(secondChain);
					playerTurn = 1;
				} else {
					chainBuilder(firstChain); 
					playerTurn = 0;
				}
			}
		});

	$("#displayMoves").click(function() {
		if (turn % 2 === 0) {
			displayMoveChain(firstChain);
		} else {
			displayMoveChain(secondChain);
		}
	})


	chainBuilder = function(chain) {
		console.log("SHOW YOUR MOVES")
		$(document).keydown(function(key) {
			if (chain.length < moveCount) {
				if (key.keyCode === 37) { 
					$("#player1Dancer").attr("class", "throwLeft");
					chain.push("&larr;");
				} else if (key.keyCode === 38) {
					$("#player1Dancer").attr("class", "throwUp");
					chain.push("&uarr;");
				} else if (key.keyCode === 39) {
					$("#player1Dancer").attr("class", "throwRight");
					chain.push("&rarr;");
				} else if (key.keyCode === 40) {
					$("#player1Dancer").attr("class", "throwDown");
					chain.push("&darr;");
				}
				console.log("The chain is " + chain)
			}
		});
	}

	displayMoveChain = function(chain) {
		chain.forEach(function(element, index) {
			setTimeout(function(){
				$("#chainDisplay").show().html(element).fadeOut('slow');
			}, 1000 * (index+1));

		})
		$("#player1Dancer").attr("class", "player1Move");
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
				playerTurn++;
			} else {
				console.log("Not even close")
				if (turn % 2 === 0) {
					player1Score++;
					$("#p1Score").html(player1Score);
				} else {
					player2Score++;
					$("#p2Score").html(player2Score);
				}
				firstChain = [];
				secondChain = [];
				turn = 0;
				playerTurn = 0;
				moveCount = 3;
			}
		}

	});
