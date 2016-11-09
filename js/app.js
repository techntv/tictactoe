(function(){
  "use strict";
  var tableContent = document.getElementsByTagName('td');
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

  window.onload = function (){
    var modalPlayer = document.createElement('div');
    var modalSign = document.createElement('div');
    var container = document.getElementsByClassName('container')[0];

    document.body.insertBefore(modalPlayer, container.nextSibling);
    document.body.insertBefore(modalSign, container.nextSibling);

    modalPlayer.style.display = "none";
    modalPlayer.setAttribute('id', 'modal');
    modalPlayer.innerHTML = modalPlayerHTML;

    modalSign.style.display = "none";
    modalSign.setAttribute('id', 'modalsign');
    modalSign.innerHTML = modalSignHTML;


  }

  function handleNewGame(){
    var i;
    // Reset content on board
    resetBoard();
    // Choose X or O
    optionsBoard();
  }

  function playGame(e){
    var target = e.target;
    var positionX = [];
    flag++;

    switch (signer) {
      case 'X':
            flag % 2 != 0 ? target.textContent = 'X': target.textContent = 'O';
            break;
      case 'O':
            flag % 2 != 0 ? target.textContent = 'O': target.textContent = 'X';
        break;
      default: return false;
    }


        for (var i = tableContent.length; i--;){
          if (tableContent[i].textContent === "X") {
            positionX.push(i);
          }
        }

        // for (var k = 0; i < positionX.length; i++) {
        //   for (var j = 0; i < positionX.length; i++) {
        //     if (positionX[k] == positionX[j] && k !== j) {
        //       positionX[j].splice(j,1);
        //     }
        //   }
        // }
        positionX.map(function(item,jindex){
          positionX.map(function(value,kindex){
            if(item == value && jindex != kindex){
              positionX[kindex].splice(kindex,1);
            }
          })
        });
        console.log(positionX);
  } // end playGame

function testGame(){

}

function resetBoard(){
  var i;
  for (i = tableContent.length ; i--;) {
    tableContent[i].textContent = '';
  }

} //end resetBoard

      function getPlayer(e){
        var target = e.target,
        choosePlay = document.getElementById('modal'),
        chooseSign = document.getElementById('modalsign');

        target.textContent === 'One Player' ? player = 'One Player' : player = 'Two Player';
        choosePlay.style.display = 'none';
        chooseSign.style.display = 'block';
      } // end getPlayer

      function getSigner(e){
        var target = e.target,
        choosePlay = document.getElementById('modal'),
        chooseSign = document.getElementById('modalsign');
        target.textContent === 'X' ? signer = 'X' : signer = 'O';
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
  for (var i = tableContent.length; i--;) {
    tableContent[i].addEventListener('click', playGame);
  }

}()); // ens use strict
