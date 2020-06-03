$(document).ready(function(){

	var open_categ = "";

	$("#petitions_link").click(function(){
		if(open_categ !== "petitions"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".petition").fadeIn();
			});
			open_categ = "petitions";
		}else{
			open_categ = "";
			$(".petition").fadeOut();
		}
	});

	$("#protests_link").click(function(){
		if(open_categ !== "protests"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".protest").fadeIn();
			});
			open_categ = "protests";
		}else{
			open_categ = "";
			$(".protest").fadeOut();
		}
	});

	$("#donations_link").click(function(){
		if(open_categ !== "donations"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".donation").fadeIn();
			});
			open_categ = "donations";
		}else{
			open_categ = "";
			$(".donation").fadeOut();
		}
	});

	$("#businesses_link").click(function(){
		if(open_categ !== "businesses"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".business").fadeIn();
			});
			open_categ = "businesses";
		}else{
			open_categ = "";
			$(".business").fadeOut();
		}
	});

	$("#contact_link").click(function(){
		if(open_categ !== "contact"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".contact").fadeIn();
			});
			open_categ = "contact";
		}else{
			open_categ = "";
			$(".contact").fadeOut();
		}
	});

	var getRand = (start, range) => {
		return (start + Math.floor(range * Math.random()));
	}
});