$(document).ready(function(){var i=document.getElementById("logDiv");window.onclick=function(t){t.target==i&&(i.style.display="none")},$("a").click(function(t){var i=$(this).attr("href"),o=$(i).offset();$("html, body").stop().animate({scrollTop:o.top},500),t.preventDefault()}),$.fn.isInViewport=function(){var t=$(this).offset().top,i=t+$(this).outerHeight(),o=$(window).scrollTop(),n=o+$(window).height();return o<i&&t<n},600<window.innerWidth?($(".title img").animate({left:"14%"},1500),$(".title h1").animate({opacity:"1"},2e3),$(window).on("resize scroll",function(){$("#aboutUs2").isInViewport()?($(".nav a").css("color","#12202d"),$(".aboutUs").animate({right:"0%"},1500)):$("#advisors2").isInViewport()?($(".nav a").css("color","#12202d"),$(".advisorsCard").animate({left:"0%"},1500)):$(".nav a").css("color","white")})):($(".title h1").animate({opacity:"1"},2e3),$(window).on("resize scroll",function(){$("#aboutUs2").isInViewport()?($(".aboutUs").animate({right:"0%"},1500),$(".scrollToTop").css({display:"block"},1500)):$("#advisors2").isInViewport()&&$(".advisorsCard").animate({left:"0%"},1500)}))});