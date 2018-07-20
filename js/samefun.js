// 以对象的形式返回URL问号后面的参数
function getUrlArgObject(){    
    var args=new Object();    
    var query=location.search.substring(1);//获取查询串    
    var pairs=query.split("&");//在逗号处断开    
    for(var i=0;i<pairs.length;i++){    
        var pos=pairs[i].indexOf('=');//查找name=value    
        if(pos==-1){//如果没有找到就跳过    
            continue;    
        }    
        var argname=pairs[i].substring(0,pos);//提取name    
        var value=pairs[i].substring(pos+1);//提取value   
        // console.log(decodeURI(value)) 
        args[argname]=decodeURI(value);//存为属性    
    }    
    return args;//返回对象    
}
$("#app-about-nav select").change(function(){
    var vals = $(this).val()
    $("."+vals).addClass("liboxIn").siblings().removeClass("liboxIn")
    
})

// 左侧切换
function changLi(ele){
    $(ele).parents(".about-con-nav").find('ul li').removeClass('active');
    $(ele).parents(".about-con-nav").find('ul li').find(".fa").css("display","none")
    $(ele).addClass("active")
    $(ele).find(".fa").css("display","inline")
}

function collegeFun(collegeJson){
    var result = "";
    for (var i = 0; i < collegeJson.length; i++) {
        var lilist = "";
        var lisListarr = collegeJson[i].list
        for (var j = 0; j < lisListarr.length; j++) {
            lilist+='<li class="col-md-4 col-xs-12">'
                + '<a href="javascript:;"><img src="/wisdom/images/schoollogo'+lisListarr[j].logo+'" alt="">'
                + '<p>'+lisListarr[j].title+'</p></a></li>';
        }
        result += '<div class="countryNum" id="'+collegeJson[i].id+'"><div class="childtitle">'
                + '<img src="/wisdom/images/flag_image'+collegeJson[i].flag+'" alt=""><a href="">'+collegeJson[i].name+'</a></div>'
                + '<div class="listItem"><ul>'+lilist+'</ul></div></div>'

    }

    return result;
}
