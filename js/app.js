"use strict";
var i;
var tableContent = document.getElementsByTagName('td');

for (i = tableContent.length ; i--;) {
  tableContent[i].textContent = '';
}
