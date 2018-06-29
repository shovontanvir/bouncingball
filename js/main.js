$(document).ready(function(){
  $(document).keydown(function(e) {
      var paddle = $("#paddle");
      var p = paddle.position();
      var pleft = p.left;
      var innerwidth = $("#background").innerWidth();
      var paddlewidth = $("#paddle").width();


      console.log(e.keyCode);
      if(e.keyCode == 39){
        if(pleft <= (innerwidth - paddlewidth)){
          pleft+= 15;
          paddle.css("left", String(pleft)+"px");
        }
        else{
          event.preventDefault();
        }
      }
      if(e.keyCode == 37){
        if(pleft >= 0){
          pleft -= 15;
          paddle.css("left", String(pleft)+"px");
          // alert(left);
        }
        else{
          event.preventDefault();
        }
      }

  });

  $(document).keypress(function(e){
    var ball = $("#ball");
    var b = ball.position();
    var bleft = b.left;
    var btop = b.top;
    random = Math.random();
    console.log(e.keyCode);
    if(e.keyCode == 32){
      if (random < 0.5) {
        // alert(random);
        bleft -= 15;
        btop -= 15;
        ball.css({"top" : String(btop)+"px" , "left" : String(bleft)+"px"});
      }
      else {
        // alert(random);
        bleft += 15;
        btop -= 15;
        ball.css({"top" : String(btop)+"px" , "left" : String(bleft)+"px"});
      }
    }
  })
})
