/*
实现功能点：1.轮播图轮播形式为无缝轮播，轮播时底部按钮颜色会按照顶部图片来进行变化。用户可自定义图片数量。
			2.轮播图开始为向右自动切换状态，当用户鼠标移动到轮播图上时停止轮播并显示切换按钮（左右箭头）。
			3.点击左右切换按钮可以想左右进行切换，底部按钮也可以根据点击进行切换，当鼠标移开轮播图时按钮消失并开始自动轮播。
			4.点击切换按钮时进行了设置，防止进行重复绑定。
			5.进行兼容性调试，保证在ie8及以上、chrome、Firefox等浏览器上正常显示，并在不同窗体大小下能保持在居中位置。
*/


$(function() {

	function slideShow() {
		var num = $('#picList').attr('num');
		var node = "";
		for (var i = 1; i <= num; i++) {
			node += "<li class='pic" + i + "'><img src='img/picture" + i + ".jpg' alt='picture" + i + ".jpg'></li>";
		}
		$('#picList').html($(node));
		if (num > 1) {
			$('#picList').append("<li class='pic" + 1 + "'><img src='img/picture" + 1 + ".jpg' alt='picture" + 1 + ".jpg'></li>");
			$('#picList').prepend("<li class='pic" + num + "'><img src='img/picture" + num + ".jpg' alt='picture" + num + ".jpg'></li>");
		}

		node = "";
		for (var j = 1; j <= num; j++) {
			node += "<li class='item" + j + "'><img src='img/botton.png'</li>";
		}
		$('#botton').html($(node));
		$('.item1').addClass('bottonChange');
	}

	slideShow();



	//通过index控制轮播位置
	var index = 1;
	//当鼠标悬浮箭头消失停止轮播 当鼠标移开继续轮播
	$("#container").mouseover(function(event) {
		clearInterval(timer);
		$("#leftArrow,#rightArrow").show();
	});
	$("#container").mouseleave(function(event) {
		$("#leftArrow,#rightArrow").hide();
		timer = setInterval(function() {
			change("right");
		}, 2000);
	});
	//左右箭头控制轮播方向
	$("#leftArrow").on('click', function() {
		trun("left");
	})
	$("#rightArrow").on('click', function() {
			trun("right");
		})
		//方向控制函数
	function trun(trun) {

		if (trun == "left") {
			clearInterval(timer);
			change("left");

		} else {
			clearInterval(timer);
			change("right");
		}
	}
	// 动画控制函数
	function change(direction) {
		var num = $('#picList').attr('num');
		$("#botton li").eq(index - 1).removeClass('bottonChange');

		if (direction == "left") {
			$("#leftArrow").off('click'); //防止重复绑定
			if (index === 1) {
				$("#botton li").eq(num - 1).addClass('bottonChange');
				$("#picComponent").stop().animate({
					"left": 0
				}, 800, function() {
					$("#picComponent").css({
						"left": -365 * num + "px"
					})
					$("#leftArrow").on('click', function() {
						trun("left");
					})
				});
				index = num;

			} else {
				index -= 1;
				$("#botton li").eq(index - 1).addClass('bottonChange');
				$("#picComponent").stop().animate({
					"left": -index * 365 + 'px'
				}, 800, function() {
					/*$("#leftArrow").on('click', function() {
						trun("left");
					})*/
					$("#leftArrow").on('click', function() {
						trun("left");
					})
				});

			}

		} else {
			$("#rightArrow").off('click');
			if (index == num) {
				$("#picComponent").stop().animate({
					"left": $("#picComponent").position().left - 365 + 'px'
				}, 800, function() {
					$("#botton li").eq(index - 1).addClass('bottonChange');
					$("#picComponent").css({
						"left": "-365px"
					})
					$("#rightArrow").on('click', function() {
						trun("right");
					})
				});
				index = 1;
			} else {
				index += 1;
				$("#picComponent").stop().animate({
					"left": -index * 365 + 'px'
				}, 800, function() {
					$("#botton li").eq(index - 1).addClass('bottonChange');
					$("#rightArrow").on('click', function() {
						trun("right");
					})
				});
			}

		}

	}
	//底部按钮切换
	$("#botton li").on('click', function() {
		$("#botton li").eq(index - 1).removeClass('bottonChange');
		index = $(this).index() + 1;
		$("#picComponent").stop().animate({
			"left": -(index) * 365 + 'px'
		}, 800, function() {
			$("#botton li").eq(index - 1).addClass('bottonChange');
		});


	})
	var timer = setInterval(function() {
		change("right");
	}, 1500)

})