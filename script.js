(function() {
  buttons = document.getElementsByTagName("button");

  for (i = 0; i < buttons.length; i++) {
    cloned = buttons[i].cloneNode(true);
    cloned.onclick = false;
    buttons[i].parentNode.replaceChild(cloned, buttons[i]);
  }
  forms = document.getElementsByTagName("form");

  for (i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function(event) {
      event.preventDefault();
    });
  }
})();
