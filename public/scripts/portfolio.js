// function([string1, string2],target id,[color1,color2])



function consoleText(words, id, colors) {
  if (colors === undefined){
  colors = ['#fff'];
  }
  var con         = document.getElementById('console'),
      target      = document.getElementById("text"),
      visible     = true,
      letterCount = 1,
      x           = 1,
      waiting     = false;

  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore white'

      visible = true;
    }
  }, 400)
}

 consoleText(["Hello I'm Matilde.", "I'm a Developer"], 'text',['#984B43','#FDF3E7','#7E8F7C']);
// ===============================================================================

// $("h3").hover(function() {

//     $("h3").css("font-size" , "36px");
// });

//================================================================================
//Function to scroll down
$(function() {
  $("a").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});









