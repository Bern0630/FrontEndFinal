$(document).ready(function(){
    $('.introduce-bar a').hover(function(){
      $('#Change1').css('width','140px')
    },function(){
      $('#Change1').css('width','0px')
    } 
      )  
     });
     $(document).ready(function(){
        $('.food-bar a').hover(function(){
          $('#Change2').css('width','140px')
        },function(){
          $('#Change2').css('width','0px')
        } 
          )  
         });
         $(document).ready(function(){
            $('.culture-bar a').hover(function(){
              $('#Change3').css('width','140px')
            },function(){
              $('#Change3').css('width','0px')
            } 
              )  
             });
             $(document).ready(function(){
                $('.traffic-bar a').hover(function(){
                  $('#Change4').css('width','140px')
                },function(){
                  $('#Change4').css('width','0px')
                } 
                  )  
                 });
              
                 var box = $(".down");
box.click(function(){
	var _targetLocation = $(".target").offset().top;
	$("html, body").animate({
		scrollTop: _targetLocation
	});
})
          
                            