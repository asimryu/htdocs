var slides = $("header > img");
var max = slides.length - 1;
var sno = 0;

$("header").on("click",function(){
	$( slides[sno] ).animate({"left":"940px"},1000,function(){
		$(this).css({"left":"-940px"});
	});
	sno++;
	if( sno > max ) sno = 0;
	$( slides[sno] ).animate({"left":"0"},1000);
});

var timer = null; //전역(global) 변수 

function start(){
	if( timer != null ) return;
	timer = setInterval(function(){
		$("header").click();
	},2000);
	$(".timer-btn").text("중지");
}

function stop(){
	if( timer == null ) return;
	clearInterval(timer);
	timer = null;
	$(".timer-btn").text("시작");
}

start();

$(".timer-btn").on("click",function(){
	if( timer == null ) {
		start();
	} else {
		stop();
	}
});


$(".title").hover(
	function(){
		$(this).addClass("animated bounce");
	},
	function(){
		$(this).removeClass("animated bounce");
	}
);