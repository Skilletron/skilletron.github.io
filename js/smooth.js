$("body").on('click', '[href*="#"]', function(e){
    $.scrollTo($(this.hash), 500);
});
$(document).ready(function(){
	$('#scroll_about').click(function(){
	
		var speed = 1000;
		
	
		var top = $('#about_me').offset().top;
		
		$('html, body').animate({scrollTop: top}, speed);
		
		return false;
	});
});
$('#scroll_skills').click(function(){
	
		var speed = 1000;
		
	
		var top = $('#skills').offset().top;
		
		$('html, body').animate({scrollTop: top}, speed);
		
		return false;
	});
;

$('#scroll_education').click(function(){
	
		var speed = 1000;
		
	
		var top = $('#education').offset().top;
		
		$('html, body').animate({scrollTop: top}, speed);
		
		return false;
	});
;
$(document).ready(function(){
	$('#scroll_portfolio').click(function(){
	
		var speed = 1000;
		
	
		var top = $('#portfolio').offset().top;
		
		$('html, body').animate({scrollTop: top}, speed);
		
		return false;
	});
});
$(document).ready(function(){
	$('#scroll_contact').click(function(){
	
		var speed = 1000;
		
	
		var top = $('#contact').offset().top;
		
		$('html, body').animate({scrollTop: top}, speed);
		
		return false;
	});
});
$(function(){
  $.fn.scrollToTop=function(){
    $(this).hide().removeAttr("href");
    if($(window).scrollTop()!="0"){
        $(this).fadeIn("slow")
  }
  var scrollDiv=$(this);
  $(window).scroll(function(){
    if($(window).scrollTop()=="0"){
    $(scrollDiv).fadeOut("slow")
    }else{
    $(scrollDiv).fadeIn("slow")
  }
  });
    $(this).click(function(){
      $("html, body").animate({scrollTop:0},"slow")
    })
  }
});
$(function() {$("#toTop").scrollToTop();});