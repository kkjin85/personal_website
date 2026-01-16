consoleText(['kyujin\'s'], 'text1', ['black'], 'console1');
consoleText(['shelf'], 'text2', ['black'], 'console2');

function consoleText(words, id, colors, consoleId) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById(consoleId);
  var letterCount = words[0].length; // Start from the end of the string
  var x = -1; // Move the letterCount to the left
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);

  window.setInterval(function () {
    if (letterCount === words[0].length && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(letterCount, words[0].length);
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = -1;
        target.setAttribute('style', 'color:' + colors[0]);
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (letterCount === -1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000);
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(letterCount, words[0].length);
      letterCount += x;
    }
  }, 120);

  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore';
      visible = true;
    }
  }, 400);
}