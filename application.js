$(document).ready(function () {
    var score = new Score();

    var gameAreaHeight = $('main.game-area').height();
    var gameAreaWidth = 600;

    function generateBubbles() {

      if (score.timer > 500) {
        bubble(gameAreaWidth, score, 10);
      }else if (score.timer < 500 && score.timer > 200) {
        bubble(gameAreaWidth, score, 7);
      } else {
        bubble(gameAreaWidth, score, 6);
      }

     window.setTimeout(generateBubbles, 3000);
  }

    function bubblesFalling() {

      $('.bubble').each(function (key, value) {
        if (parseInt($(this).css('top')) > gameAreaHeight - 20) {
          $(this).fadeOut(200, function() {
                  $(this).remove()
             })
          score.downLives();
        }

        var fallingSpeed = Math.floor(Math.random() * 10 + 2);

        var movingDirection = Math.floor(Math.random() * 2);

        var currentTop = parseInt($(this).css('top'));

        var currentLeft = parseInt($(this).css('left'));

        $(this).css('top', currentTop + fallingSpeed);

        if (movingDirection === 0) {
          $(this).css('left', currentLeft + fallingSpeed);
        } else {
          $(this).css('left', currentLeft + -(fallingSpeed));
        }

    });

    window.setTimeout(bubblesFalling, 200);

    }


  document.getElementById("start-game-button").addEventListener("click", function(){
    this.parentNode.removeChild(this)
    score.upTime();
    generateBubbles();
    bubblesFalling();
  })

});
