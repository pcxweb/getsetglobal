function diag(title, content, option){
	var defaults = { 
		title: title, 
		dialogClass: 'dialog', 
		height: 'auto', 
		maxHeight: false, 
		zIndex: 100, 
		show: 'fade', 
		hide: 'clip',
		bgiframe: true, 
		resizable: false, 
		autoOpen: true, 
		closeOnEscape: true, 
		stack: true, 
		modal: false
	};
	$.extend(defaults, option);
	if($('#dialog').length){
		 $('#dialog').dialog('destroy'); 
	}else{
		$('body').append('<div id="dialog" />');	
	}
	$('#dialog').html(content).dialog(defaults); 
}

function confirm(title, content, func){
	var defaults = {
		modal: true,
		buttons: {},
		close: function(){
			func(0);
		}
	};
	defaults.buttons[lang.yes] = function(){
		func(true);
		$('#dialog').dialog('close');
	};
	defaults.buttons[lang.no] = function(){
		func(false);
		$('#dialog').dialog('close');
	};
	diag(title, content, defaults);
}

function deleteAll(callback){
	$('button[id="deleteAll"]').off('click').click(function(){
		if($('input[name="delete"]').parent('.checked').length || $('input[name="delete"]').next('.checked').length){
			if(window.location != window.parent.location && !$.browser.msie){
				parent.confirm(lang.confirm, lang.file[4], function(result){
					callback(result);
				});
			}else{
				confirm(lang.confirm, lang.file[4], function(result){
					callback(result);
				});
			}
		}		
	});
}

function col(){
	$.each($('.col'), function(){
		if($(this).attr('width')){
			$(this).css('width', $(this).attr('width') + 'px');
		}
		if($(this).attr('height')){
			$(this).css('height', $(this).attr('height') + 'px');
		}
	});
}

function genurl(page, func, extra, get, language, hash) 
{
	var location = window.location;
	var base_path = lang.basePath;
	if(lang.htaccess)
	{
		var relative_path = (window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + location.pathname).replace(base_path, '');
		var para = relative_path.toString().split('/');
		if(lang.lang)
		{
			var para_language = para.shift();
			base_path += (language ? language + '/' : (para_language ? para_language + '/' : ''));
		}
		var para_page = para.shift();
		para_page = para_page ? para_page : lang.defPage;
		var para_func = para.shift();
		para_func = para_func ? para_func : lang.defFunc;
		var para_extra = para.join('/');
		if(page !== undefined)
		{
			base_path += (page ? page : para_page) + '/';
		}
		if(func !== undefined)
		{
			base_path += (func ? func : para_func) + '/';
		}
		if(extra !== undefined)
		{
			if(extra && extra !== true)
			{
				base_path += extra + '/';
			}
			else
			{
				base_path += para_extra;
			}
		}
		if(get && location.search)
		{
			if(typeof get == 'object')
			{
				var get_para = location.search.substring(1).toString().split('&');
				para = {};
				for(var i = 0; i < get_para.length; i++)
				{
					var value = get_para[i].toString().split('=');
					para[value[0]] = value[1];
				}
				for(var i in get)
				{
					para[i] = get[i];
				}
				var tmp_para = [];
				for(var i in para)
				{
					tmp_para.push(i + '=' + para[i]);
				}
				base_path += '?' + tmp_para.join('&');
			}
			else
			{
				base_path += location.search;
			}
		}
	}
	else
	{
		var get_para = decodeURIComponent(location.search.substring(1)).toString().split('&');
		para = {};
		var para_index = {};
		var para_get = {};
		for(var i = 0; i < get_para.length; i++)
		{
			var value = get_para[i].toString().split('=');
			if(value[0].indexOf('[') >= 0)
			{
				if(value[1])
				{
					var tmp_name = value[0].replace(/\[\d+\]/i, '');
					if(! (tmp_name in para_index))
					{
						para_index[tmp_name] = 0;
						para[tmp_name] = {};
					}
					para[tmp_name][para_index[tmp_name]++] = value[1];
				}
			}
			else
			{
				para[value[0]] = value[1];
			}
		}
		if(page == undefined || page == lang.defPage)
		{
			delete(para['_page']);
		}
		else if(page && page !== lang.defPage)
		{
			para['_page'] = page;
		}
		if(func == undefined || func == lang.defFunc)
		{
			delete(para['_func']);
		}
		else if(func && func !== lang.defFunc)
		{
			para['_func'] = func;
		}
		if(extra == undefined)
		{
			delete(para['_para']);
		}
		else if(extra && extra !== true)
		{
			extra = extra.toString().split('/');		
			if(extra.length > 0 && para['_para'] == undefined)
			{
				para['_para'] = [];
			}
			for(var i = 0; i <= extra.length; i++)
			{
				if(extra[i])
				{				
					para['_para'][i] = extra[i];
				}
			}
		}
		if(lang.lang && language)
		{
			para['_lang'] = language;
		}
		if(get == undefined)
		{
			for(var i in para)
			{
				if(i != '_page' &&
				   i != '_func' &&
				   i != '_para' &&
				   i != '_lang')
				{
					delete(para[i]);
				}
			}
		}
		else if(typeof get == 'object')
		{
			for(var i in get)
			{
				para[i] = get[i];
			}
		}
		var tmp_para = [];
		for(var i in para)
		{
			if(typeof para[i] == 'object')
			{
				for(var value in para[i])
				{
					tmp_para.push(i + '[' + value + ']=' + para[i][value]);
				}
			}
			else
			{
				tmp_para.push(i + '=' + para[i]);
			}
		}
		if(tmp_para.length)
		{
			base_path += '?' + tmp_para.join('&');
		}
	}
	if(hash)
	{
		if(hash !== true)
		{
			base_path += '#' + hash;
		}
		else
		{
			base_path += location.hash;
		}
	}
	return base_path;
}

