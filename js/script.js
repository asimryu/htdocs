var slides = $("header > img");
var max = slides.length - 1;
var sno = 0;
var pointers = "";
for( var i=0; i<=max; i++) {
	pointers += "<span>●</span>";
}
$(".pointers").html(pointers);
var pointerbtns = $(".pointers span");
$(pointerbtns[sno]).addClass("active");

function slide(dir){

	var ing = $(slides[sno]).is(":animated");
	if( ing )	return;

	dir = dir ? dir : "right";
	var startX = 0;
	var startY = 0;
	var endX = 0;
	var endY = 0;
	var num = 0;

	if( dir == "right" ) {
		startX = -940;
		startY = 0;
		endX = 940;
		endY = 0;
		num = 1;
	} else if( dir == "left" ) {
		startX = 940;
		startY = 0;
		endX = -940;
		endY = 0;
		num = -1;
	} else {
		return;
	}


	$( slides[sno] ).siblings("img").css({"left":startX+"px","top":startY+"px"});

	$( slides[sno] ).animate({"left":endX+"px","top":endY+"px"},1000,function(){
		$(this).css({"left":startX+"px","top":startY+"px"});
	});
	sno = sno + num;
	if( sno > max ) sno = 0;
	if( sno < 0 ) sno = max;
	$( slides[sno] ).animate({"left":"0","top":"0"},1000,function(){
		$(pointerbtns).removeClass("active");
		$(pointerbtns[sno]).addClass("active");
	});
}

$(".dir-btn").on("click",function(){
	var dir = $(this).attr("data-dir");
	if( ! dir ) return;
	stop();
	slide(dir);
});

var timer = null; //전역(global) 변수 

function start(){
	if( timer != null ) return;
	timer = setInterval(function(){
		slide();
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

$(".timer-btn").on("click",function(event){
	event.stopPropagation();
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