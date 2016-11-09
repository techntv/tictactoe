(function(){
  "use strict";
  var tableContent = document.getElementsByTagName('td');
  var player,signer;

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

  function playGame(){
    
  }

function resetBoard(){
  var i;
  for (i = tableContent.length ; i--;) {
    tableContent[i].textContent = '';
  }
}

function optionsBoard(){

  var player = document.getElementsByClassName('player'),
      signer = document.getElementsByClassName('signer'),
      choosePlay = document.getElementById('modal'),
      chooseSign = document.getElementById('modalsign'),
      i;

      function getPlayer(e){
        var target = e.target;
        target.textContent === 'One Player' ? player = 'One Player' : player = 'Two Player';
        console.log(player);
        choosePlay.style.display = 'none';
        chooseSign.style.display = 'block';
      }

      function getSigner(e){
        var target = e.target;
        target.textContent === 'X' ? signer = 'X' : signer = 'O';
        console.log(signer);
        chooseSign.style.display = 'none';
      }

  choosePlay.style.display = 'block';
  for (i = player.length; i--;) {
    player[i].addEventListener('click', getPlayer);
  }
  for (i = signer.length; i--;) {
    signer[i].addEventListener('click', getSigner);
  }

}
  document.getElementById('btn').addEventListener('click', handleNewGame);
}());
