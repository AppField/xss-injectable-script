(function() {
  var buttons = document.getElementsByTagName("button");

  for (i = 0; i < buttons.length; i++) {
    cloned = buttons[i].cloneNode(true);
    cloned.onclick = false;
    buttons[i].parentNode.replaceChild(cloned, buttons[i]);
  }
})();
