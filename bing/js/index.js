$(function(){
	/*轮播图*/
	var imgLength = $('.box img').length;
	var index = imgLength-1;
	
	$('box .left').click(function(){
		index--;
		lun();
	})
	
	$('.box .right').click(function(){
		index++;
		lun();
	})
	
	$('.box').hover(function(){
		$('.box a').animate({opacity:'1'},200)
	},function(){
		$('.box a').animate({opacity:'0'},200)
	})
	
	setInterval(function(){
		index++;
		lun();
	},3000);
	
	function lun(){
		if(index > imgLength){
			index = 0;
		}else if(index <0){
			index = index=imgLength-1;
		}
		$('.box img').eq(index).animate({opacity:'1'}).siblings('img').animate({opacity:'0'});
	}
	
	/*导航栏*/
	$('.daohang li').hover(function(){
		$(this).children('ul').show();
	},function(){
		$(this).children('ul').hide();
	})
	
	/*四张*/
	$('.ABq div').hover(function(){
		$(this).children('button').css({'background':'#f84949','color':'#FFFFFF'
		}).children('span').css('color','#FFFFFF')
		
	},function(){
		$(this).children('button').css({'background':'#FFFFFF','color':'#000000'
		}).children('span').css('color','#FFFFFF')
	})
	
	//供稿人
	setInterval(function(){
		$('.qian .mou p').animate({left:'-340px'},5000).animate({left:'0px'},5000)
	},1000)
	
	/*热点活动*/	
	$('.rdh a').hover(function(){
		$(this).children('img').css('transform','scale(1.2)')
	},function(){
		$(this).children('img').css('transform','scale(1)')
	})
})
