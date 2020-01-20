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
	if(window.innerWidth > 600){
		$(".title img").animate({left: '14%'}, 1500);
		$(".title h1").animate({ opacity:'1'}, 2000);
		$(window).on('resize scroll', function() {
			if($("#aboutUs2").isInViewport()){
		    	$('.nav a').css('color', '#12202d');
		    	$(".aboutUs").animate({ right:'0%'}, 1500);
			    }else if($("#advisors2").isInViewport()){
		    		$('.nav a').css('color', '#12202d');
		    		$(".advisorsCard").animate({ left:'0%'}, 1500);
			    	}else{
			    		$('.nav a').css('color', 'white');
			    	}
		});	
		}else{
			$(".title h1").animate({ opacity:'1'}, 2000);
			$(window).on('resize scroll', function() {
				if($("#aboutUs2").isInViewport()){
			    	$(".aboutUs").animate({ right:'0%'}, 1500);
			    	$(".scrollToTop").css({ display:'block'}, 1500);
				    }else if($("#advisors2").isInViewport()){
			    		$(".advisorsCard").animate({ left:'0%'}, 1500);
				    	}
			});	
		}
});

