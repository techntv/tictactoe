(function(){
  "use strict";

  var tableContent = document.getElementsByTagName('td');

  var modalPlayerHTML = "<form class='modalPlayer'>";
  modalPlayerHTML += "<h2>How do you want to play ? </h2>";
  modalPlayerHTML += "<div class='form-item' id='oneplayer'>One Player</div>";
  modalPlayerHTML += "<div class='form-item' id='twoplayer'>Two Player</div>";
  modalPlayerHTML += "</form>";



  window.onload = function (){
    var modalPlayer = document.createElement('div');
    var modalSign = document.createElement('div');
    var container = document.getElementsByClassName('container')[0];

    document.body.insertBefore(modalPlayer, container.nextSibling);
    document.body.insertBefore(modalSign, container.nextSibling);

    modalPlayer.style.display = "none";
    modalPlayer.setAttribute('id', 'modal');
    modalPlayer.innerHTML = modalPlayerHTML;


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
