var Score = function() {
  this.total = 0;
  this.lives = 10;
  this.timer = 0;
}

var updateTime = function(time) {
  $("div.stop-watch").text(time)
}

var updateScore = function(score) {
  $("h2.score-counter").text(score)
}

var removeLives = function(lives) {
  $("div.lives#"+lives+"").css("background-color", "white")
}

Score.prototype.upScore = function() {
    this.total += 1;
    updateScore(this.total)
}

Score.prototype.downLives = function() {
    this.lives -= 1;
    removeLives(this.lives)

    if (this.lives == 0){
        window.alert("You scored "+this.total+" and survived "+(this.timer/10)+" seconds!");
        location.reload();
    }
}

Score.prototype.timeAdd = function() {
  this.timer += 1
}

Score.prototype.upTime = function() {
  var that = this;

  function runAfterInterval(){
    that.timeAdd();
    updateTime(that.timer);
  };

  window.setInterval(runAfterInterval, 100);
}