(function($) {
	$.fn.extend({
		selectbox: function(method) {
			return this.each(function() {
				var self = $(this);
				if(self.attr('multiple') != 'multiple'){
					var default_value = self.attr('value');
					self.click(eventHandle);
					if(self.attr('data-reset-event') == undefined)
					{
						self.parents('form:first').bind('reset', function(){
							self.find('option').removeAttr('selected');
							self.attr('value', default_value).selectbox('refresh');
						});
						self.attr('data-reset-event', true);
					}
					switch(method){
						case 'refresh':
							self.selectbox('destroy').selectbox();
							break;
						case 'destroy':
							self.show().off('click').next('.select').remove();
							break;
						default:
							var text = $(this).find(':selected').text();
							var select = self.hide().after('<div class="select"><div class="select-input">' + (text !== undefined ? text : '') + '</div><div class="select-container" /></div>').next('.select').click(function(e){
								if($(this).hasClass('select-fix')){
									hide();
									select.parent().css('zIndex', 0);
								}else{
									hide();
									$(this).addClass('select-fix');
									select.children('.select-container').show();
									select.parent().css('zIndex', 1).siblings().css('zIndex', 0);
								}
								self.trigger('click');
								eventHandle(e);
							});
							select.addClass(self.attr('class'));
							$.each(self.find('option'), function(){
								if($(this).parent('optgroup').length && ! $(this).index())
								{
									select.children('.select-container').append('<div class="optgroup">' + $(this).parent('optgroup').attr('label') + '</div>');	
								}
								select.children('.select-container').append('<div' + ($(this).is(':disabled') ? ' class="disabled"' : '') + '>' + $(this).text() + '</div>');	
							});
							select.find('.select-container > div').click(function(e){
								if(! $(this).hasClass('disabled') && ! $(this).hasClass('optgroup')){
									hide();
									var index = $(this).siblings('div:not(.optgroup)').andSelf().index(this);
									if(index != self.find('option:selected').index()){
										select.children('.select-input').html($(this).html());
										self.find('option').attr('selected', false).eq(index).attr('selected', true);
										self.trigger('change');
									}
								}
								eventHandle(e);
							});
							$(document).click(hide);
							if(window.location != window.parent.location){
								$('*', top.document).click(hide);
							}
					}
				}
				function eventHandle(e){
					e.preventDefault();
					e.stopPropagation(); 
				}
				function hide(){
					$('.select-fix').removeClass('select-fix');
					$('.select-container').hide();
				}
			});
		},
		radiobox: function() {
			return this.each(function() {
				var self = $(this).hide();
				var is_checked = self.is(':checked');
				var hasLabel = self[0].nextSibling ? true : false;
				var radio = $(hasLabel ? self[0].nextSibling : self[0]).wrapAll('<div class="radio' + (hasLabel ? '' : ' no-label') + '" data-name="' + self.attr('name') + '" />').parent().click(function(e, h){
					$('.radio[data-name="' + self.attr('name') + '"]').removeClass('checked');
					$(this).addClass('checked');
					if(! h)
					{
						self.trigger('click', 'y');
					}
				});
				if(is_checked){
					radio.addClass('checked');
				}
				radio.addClass(self.attr('class'));
				self.parents('form:first').bind('reset', function(){
					if(is_checked)
					{
						radio.addClass('checked');
					}
					else
					{
						radio.removeClass('checked');
					}
				});
			});
		},
		checkbox: function() {
			return this.each(function() {
				var self = $(this).hide();
				var is_checked = self.is(':checked');
				var hasLabel = self[0].nextSibling ? true : false;
				var checkbox = $(hasLabel ? self[0].nextSibling : self[0]).wrapAll('<div class="checkbox' + (hasLabel ? '' : ' no-label') + '" />').parent().click(function(){
					if($(this).hasClass('checked')){
						$(this).removeClass('checked');
						setTimeout(function() {
							if($.browser.msie && $.browser.version <= 8 || self.attr('checked') == 'checked')
							{
								self.attr('checked', false).trigger('change');
							}
						}, 0);
					}
					else
					{
						$(this).addClass('checked');
						setTimeout(function() {
							if($.browser.msie && $.browser.version <= 8 || self.attr('checked') == undefined)
							{
								self.attr('checked', true).trigger('change');
							}
						}, 0);
					}
				});
				if(is_checked){
					checkbox.addClass('checked');
				}
				checkbox.addClass(self.attr('class'));
				self.parents('form:first').bind('reset', function(){
					if(is_checked)
					{
						checkbox.addClass('checked');
					}
					else
					{
						checkbox.removeClass('checked');
					}
				});
			});
		},
		uploadbox: function() {
			return this.each(function() {
				var self = $(this);
				var iframe;
				iframe = self.parents('.row:first').after('<div class="row"><iframe frameborder="0" scrolling="no" data-src="' + self.attr('href') + '" class="file_iframe s" /></div>').next().hide();
				self.click(function(e){
					iframe.slideToggle();
					e.preventDefault();
				});
			});
		},
		table: function(height) {
			return this.each(function() {
				var self = $(this);
				self.css('width', (self.width() - 2) + 'px').find('tbody > tr:last').children().css('border-bottom', 'none');
				$.each(self.children().children(':nth-child(1)'), function(){
					$.each($(this).children('td'), function(){
						$(this).css('width', $(this).width() + 'px');					
					});
				});
				var clone = self.clone();
				clone.children().remove();
				self.find('td:nth-child(n-1)').css('border-right', 'none');
				$.each(self.children(), function(){
					self.before('<div class="table-container" />').prev().wrapInner(clone.clone().wrapInner($(this)));
					if(! self.hasClass('no-scroll'))
					{
						self.prev().css('maxHeight', (height ? height : 300) + 'px')
					}
				});
				$.each(self.prevAll('.table-container'), function(){
					if($(this).children().height() > $(this).height()){
						$(this).children().css('width', $(this).children().width() + 'px');					
					}
				});
				self.prevAll('.table-container:eq(1)').css('border-bottom', 'none');
				self.prevAll('.table-container:last').css('border-top', '1px solid #D5D5D5');
				if(! self.hasClass('no-scroll'))
				{
					self.prev('.table-container').css('overflow', 'auto').scroll(function(){
						$(this).prevAll('.table-container').scrollLeft($(this).scrollLeft());
					});
				}
				self.remove();
			});
		}
	});
})(jQuery);

function reloadPreview(){
	var iframe = parent.$('.preview_iframe');
	if(iframe.length){
		iframe.attr('src', iframe.attr('src'));
	}
}