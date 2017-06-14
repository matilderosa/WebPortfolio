// function([string1, string2],target id,[color1,color2])
//


//Function to hide the header when the button is clicked
(function ($) {
    $.each(['show', 'hide'], function (i, ev) {
      var el = $.fn[ev];
      $.fn[ev] = function () {
        this.trigger(ev);
        return el.apply(this, arguments);
      };
    });
  })(jQuery);

  $("#bright").click(function(){
   $('#textabout').hide();
});

$( "#bright" ).click(function() {
  consoleTextabout(["About me"], 'text',['#984B43']);
});


function consoleTextabout(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('consolea');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById("textabout")
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {

        target.setAttribute('style', 'color:' + colors[0])
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
      con.className = 'console-underscore green'
      visible = false;

    } else {
      con.className = 'console-underscore red'

      visible = true;
    }
  }, 400)
}
