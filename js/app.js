(function(){
  "use strict";
  var tableContent = document.getElementsByTagName('td'),
      contentGame = Array.prototype.slice.call(tableContent);
  var player,signer,flag = 0;


  var modalPlayerHTML = "<form class='modalPlayer'>";
  modalPlayerHTML += "<h2>How do you want to play ? </h2>";
  modalPlayerHTML += "<div class='form-item player'>One Player</div>";
  modalPlayerHTML += "<div class='form-item player'>Two Player</div>";
  modalPlayerHTML += "</form>";

  var modalSignHTML = "<form class='modalSigner'>";
  modalSignHTML += "<h2>Would you like to choose X or O ?</h2>";
  modalSignHTML += "<div class='form-item signer'>X</div>";
  modalSignHTML += "<div class='form-item signer'>O</div>";
  modalSignHTML += "</form>";

  var modalWinnerHTML = "<div class='modalWinner'>";
  modalWinnerHTML += "<h2> Congratulation. You are winner </h2>";
  modalWinnerHTML += "</div>";

  window.onload = function (){
    var modalPlayer = document.createElement('div'),
     modalSign = document.createElement('div'),
     modalWinner = document.createElement('div'),
     container = document.getElementsByClassName('container')[0];

    document.body.insertBefore(modalPlayer, container.nextSibling);
    document.body.insertBefore(modalSign, container.nextSibling);
    document.body.insertBefore(modalWinner, container.nextSibling);

    modalPlayer.style.display = "none";
    modalPlayer.setAttribute('id', 'modal');
    modalPlayer.innerHTML = modalPlayerHTML;

    modalSign.style.display = "none";
    modalSign.setAttribute('id', 'modalsign');
    modalSign.innerHTML = modalSignHTML;

    modalWinner.style.display = "none";
    modalWinner.setAttribute('id', 'modalwinner');
    modalWinner.innerHTML = modalWinnerHTML;


  }

  function handleNewGame(){

    // Reset content on board
    resetBoard();
    // Choose X or O
    optionsBoard();
  }

  function playGame(e){
    var target = e.target;
    var positionX = [];
    var positionO = [];
    var controlPlayer = '';



    if (target.textContent === '') {
      flag++;

          switch (signer) {
            case 'X':
                  flag % 2 != 0 ? target.textContent = 'X' : target.textContent = 'O';
                  console.log(controlPlayer);
                  break;
            case 'O':
                  flag % 2 != 0 ?target.textContent = 'O': target.textContent = 'X';
                    console.log(controlPlayer);
                  break;
            default: return false;
          }
        }
      contentGame.map(function(item,index){
        switch (item.textContent ) {
          case 'X':
              positionX.push(index);
            break;
            case 'O':
                positionO.push(index);
              break;
          default: return false;
        }
      });

        cleanArr(positionX);
        cleanArr(positionO);

        if(testGame(positionX) && signer === 'X'){
          console.log(firstPlayer + ' winner. End game');
          resetBoard();
          getWinner();
        }
        if (testGame(positionO) && signer === 'O') {
        console.log(firstPlayer + " winner. End game");
        resetBoard();
        getWinner();
        }
console.log(firstPlayer);

  } // end playGame

function cleanArr(arr){
      arr.map(function(item,jindex){
        arr.map(function(value,kindex){
          if(item === value && jindex !== kindex){
            arr[kindex].splice(kindex,1);
          }
        })
      });

      return arr;
} // end cleanArr

function testGame(arr){
  var winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var res = [];
  var flag;

    for(var i = winner.length;i--;){
      flag = 0;
      for(var j = arr.length;j--;){
        for(var k = winner[i].length;k--;){
          if(winner[i][k] == arr[j]){
            flag += 1;
          }
        }

        if(flag === 3){
          return true;
        }
      }
    }

    return false;
} //end testGame

// function checkIfEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   //sort them first, then join them and just compare the strings
//   return arr1.sort().join() === arr2.sort().join();
// }

function resetBoard(){
  var winner = document.getElementById('modalwinner');
  contentGame.map(function(item){
    item.textContent = '';
  })
  flag = 0;
  winner.style.display = 'none';
} //end resetBoard

      function getWinner(){
        var winner = document.getElementById('modalwinner');

        winner.style.display = "block";
      }

      function getPlayer(e){
        var target = e.target,
        choosePlay = document.getElementById('modal'),
        chooseSign = document.getElementById('modalsign');

        target.textContent === 'One Player' ? player = 'One Player' : player = 'Two Player';
        choosePlay.style.display = 'none';
        chooseSign.style.display = 'block';
        console.log(player);
      } // end getPlayer

      function getSigner(e){
        var target = e.target,
        choosePlay = document.getElementById('modal'),
        chooseSign = document.getElementById('modalsign');
        target.textContent === 'X' ? signer = 'X' : signer = 'O';
        console.log(signer);
        chooseSign.style.display = 'none';
      } // end getSigner

    function optionsBoard(){
      var players = document.getElementsByClassName('player'),
      signers = document.getElementsByClassName('signer'),
      choosePlay = document.getElementById('modal'),
      chooseSign = document.getElementById('modalsign'),
      i;
      choosePlay.style.display = 'block';

      for (i = players.length; i--;) {
        players[i].addEventListener('click', getPlayer);
      }
      for (i = signers.length; i--;) {
        signers[i].addEventListener('click', getSigner);
      }

    } // end optionsBoard

  document.getElementById('btn').addEventListener('click', handleNewGame);

  contentGame.map(function(item){
    item.addEventListener('click', playGame);
  })
}()); // ens use strict
