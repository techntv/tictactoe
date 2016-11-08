(function(){
  "use strict";

  var tableContent = document.getElementsByTagName('td');
  var modalHTML = "<form class='modalcontent'>";
  modalHTML += "<h2>Choose sign for player</h2>";
  modalHTML += "<input type='checkbox' id='xplayer'><span>Choose X</span>";
  modalHTML += "<input type='checkbox' id='oplayer'><span>Choose O</span>";
  modalHTML += "</form>";

  window.onload = function (){
    var modalGame = document.createElement('div');
    var container = document.getElementsByClassName('container')[0];

    document.body.insertBefore(modalGame, container.nextSibling);
    modalGame.style.display = "none";
    modalGame.setAttribute('id', 'modal');
    modalGame.innerHTML = modalHTML;
  }



  function handleNewGame(){
    var i;
    var choosePlay = document.getElementById('modal');

    // Clear board game
    for (i = tableContent.length ; i--;) {
      tableContent[i].textContent = '';
    }

    // Choose X or O
    choosePlay.style.display = 'block';


  }

  document.getElementById('btn').addEventListener('click', handleNewGame);





}());
