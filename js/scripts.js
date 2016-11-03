function Player (mid){
    this.mid = mid;
    this.score = 0;
    this.dice = 0;
    this.role = "wait";
}

Player.prototype.roll = function (){
  var result = Math.floor((Math.random() * 6) + 1);
  this.dice = result;
  if (result != 1 && this.role === "play" && this.score < 100){
      this.score += result;
      this.role = "play";
      return this.score;
  }else if(this.score < 100){
    this.role ="wait";
      return this.score = 0;
  }
}

$(document).ready(function (){
  var player1 = new Player (1);
  var player2 =new Player (2);
  player1.role = "play";


  $("#roll").click(function (){

    if (player1.role === "play"){
      var roll = player1.roll();
      if (player1.dice === 1){
        player2.role = "play";
      }
      $("#player1score").text(player1.score);
      $("#dice").text(player1.dice);
    }
    if (player2.role === "play"){
      var roll2 = player2.roll();
      if (player2.dice === 1){
        player1.role = "play";
      }
      $("#player2score").text(player2.score);
      $("#dice").text(player2.dice);
    }

  console.log(player2.role, " ", player1.role);

  });
  //
  $("#hold").click(function (){

  });
});
