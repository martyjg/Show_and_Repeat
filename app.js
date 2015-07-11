$(document).ready(function () {


  moveFirstChain = [];
  moveSecondChain = [];
  moveCount = 3;

  turn = 0;

  var currentChain;

  // CONTROLHANDLER;
  $(document).keydown(function(key) {
    if (!currentChain) return;
    if (currentChain.length < moveCount) {
      console.log('IM BEING CALLED!');
      var move = '';
      if (key.keyCode === 37) { 
        move = "left";
      } else if (key.keyCode === 38) {
        move = "up";
      } else if (key.keyCode === 39) {
        move = "right";
      } else if (key.keyCode === 40) {
        move = "down";
      }
      console.log("move", move);
      if (move)
        // currentChain.push(move);
      checkMove(move);
    }
  });


  function checkMove(move) {
    if (expectedMove === move) {
      expectedMove = nextmove

    } else {
      loseGame();
    }
  }


  checkForMatch = function(firstChain, secondChain) {
    N = firstChain.length
    matchedMoves = 0;
    for (var i = 0; i < N; i++) {
      if (firstChain[i] === secondChain[i]) {
        matchedMoves++;
      }
    }
    if (matchedMoves === N) {
      console.log("Nailed it")
      moveCount++;
    } else {
      console.log("Not even close")
    }
  }

  displayMoveChain = function(chain) {
    chain.forEach(function(element, index) {
      setTimeout(function(){
        $("#chainDisplay").html(element);
      }, 1000 * (index+1));
    })
  }


  function gameturn() {
    // choose who's playing
    // increase turn
    console.log("It is now turn", turn);
    // player 1
    if (turn % 2 == 0) {
      currentChain = moveFirstChain;
    // player 2
  } else {
    currentChain = moveSecondChain;
  }

    // ask for input
    console.log("PLEASE INPUT A COMBO");
    // display the input
    displayMoveChain(currentChain);

    console.log("OKAY!");

    turn++;
  }

  document.querySelector('button[name="turn"]')
  .addEventListener('click', gameturn);

});


