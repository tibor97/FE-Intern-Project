$(document).ready(function(){

	var modal = document.getElementById('logDiv');

	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
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
	    	$('.nav a').css('color', '#12202d');
		    }else{
		    	$('.nav a').css('color', 'white');
		    }
	});
});

// Get the modal
var modal = document.getElementById('logDiv');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
