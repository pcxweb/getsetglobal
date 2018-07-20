$(document).ready(function(){
	resize();
	$(window).resize(resize);
	
	$("#menu-toggle").click(function(){
		$("#menu-m").toggleClass("active");
	});
	
	$("#search-toggle").click(function(){
		$("#search-form-m").toggleClass("active");
	});
	
	if($(".owl-item").length<=1)
		$(".owl-buttons").hide();
	
	$(".owl-carousel").owlCarousel({
		navigation:true
	});
	
	jQuery.expr[':'].contains = function(a, i, m) {
	  return jQuery(a).text().toUpperCase()
		  .indexOf(m[3].toUpperCase()) >= 0;
	};
	
	$('#filter-form').submit(function(e) {
		e.preventDefault();
	
		$('.item a').removeClass('darkred');
		if($.trim($('#filter-keyword').attr('value')))
		{
			$('.item a:contains(' + $('#filter-keyword').attr('value') + ')').addClass('darkred');
			if($('.item a.darkred').length)
			{
				$(document).scrollTop($('.item a.darkred:first').offset().top);
			}
			else
			{
				alert("找不到結果");
			}
		}
	});
	
	//$('img[data-src]').css('opacity', 0);
	//$('img[data-src]').hide();
	$('*[data-bgsrc]').each(function() {
		var bg = $(this).attr('style').match(/background[ ]*:([^;"]*)/);
		if (bg != null) {
			$(this).attr('data-bg', bg[1]);
			$(this).css('background', 'url(/img/loading2.gif) no-repeat center center');
		}
		//$(this).attr('data-bg', )
	});

	loadImg();
	loadBgImg();

});

function loadImg() {
    var $imgs = $('img[data-src]');
    if ($imgs.length) {
        var $img = $imgs.first();
        $img.on('load', function() {
			$img.css('opacity', 0).fadeTo('fast', 1);
			//$img.fadeIn();
			var bgImg = $img.css('background-image');
			if ((new RegExp('loading2\\.gif"\\)$')).test(bgImg)) {
				$img.css('background', 'none');
			}
			setTimeout(function() { loadImg() }, 40);

        }).on('error', function() {
            setTimeout(function() { loadImg() }, 40);
        });
        var src = $img.attr('data-src');
        $img.removeAttr('data-src');
        $img.attr('src', src);
    }
}

function loadBgImg() {
	var $imgs = $('*[data-bgsrc]');
    if ($imgs.length) {
		var $img = $imgs.first();
		//var img = $('<img>');
		if (typeof $imgs[0].bgImgSrc === 'undefined') {
			$imgs[0].bgImgSrc = $('<img>');
		}

		var img = $imgs[0].bgImgSrc;
		img.on('load', function () {
			//$img.css({ backgroundImage:img.src });
			$img.css({ background:$img.attr('data-bg') });
			$img.removeAttr('data-bg');
			$img.removeAttr('data-bgsrc');
			setTimeout(function() { loadBgImg() }, 40);
		}).on('error', function () {
			setTimeout(function() { loadBgImg() }, 40);
		});
		img.attr('src', $img.attr('data-bgsrc'));

		/*
        $img.on('load', function() {
            $img.fadeIn();
            setTimeout(function() { loadImg() }, 100);
        }).on('error', function() {
            setTimeout(function() { loadImg() }, 100);
        });
        var src = $img.attr('data-src');
        $img.removeAttr('data-src');
		$img.attr('src', src);
		*/
    }
}


function resize(){
	if(document.URL.indexOf("/seminars")!=-1){
		$(".items .item").each(function(){
			var width = $(this).width();
			var image_w = $(this).find(".item-image").outerWidth();
			var date_w = $(this).find(".item-date").outerWidth()
			$(this).find(".item-desc").width(width-image_w-date_w-30);
		});
		
		if($(".main-content").length>0){
			if($(".main-content-title").css('float')=='left'){
				var width = $(".title-bar").width();
				var date_w = $(".main-content-date").width();
				var link_w = $(".link-back").width();
				
				$(".main-content-title").css("max-width",width-date_w-link_w-50);
			} else {
				$(".main-content-title").css("max-width","");
			}
		}
	}
	
	if(document.URL.indexOf("/testimonials")!=-1){
		if($(".item-right:eq(0)").css("float")=="right"){
			var container_width = $("#content>.container").width();
			var item_right_width = 897-(1140-container_width);
			$(".item-right").width(item_right_width);
			
		} else {
			$(".item-right").css("width","");
		}
	}
	
	if(document.URL.indexOf("/links/download")!=-1){
		if($(".item-right:eq(0)").css("float")=="right"){
			$(".items .item").each(function(){
				$(this).find(".item-left").outerWidth($(this).width()-$(this).find(".item-right").outerWidth()-1);
				$(this).find(".item-right").height($(this).find(".item-left").outerHeight());
			});
		} else {
			$(".items .item-left").css("width","");
			$(".items .item-right").css("height","");
		}
	}
	
	if($(".featured-items .item").length>0){
		if($(".featured-items .item:eq(0) .item-image").css("float")=="left"){
			$(".featured-items .item .item-right").width($(".featured-items .item:visible").width()-$(".featured-items .item:visible").find(".item-image").width()-38);
			$(".featured-items .cycle-pager").css("left",$(".featured-items .item:visible").find(".item-image").width()+65);		
		} else {
			$(".featured-items .item .item-right").css("width","");
			$(".featured-items .cycle-pager").css("left","");
		}
	}
	
	if($(".institutions-items .item").length>0){
		$(".institutions-items .item").each(function(){
			$(this).find(".item-right").width($(this).width()-$(this).find(".item-image").width()-20);
		});
	}
}

