// JavaScript Document

$("more").click(function(e){
	var _this = $($(this).attr("href"));
	$("body, html").animate({
		scrollTop: _this.offset().top -72
	}, 1000)
});
