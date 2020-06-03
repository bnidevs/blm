$(document).ready(function(){
	$("#petitions_link").click(function(){
		$(".protest").fadeOut();
		$(".donation").fadeOut();
		$(".business").fadeOut();
		$(".petition").fadeIn();
	});

	$("#protests_link").click(function(){
		$(".donation").fadeOut();
		$(".business").fadeOut();
		$(".petition").fadeOut();
		$(".protest").fadeIn();
	});

	$("#donations_link").click(function(){
		$(".business").fadeOut();
		$(".petition").fadeOut();
		$(".protest").fadeOut();
		$(".donation").fadeIn();
	});

	$("#businesses_link").click(function(){
		$(".petition").fadeOut();
		$(".protest").fadeOut();
		$(".donation").fadeOut();
		$(".business").fadeIn();
	});
});