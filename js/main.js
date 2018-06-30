$(document).ready(function(){

  var innerwidth, paddle, p, pleft, ptop, paddlewidth, innerheight, dPaddle;
  var ball, b, bleft, btop, random, dtop = 0, dleft, start = true, speed, game;
  $(document).keydown(function(e) {
      paddle = $("#paddle");
      p = paddle.position();
      pleft = p.left;
      ptop = p.top;
      innerwidth = $("#background").innerWidth();
      innerheight = $("#background").innerHeight();
      paddlewidth = $("#paddle").width();
      dPaddle = 50;


      console.log(e.keyCode);

      function paddleRight(){
        if(pleft <= (innerwidth - paddlewidth)){
          pleft+= dPaddle;
          paddle.css("left", String(pleft)+"px");
        }
        else{
          event.preventDefault();
        }
      }

      function paddleLeft(){
        if(pleft >= 0){
          pleft -= dPaddle;
          paddle.css("left", String(pleft)+"px");
          // alert(left);
        }
        else{
          event.preventDefault();
        }
      }

      if(e.keyCode == 39){
        paddleRight();
        // SetInterval(function(){ paddleRight(), 2000; });
      }

      if(e.keyCode == 37){
        paddleLeft();
        // SetInterval(function(){ paddleLeft(), 2000; });
      }

  });



      $(document).keypress(function(e){


        console.log(e.keyCode);
        if(e.keyCode == 32){
          if(start){
            random = Math.random();
            speed = Math.floor(Math.random() * 20) + 5;
            getDisplacement();
            start = false;
            game = setInterval(function(){ moveBall(), 2000; });
          }
        }
      })

      function invertRandom(){
        if (random < 0.5){
          random = 0.5;
        }
        else{
          random = 0.4;
        }
      }

      function getDisplacement(){
        // dtop = Math.floor(Math.random() * 5) + 1;
        dleft = Math.floor(Math.random() * 3) + 1;


        if (dtop >= 0){
          dtop = Math.floor(Math.sqrt(speed - dleft * dleft));
        }
        else {
          dtop = 0 - Math.floor(Math.sqrt(speed - dleft * dleft));
        }

      }

      function gameOver(){
        clearInterval(game);
        alert("Game Over!");
        location.reload();
      }

      function checkBoundary(){
        if(bleft <= 0 || bleft >= innerwidth - 15){
          invertRandom();
          getDisplacement();
        }

        if(btop <= 0){
          // invertRandom();
          dtop = 0 - dtop;
          // getDisplacement();
        }

      }

      function checkCollision(){
        if (btop >= ptop - 15){
          if (bleft >= pleft && bleft <= pleft+paddlewidth){
            // invertRandom();
            dtop = 0 - dtop;
          }
        }
        if(btop > innerheight - 15){
          gameOver();
        }
      }

      function moveBall(){
        // alert("Function called");
        ball = $("#ball");
        b = ball.position();
        bleft = b.left;
        btop = b.top;
        checkBoundary();
        checkCollision();
        if (random < 0.5) {
          // alert(random);
          bleft -= dleft;
          btop -= dtop;
          ball.css({"top" : String(btop)+"px" , "left" : String(bleft)+"px"});
        }
        else {
          // alert(random);
          bleft += dleft;
          btop -= dtop;
          ball.css({"top" : String(btop)+"px" , "left" : String(bleft)+"px"});
        }


      }

})
