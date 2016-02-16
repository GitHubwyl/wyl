	jQuery.fx.speeds["animation-time"]=300;						//自己制定的动画时间(但实际在这里并没有用到动画 ^ ^)
	var i=1;
	var setTime =2000;																//定时器时间
	var time1 = setInterval(autoChangeImg,setTime);		//定时器
	var init =function (){														//初始化,使其刚打开网站时,不是背景颜色,而直接是图片
		$(".frame").css("backgroundImage","url(/../img/douyu.jpg)");
		$(".focusDot").css("backgroundColor","white");
		$(".focusDot").has(".focusDot1").css("backgroundColor","green");
	}();
	function backgroundImgageChange(/* 数字*/elementNum,/*图片名*/imgName) {					//绑定事件
		$(".focusDot").has(".focusDot"+elementNum).bind('mouseenter',changeAnimation);	//mouseenter事件
		$(".focusDot").has(".focusDot"+elementNum).bind('mouseleave',changeAnimation1);	//mouseenter事件
		function changeAnimation() {																										//自动切换图片
			$(".frame").css("backgroundImage","url(/../img/"+imgName+")").animate({opacity:"1"},{duration:"animation-time",queue:true});
			$(".focusDot").css("backgroundColor","white");
			$(".focusDot").has(".focusDot"+elementNum).css("backgroundColor","green");
  		clearInterval(time1);																													//清楚定时器
			i=elementNum-1;																																//改变全局变量i,目的是为了鼠标移到"点"后,自动切换会切换到当前图像下一张,而不是原来自动切换的下一张
		}
		function changeAnimation1() {																									
			time1 = setInterval(autoChangeImg,setTime);																		//重新开启定时器
		}
	}
	backgroundImgageChange(1,"douyu.jpg");																						//执行(将元素和图片绑定)
	backgroundImgageChange(2,"huya.png");
	backgroundImgageChange(3,"longzhu.jpg");
	backgroundImgageChange(4,"panda.jpg");
	backgroundImgageChange(5,"zhanqi.jpg");

	function autoChangeImg() {																												//自动切换函数
		var imgList =["douyu.jpg","huya.png","longzhu.jpg","panda.jpg","zhanqi.jpg"];
		$(".frame").css("backgroundImage","url(/../img/" + imgList[i++] + ")");
		$(".focusDot").css("backgroundColor","white");
		$(".focusDot").has(".focusDot"+i).css("backgroundColor","green");
		if(i==5){
			i=0;
			}
		}

	