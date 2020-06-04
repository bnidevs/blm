var name_list1 = ['ERIC GARNER', 'DANTE PARKER', 'JOHN CRAWFORD III', 'MICHELLE CUSSEAUX', 'MICHAEL BROWN', 'LAQUAN MCDONALD', 'EZELL FORD', 'GEORGE MANN', 'TANISHA ANDERSON', 'AKAI GURLEY', 'TAMIR RICE', 'RUMAIN BRISBON', 'JERAME REID', 'MATTHEW AJIBADE', 'FRANK SMART', 'NATASHA MCKENNA', 'TONY ROBINSON', 'ANTHONY HILL', 'MYA HALL', 'PHILLIP WHITE', 'ERIC HARRIS', 'WALTER SCOTT', 'WILLIAM CHAPMAN II', 'ALEXIA CHRISTIAN', 'FREDDIE BLUE', 'BRENDON GLENN', 'JOSEPH MANN', 'VICTOR MANUEL LAROSA', 'JONATHAN SANDERS', 'SALVADO ELLSWOOD', 'ALBERT JOSEPH DAVIS', 'SANDRA BLAND', 'DARRIUS STEWART', 'BILLY RAY DAVIS', 'SAMUEL DUBOSE', 'MICHAEL SABBIE', 'BRIAN KEITH DAY', 'CHRISTIAN TAYLOR', 'TROY ROBINSON', 'ASSHAMS PHAROAH MANLEY', 'FELIX KUMI', 'KEITH HARRISON MCLEOD', 'JUNIOR PROSPER', 'LAMONTEZ JONES', 'PATERSON BROWN', 'DOMINIC HUTCHINSON', 'ANTHONY ASHFORD', 'ALONZO SMITH', 'TYREE CRAWFORD', 'INDIA KAGER', "LA'VANTE BIGGS", 'MICHAEL LEE MARSHALL', 'JAMAR CLARK', 'RICHARD PERKINS', 'NATHANIEL HARRIS PICKETT', 'BENNI LEE TIGNOR', 'MIGUEL ESPINAL', 'MICHAEL NOEL', 'KEVIN MATTHEWS', 'BETTIE JONES', 'QUINTONIO LEGRIER', 'KEITH CHILDRESS JR', 'JANET WILSON', 'RANDY NELSON', 'ANTRONIE SCOTT', 'WENDELL CELESTINE', 'DAVID JOSEPH', 'CALIN ROQUEMORE', 'DYZHAWN PERKINS', 'CHRISTOPHER DAVIS', 'MARCO LOUD', 'PETER GAINES', 'TORREY ROBINSON', 'DARIUS ROBINSON', 'KEVIN HICKS', 'MARY TRUXILLO', 'DEMARCUS SEMER', 'WILLIE TILLMAN', 'TERRILL THOMAS', 'SYLVILLE SMITH', 'ALTON STERLING', 'PHILANDO CASTILE', 'TERENCE CRUTCHER', "PAUL O'NEAL", 'ALTERIA WOODS', 'JORDAN EDWARDS', 'AARON BAILEY', 'RONELL FOSTER', 'STEPHON CLARK', 'ANTWON ROSE II', 'BOTHAM JEAN', 'PAMELA TURNER', 'DOMINIQUE CLAYTON', 'ATATIANA JEFFERSON', 'CHRISTOPHER WHITFIELD', 'CHRISTOPHER MCCORVEY', 'ERIC REASON', 'MICHAEL LORENZO DEAN', 'BREONNA TAYLOR', 'GEORGE FLOYD'];
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
});