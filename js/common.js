var initFooter = function(curItem){
	menu = [{"title":"福利账户","linkUrl":"index.html"},{"title":"福利商城","linkUrl":"prod_list.html"},{"title":"我的账户","linkUrl":"account.html"}]
	$.each(menu,function(index, el) {
		var dom = '';
		var isCurItem = '';
		if(el.title == curItem){
			isCurItem = 'actived';
		}
		dom = '<a class="columns two '+isCurItem+'" href="'+el.linkUrl+'"><div class="img"></div><div class="footer-tit">'+el.title+'</div></a>';
		$("#footer").append(dom);
	});
}