var urlobj = getUrlArgObject();
// console.log(urlobj)
if(urlobj.name){
	var txt = "";
	$("#app-about-nav select").find("option[value='"+urlobj.name+"']").attr("selected",true).siblings().attr("selected",false)
	$("."+urlobj.name).addClass("showDiv").siblings("div").removeClass("showDiv").addClass("hideDiv");
	switch(urlobj.name){
		case "inlineBox":
			txt = "線上諮詢";
			break;
		case "headOffice":
			txt = "聯絡捷先總公司";
			break;
		case "twOffice":
			txt = "聯絡台灣捷先";
			break;
	}
	$("#changetxt").text(txt)
}
