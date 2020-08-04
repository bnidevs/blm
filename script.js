var open_categ = "";

$(document).ready(function(){

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

	$("#learn_link").click(function(){
		if(open_categ !== "learn"){
			$(".list_ent:visible").fadeOut().promise().done(function(){
				$(".learn").fadeIn();
			});
			open_categ = "learn";
		}else{
			open_categ = "";
			$(".learn").fadeOut();
		}
	});
});
