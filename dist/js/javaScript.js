$(document).ready(function(){var t=document.getElementById("logDiv");window.onclick=function(o){o.target==t&&(t.style.display="none")},$("a").click(function(o){var t=$(this).attr("href"),n=$(t).offset();$("html, body").stop().animate({scrollTop:n.top},500),o.preventDefault()}),$.fn.isInViewport=function(){var o=$(this).offset().top,t=o+$(this).outerHeight(),n=$(window).scrollTop(),e=n+$(window).height();return n<t&&o<e},$(window).on("resize scroll",function(){$("#aboutUs2").isInViewport()||$("#advisors2").isInViewport()?$(".nav a").css("color","#12202d"):$(".nav a").css("color","white")})});var modal=document.getElementById("logDiv");window.onclick=function(o){o.target==modal&&(modal.style.display="none")};