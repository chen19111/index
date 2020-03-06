$(function(){
	/*轮播图*/
	var imgL=$('.tup img').length;
	var index=imgL-1;
	
	$('.tup .left').click(function(){
		index--;
		tp();
	})
	
	$('.tup .right').click(function(){
		index++;
		tp();
	})
	
	$('.tup').hover(function(){
		$('.tup span').animate({opacity:'1'},200)
	},function(){
		$('.tup span').animate({opacity:'0'},200)
	})
	
	setInterval(function(){
		index++;
		tp();
	},3000);
	
	function tp(){
		if(index>imgL){
			index=0;
		}else if(index<0){
			index=index=imgL-1;
		}
		$('.tup img').eq(index).animate({opacity:'1'}).siblings('img').animate({opacity:'0'});
	}
	
	
	/*导航效果*/
	$('.daoh li').hover(function(){
		$(this).children('ul').show();
	},function(){
		$(this).children('ul').hide();
	})
	
	
	/*四张图片*/
	$('.sztp p').hover(function(){
		$(this).children('button').css({
			'background':'#f84949',
			'color':'#FFFFFF'
		}).children('span').css(
			'color','#FFFFFF'
		)
	},function(){
		$(this).children('button').css({
			'background':'#FFFFFF',
			'color':'#000000'
		}).children('span').css(
			'color','#f84949'
		)
	})
	/*查看更多*/
	$('.zhyx .xiangmu p').hover(function(){
		$(this).children('span').animate({left:'90px'},500);
	},function(){
		$(this).children('span').animate({left:'70px'},500);
	})
	
	/*很多图片*/
	setInterval(function(){
		$('.ggr .hdtp p').animate({left:'-340px'},5000).animate({left:'0px'},5000)
	},1000)
	
		$('.fxtp .p1').hover(function(){
		$(this).children('span').animate({right:'180px'},500);
	},function(){
		$(this).children('span').animate({right:'200px'},500);
	})
		
	/*热点活动*/	
	$('.rmhd a').hover(function(){
		$(this).children('img').css('transform','scale(1.2)')
	},function(){
		$(this).children('img').css('transform','scale(1)')
	})
	
})
