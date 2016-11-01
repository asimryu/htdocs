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

var timer = setInterval(function(){
	$("header").click();//트리거(방아쇠)
},2000);

$(".title").hover(
	function(){
		$(this).addClass("animated bounce");
	},
	function(){
		$(this).removeClass("animated bounce");
	}
);