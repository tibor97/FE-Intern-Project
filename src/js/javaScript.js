$(document).ready(function(){

	$('a').click(function(e){
	    var jump = $(this).attr('href');
	    var new_position = $(jump).offset();
	    $('html, body').stop().animate({ scrollTop: new_position.top }, 500);
	    e.preventDefault();
	});


	$.fn.isInViewport = function() {
	  var elementTop = $(this).offset().top;
	  var elementBottom = elementTop + $(this).outerHeight();

	  var viewportTop = $(window).scrollTop();
	  var viewportBottom = viewportTop + $(window).height();

	  return elementBottom > viewportTop && elementTop < viewportBottom;
	};
	$(window).on('resize scroll', function() {
		if($("#aboutUs2").isInViewport()||$("#advisors2").isInViewport()){
	    	$('a').css('color', '#12202d');
		    }else{
		    	$('a').css('color', 'white');
		    }
	});


});
