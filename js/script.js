$(document).ready(function() {

function myfunction() {
	$("#game li").text("");
	$("#game li").removeClass('o')
	$("#game li").removeClass('x')
	$("#game li").removeClass('disable')
	$("#game li").removeClass('btn-info')
	$("#game li").removeClass('btn-primary')
}


var x = "o"
var o = "x"
var num = 0;
var o_win = 0;
var x_win = 0;



$('#game li').click(function() {

//All player 1 win combinations

   if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') 
			|| $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') 
			|| $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') 
			|| $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') 
			|| $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
			{
	alert('Player 1 has already won the game. A new game is starting...')
	myfunction()
	}

//All player 2 win combinations
	
   else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') 
		    || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') 
		    || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') 
			|| $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') 
			|| $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
    alert('Player 2 has already won the game. A new game is starting...')
    myfunction()	
  }
 
//Tied Game
 
  else if (num == 9) {
	alert('The Game is a tie')
		myfunction()
		num = 0
  }
  
//If same button is clicked twice
  
  else if ($(this).hasClass('disable')) {
    alert('Already selected. Click on an empty square')
  }
  
  
  else if (num%2 == 0) {
	  num++
	  $(this).text(o)
      $(this).addClass('disable o btn-primary')
	    if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') 
			|| $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') 
			|| $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') 
			|| $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') 
			|| $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') 
			|| $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
	    {
			alert('Player 1 wins. Click PLAY AGAIN to start a new game')
			num = 0
			o_win++
	   
			$('#o_win').text(o_win)
        }
	}
   
   else  {
	  num++
	  $(this).text(x)
      $(this).addClass('disable x btn-info')
	   if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') 
		    || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') 
		    || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') 
			|| $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') 
			|| $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') 
			|| $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
        {
			alert('Player 2 wins. Click PLAY AGAIN to start a new game')
			num = 0
			x_win++
			
			$('#x_win').text(x_win)
        }
	}

   });
    $("#reset").click(function () {
		myfunction()
		num = 0

  });
});