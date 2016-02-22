	var imgIndex = 1;
	var autoChangeTimer = setInterval(autochangeFocusDotImg,2000);				//设置自动切换图像
	var focusDot = document.getElementsByClassName("focusDot");						//通过class获取"点"的元素类数组
	var focusDotImg = document.getElementsByClassName("imgBackground");		//通过class获取设置了img的元素类数组
	var initstaus =	function() {changeFocusDotImgCSS(0);}();							//初始化状态,即指定的div有第一张图像,而不是切入之后是背景颜色
	function changeFocusDotImgCSS(imgindex) {															//改变背景的函数,通过给该函数数字,就可以设置其为显示状态
		  focusDotImg[imgindex].style.display = "block";										
			focusDotImg[imgindex].style.backgroundRepeat = "no-repeat";
			focusDotImg[imgindex].style.backgroundPosition = "center top";
			focusDot[imgindex].style.backgroundColor = "#00B75B";							//改变对应"点"的颜色
		}
	function clearfocusDotBGandBGimg() {																	//清除"点"的颜色和让全部图片不显示
		  Array.prototype.map.call(focusDotImg,function(e) {e.style.display="none"});
			Array.prototype.map.call(focusDot,function(e) {e.style.backgroundColor="white"});
		}
	function changeFocusDotImg(i) {																				//绑定mouseenter&mouseleave事件,
			focusDot[i].addEventListener("mouseenter",enterFocusDot,false);
			focusDot[i].addEventListener("mouseleave",leaveFocusDot,false);
		function enterFocusDot(event) {																			//mouseenter事件[清除其他"点"并使全部图像不显示,然后显示指定图像]
			event = event || window.event;
			clearfocusDotBGandBGimg();
			changeFocusDotImgCSS(i);
			imgIndex = i;																											//imgIndex是自动更换图像的全局变量
			clearInterval(autoChangeTimer);																		//清除定时器
			}
		function leaveFocusDot(event) {
			autoChangeTimer = setInterval(autochangeFocusDotImg,2000);				//让定时器重新工作
			}
		}
		
	for(i=0;i<focusDotImg.length;i++) {																		//为所有图像绑定事件
			changeFocusDotImg(i);
		}
		
	function autochangeFocusDotImg() {																		//自动更换图像函数
			clearfocusDotBGandBGimg();																				//清除
			changeFocusDotImgCSS(imgIndex);
			imgIndex = imgIndex+1;																						//全局变量imgIndex+1为了下次定时器执行时,更换不同的图像		
			if(imgIndex == 5){
				imgIndex=0;
			}
		}
