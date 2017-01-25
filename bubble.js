function bubble(width, score, count) {

  function getRandomColor() {
      var letters = '0000123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {

        color += letters[Math.floor(Math.random() * letters.length)];
      }
        return color;
    }

for  (var i = 0; i < count; i++) {

  var bubbleTop = Math.floor(10);
  var bubbleLeft = Math.floor(Math.random() * width +300)

    $('main.game-area').append(
    $('<div />')
      .addClass('bubble')
      .addClass('small')
      .css('top', bubbleTop)
      .css('left', bubbleLeft)
      .css('border-color', ""+getRandomColor()+"" )

      .click(function () {
        $(this).removeClass('small');
        $(this).addClass('large')
        $(this).fadeOut(200, function() {
        $(this).remove()
      })

      score.upScore();
    }));
  }
}
