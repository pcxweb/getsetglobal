$(function(){
	$(".about-con-nav li").click(function(){
		var linkClass = $(this).attr("data-link")
	    var navtxt = $(this).text();
	    $("#changetxt").text(navtxt)
		changLi(this);	
		$("."+linkClass).addClass("liboxIn").siblings().removeClass("liboxIn")
		

	})
	var urlobj = getUrlArgObject();
	// console.log(urlobj)
	if(urlobj.name){

		var txt = "";
		var ele = "li[data-link='"+urlobj.name+"']";
		$("#app-about-nav select").find("option[value='"+urlobj.name+"']").attr("selected",true).siblings().attr("selected",false)
		changLi(ele);
		$("."+urlobj.name).addClass("liboxIn").siblings("div").removeClass("liboxIn");
		switch(urlobj.name){
			case "why":
				txt = "為什麼選擇捷先";
				break;
			case "latestNew":
				txt = "最新消息";
				break;
			case "schoolvisit":
				txt = "學校代表來訪";
				break;
			case "studentView":
				txt = "學生意見分享";
				break;
			case "scholarShip":
				txt = "獎學金";
				break;
			case "entest":
				txt = "英語線上測驗";
				break;
		}
		$("#changetxt").text(txt)
	}


})
	
function changLi(ele){
	$(ele).parents(".about-con-nav").find('ul li').removeClass('active');
	$(ele).parents(".about-con-nav").find('ul li').find(".fa").css("display","none")
	$(ele).addClass("active")
	$(ele).find(".fa").css("display","inline")
	// $(ele).parents(".about-con-nav").find('ul li').find(".fa").css("display","none")
	// $(ele).find(".fa").css("display","inline")
	// $(ele).addClass("active").siblings("li").removeClass("active")
}
