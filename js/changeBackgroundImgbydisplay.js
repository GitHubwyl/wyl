	var imgIndex = 1;
	var autoChangeTimer = setInterval(autochangeFocusDotImg,2000);				//�����Զ��л�ͼ��
	var focusDot = document.getElementsByClassName("focusDot");						//ͨ��class��ȡ"��"��Ԫ��������
	var focusDotImg = document.getElementsByClassName("imgBackground");		//ͨ��class��ȡ������img��Ԫ��������
	var initstaus =	function() {changeFocusDotImgCSS(0);}();							//��ʼ��״̬,��ָ����div�е�һ��ͼ��,����������֮���Ǳ�����ɫ
	function changeFocusDotImgCSS(imgindex) {															//�ı䱳���ĺ���,ͨ�����ú�������,�Ϳ���������Ϊ��ʾ״̬
		  focusDotImg[imgindex].style.display = "block";										
			focusDotImg[imgindex].style.backgroundRepeat = "no-repeat";
			focusDotImg[imgindex].style.backgroundPosition = "center top";
			focusDot[imgindex].style.backgroundColor = "#00B75B";							//�ı��Ӧ"��"����ɫ
		}
	function clearfocusDotBGandBGimg() {																	//���"��"����ɫ����ȫ��ͼƬ����ʾ
		  Array.prototype.map.call(focusDotImg,function(e) {e.style.display="none"});
			Array.prototype.map.call(focusDot,function(e) {e.style.backgroundColor="white"});
		}
	function changeFocusDotImg(i) {																				//��mouseenter&mouseleave�¼�,
			focusDot[i].addEventListener("mouseenter",enterFocusDot,false);
			focusDot[i].addEventListener("mouseleave",leaveFocusDot,false);
		function enterFocusDot(event) {																			//mouseenter�¼�[�������"��"��ʹȫ��ͼ����ʾ,Ȼ����ʾָ��ͼ��]
			event = event || window.event;
			clearfocusDotBGandBGimg();
			changeFocusDotImgCSS(i);
			imgIndex = i;																											//imgIndex���Զ�����ͼ���ȫ�ֱ���
			clearInterval(autoChangeTimer);																		//�����ʱ��
			}
		function leaveFocusDot(event) {
			autoChangeTimer = setInterval(autochangeFocusDotImg,2000);				//�ö�ʱ�����¹���
			}
		}
		
	for(i=0;i<focusDotImg.length;i++) {																		//Ϊ����ͼ����¼�
			changeFocusDotImg(i);
		}
		
	function autochangeFocusDotImg() {																		//�Զ�����ͼ����
			clearfocusDotBGandBGimg();																				//���
			changeFocusDotImgCSS(imgIndex);
			imgIndex = imgIndex+1;																						//ȫ�ֱ���imgIndex+1Ϊ���´ζ�ʱ��ִ��ʱ,������ͬ��ͼ��		
			if(imgIndex == 5){
				imgIndex=0;
			}
		}
