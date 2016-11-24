$(function () {
//轮播图
var index = 0;
		function move() {
		t=setInterval(function () {
			index ++;
			index = (index++)%3;

			$(".banner-box .banner-ul>li").eq(index).siblings().removeClass("guodu1").fadeOut(1000, function() {
				$(".banner-box .banner-ul>li").eq(index).addClass("guodu1").fadeIn(1500)
			});
			$(".banner-box>ol>li").eq(index).siblings().removeClass("guodu1").fadeOut(1000, function() {
				$(".banner-box>ol>li").eq(index).addClass("guodu1").fadeIn(1500)
			});
			$('.huidong>span').eq(index).addClass("qingse").siblings().removeClass("qingse")


		},3000);
		}
		move()
		//点击
		$('.huidong>span').click(function() {
			clearInterval(t);
			var index = $(this).index();

			$(this).addClass("qingse").siblings().removeClass('qingse');
			$(".banner-box .banner-ul>li").eq(index).siblings().removeClass("guodu1").fadeOut(1500, function() {
				$(".banner-box .banner-ul>li").eq(index).addClass("guodu1").fadeIn(1500)
			});
			$(".banner-box>ol>li").eq(index).siblings().removeClass("guodu1").fadeOut(1500, function() {
				$(".banner-box>ol>li").eq(index).addClass("guodu1").fadeIn(1500)
			});
		});



	// 鼠标事件
		$('.banner-box').mouseover(function() {
			clearInterval(t);
		}).mouseout(function() {
			move();
		});













	// tab项目
$('.tab-box-img img').eq(0).addClass("cl").siblings("img").hide();
$(".tab-xiangmu .tab-content").eq(0).addClass("show").siblings(".tab-content").hide();
	$(".tab-xiangmu ul li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass('active');
		var index = $(this).index();
		$(".tab-xiangmu .tab-content").hide().eq(index).show(1000).addClass("show");
		
		$('.tab-box-img img').hide().eq(index).show(1500).addClass("cl");


	});

//团队
$(".tuandui-content .tuandui-content-box-1").eq(0).addClass("dang").siblings(".tuandui-content-box-1")
	$('.tuandui-img img').mouseover(function () {
		var index = $(this).index();
		$(this).addClass("liang").siblings("img").removeClass("liang");
		$(".tuandui-content .tuandui-content-box-1").eq(index).addClass("dang").siblings('.tuandui-content-box-1').removeClass("dang");
		})



// 大返回监听
$(window).scroll(function() {
		var top = 0;
		if ($('body').scrollTop()) {
			top = $('body').scrollTop();
		}else{
			top = $('html').scrollTop();
		}



		if (top>400) {
			$('.dafanhui').fadeIn(2000);
		}else{
			$('.dafanhui').fadeOut(2000);
		}









	});
	$('.dafanhui').click(function() {
			$('html,body').animate({scrollTop:0},1000);
		});





});
