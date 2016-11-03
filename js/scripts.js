function Player (mid) {
    this.mid = mid;
    this.score = 0;
    this.dice = 0;
    this.total = 0;
    this.turn = "wait";
}

Player.prototype.roll = function () {

  var result = Math.floor((Math.random() * 6) + 1);
  this.dice = result;

  if (result != 1){
      this.total += result;
      return this.total;
  } else {
    this.turn = "wait";
    return this.total = 0;
  }

}




// Player.prototype.roll = function () {
//   this.dice = result;
//
//   var result = Math.floor((Math.random() * 6) + 1);
//   this.dice = result;
//
//   if (result != 1){
//       this.total += result;
//       return this.total;
//   } else {
//     this.turn = "wait";
//     return this.total = 0;
//   }
//
// }

Player.prototype.hold = function () {
  this.score += this.total;
  // this.total = 0;
  return this.score;

}

$(document).ready(function () {
  var player1 = new Player (1);
  var player2 = new Player (2);
  player1.turn = "play";

  $("#roll").click(function(event) {
    event.preventDefault();

    if (player1.turn === "play") {
      var roll = player1.roll();
      $("#player1-total").text(player1.total);

      if (roll === 0) {
        player2.turn = "play";
        player1.turn = "wait";
        $('#player1-total').text("0");
      }
    }

    if (player2.turn === "play") {
      var roll = player2.roll();
      $("#player2-total").text(player2.total);

      if (roll === 0) {
        player1.turn = "play";
        player2.turn = "wait";
        $('#player2-total').text("0");
      }
    }

  });

  $("#hold").click(function () {
    if (player1.turn === "play") {
      player1.turn = "wait";
      player2.turn = "play";
      $("#player1-score").text(player1.hold());
      $('#player1-total').text("0");
    }

    if (player2.turn === "play") {
      player1.turn = "play";
      player2.turn = "wait";
      $("#player2-score").text(player2.hold());
      $('#player2-total').text("0");
    }

  });
});
