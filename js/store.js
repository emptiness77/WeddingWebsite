// JavaScript Document
$(document).ready(function(){
	var mod_menu=$(".mod-menu");//导航模块区
	var menu=function(){
		var menuItem=$(".menu-item li");//选择导航列表
		menuItem.each(function(){
			var _index=$(this).index();//获取当前选择菜单列表的索引
			$(this).mouseenter(function(){
				$(this).siblings().children().css("color","#fff");
				$(this).siblings().children().children().css("color","#fff");
				var y = $(this).position().top+1;//获取当前鼠标滑过的列表的顶部坐标
				$(".menu-cont").fadeIn();
				$(".menu-cont").css("top",y);//需要显示的对应索引内容
				$(this).addClass("mouse-bg").siblings().removeClass("mouse-bg");
				$(this).children().css("color","#75f0ec");
				$(this).children().children().css("color","#75f0ec");
				$(".menu-cont>div").eq(_index).fadeIn().siblings().hide();
			});
		});
		/*导航菜单菜单*/
		$(".mod-menu").mouseleave(function(){
			$(".menu-cont").hide();
			menuItem.removeClass("mouse-bg");
			$(".menu-item li").children().css("color","#fff");
			$(".menu-item li").children().children().css("color","#fff");
		})
		$(".menu-cont-list").mouseleave(function(){
			$(".menu-cont").hide();
			menuItem.removeClass("mouse-bg");
			$(".menu-item li").children().css("color","#fff");
			$(".menu-item li").children().children().css("color","#fff");
		});
	}//展开二级菜单	
	menu();//执行展开二级菜单函
	//分类图片遮罩效果
	//分类01
	$(".classes01_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes01_1 div").eq(n).stop();
		$(".classes01_1 div").eq(n).fadeIn();
	});
	$(".classes01_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes01_1 div").eq(n).stop();
		$(".classes01_1 div").eq(n).fadeOut();
	});
	$(".classes01_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes01_2 div").eq(n).stop();
		$(".classes01_2 div").eq(n).fadeIn();
	});
	$(".classes01_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes01_2 div").eq(n).stop();
		$(".classes01_2 div").eq(n).fadeOut();
	});
	//分类02
	$(".classes02_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes02_1 div").eq(n).stop();
		$(".classes02_1 div").eq(n).fadeIn();
	});
	$(".classes02_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes02_1 div").eq(n).stop();
		$(".classes02_1 div").eq(n).fadeOut();
	});
	$(".classes02_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes02_2 div").eq(n).stop();
		$(".classes02_2 div").eq(n).fadeIn();
	});
	$(".classes02_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes02_2 div").eq(n).stop();
		$(".classes02_2 div").eq(n).fadeOut();
	});
	//分类03
	$(".classes03_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes03_1 div").eq(n).stop();
		$(".classes03_1 div").eq(n).fadeIn();
	});
	$(".classes03_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes03_1 div").eq(n).stop();
		$(".classes03_1 div").eq(n).fadeOut();
	});
	$(".classes03_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes03_2 div").eq(n).stop();
		$(".classes03_2 div").eq(n).fadeIn();
	});
	$(".classes03_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes03_2 div").eq(n).stop();
		$(".classes03_2 div").eq(n).fadeOut();
	});
	//分类04
	$(".classes04_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes04_1 div").eq(n).stop();
		$(".classes04_1 div").eq(n).fadeIn();
	});
	$(".classes04_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes04_1 div").eq(n).stop();
		$(".classes04_1 div").eq(n).fadeOut();
	});
	$(".classes04_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes04_2 div").eq(n).stop();
		$(".classes04_2 div").eq(n).fadeIn();
	});
	$(".classes04_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes04_2 div").eq(n).stop();
		$(".classes04_2 div").eq(n).fadeOut();
	});
	//分类05
	$(".classes05_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes05_1 div").eq(n).stop();
		$(".classes05_1 div").eq(n).fadeIn();
	});
	$(".classes05_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes05_1 div").eq(n).stop();
		$(".classes05_1 div").eq(n).fadeOut();
	});
	$(".classes05_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes05_2 div").eq(n).stop();
		$(".classes05_2 div").eq(n).fadeIn();
	});
	$(".classes05_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes01_5 div").eq(n).stop();
		$(".classes01_5 div").eq(n).fadeOut();
	});
	//分类06
	$(".classes06_1 li").mouseover(function(){
		var n = $(this).index();
		$(".classes06_1 div").eq(n).stop();
		$(".classes06_1 div").eq(n).fadeIn();
	});
	$(".classes06_1 li").mouseout(function(){
		var n = $(this).index();
		$(".classes06_1 div").eq(n).stop();
		$(".classes06_1 div").eq(n).fadeOut();
	});
	$(".classes06_2 li").mouseover(function(){
		var n = $(this).index();
		$(".classes06_2 div").eq(n).stop();
		$(".classes06_2 div").eq(n).fadeIn();
	});
	$(".classes06_2 li").mouseout(function(){
		var n = $(this).index();
		$(".classes06_2 div").eq(n).stop();
		$(".classes06_2 div").eq(n).fadeOut();
	});
	
	//图片放大镜
	$.fn.magnifying = function(){
		var that = $(this),
		 $imgCon = that.find('.con-fangDaIMg'),//正常图片容器
		 	$Img = $imgCon.find('img'),//正常图片，还有放大图片集合
		   $Drag = that.find('.magnifyingBegin'),//拖动滑动容器
		   $show = that.find('.magnifyingShow'),//放大镜显示区域
		$showIMg = $show.find('img'),//放大镜图片
		$ImgList = that.find('.con-FangDa-ImgList > li >img'),
		multiple = $show.width()/$Drag.width();

		$imgCon.mousemove(function(e){
			$Drag.css('display','block');
			$show.css('display','block');
		    //获取坐标的两种方法
		   	// var iX = e.clientX - this.offsetLeft - $Drag.width()/2,
		   	// 	iY = e.clientY - this.offsetTop - $Drag.height()/2,	
		   	var iX = e.pageX - $(this).offset().left - $Drag.width()/2,
		   		iY = e.pageY - $(this).offset().top - $Drag.height()/2,	
		   		MaxX = $imgCon.width()-$Drag.width(),
		   		MaxY = $imgCon.height()-$Drag.height();
				
  	   	    /*这一部分可代替下面部分，判断最大最小值
		   	var DX = iX < MaxX ? iX > 0 ? iX : 0 : MaxX,
		   		DY = iY < MaxY ? iY > 0 ? iY : 0 : MaxY;
		   	$Drag.css({left:DX+'px',top:DY+'px'});	   		
		   	$showIMg.css({marginLeft:-3*DX+'px',marginTop:-3*DY+'px'});*/

		   	iX = iX > 0 ? iX : 0;
		   	iX = iX < MaxX ? iX : MaxX;
		   	iY = iY > 0 ? iY : 0;
		   	iY = iY < MaxY ? iY : MaxY;	
		   	$Drag.css({left:iX+'px',top:iY+'px'});	   		
		   	$showIMg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});
		   	//return false;
		});
		$imgCon.mouseout(function(){
		   	$Drag.css('display','none');
			$show.css('display','none');
		});

		$ImgList.click(function(){
			var NowSrc = $(this).data('bigimg');
			$Img.attr('src',NowSrc);
			$(this).parent().addClass('active').siblings().removeClass('active');
		});	
	}

	$("#fangdajing").magnifying();
	
	//商品详情页
	//点击收藏
	$(".icon-collect").click(function(){
		$(".word-collect").text("已收藏");
		$(".icon-collect").css("color","#f66");
	});
	//选中尺码
	$(".option_chima li").click(function(){
		$(".option_chima li").css("border","1px solid #ccc");
		$(this).css("border","2px solid #f66");
	});
	//选中颜色
	$(".option_color li").click(function(){
		$(".option_color li").css("border","1px solid #ccc");
		$(this).css("border","2px solid #f66");
	});
});







