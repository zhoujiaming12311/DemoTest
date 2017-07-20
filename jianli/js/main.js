$(function() {
	/*var modelOffset = [];
	// document.documentElement.style.fontSize = document.documentElement.clientWidth / 640 + 'px';
	for (var i = 0; i < $(".model1").length; i++) {
		modelOffset.push($(".model1").eq(i).offset().top);
	}

	var scrollTop;
	$(window).on("scroll", function() {
		scrollTop = $(window).scrollTop() + $(window).height() + "";
		if (scrollTop >= modelOffset[0]) {
			$(".model1").eq(0).addClass('animationRight');
		} else if (scrollTop >= modelOffset[1]) {
			$(".model1").eq(1).addClass('animationRight');
		} else if (scrollTop >= modelOffset[2]) {
			$(".model1").eq(2).addClass('animationRight');
		} else if (scrollTop >= modelOffset[3]) {
			$(".model1").eq(3).addClass('animationRight');
		}
		console.log(scrollTop >= modelOffset[3])
	})*/
	var modelOffset = $(".model1").offset().top;
	var production = $(".production").offset().top;
	var info = $("#info").offset().top;
	var topContainer = $("#topContainer").offset().top;

	var scrollTop;

	$(window).on("scroll", function() {
		scrollTop = $(window).scrollTop() + $(window).height() + "";
		if (scrollTop >= modelOffset) {
			$(".model1").addClass('animationRight');
		}

		if (scrollTop >= production) {
			$(".production").addClass('animationLeft');
			$(window).off("scroll");
			return false
		}

		if (scrollTop >= info) {
			$("#info").addClass('animationRight');
		}

		if (scrollTop >= topContainer) {
			$("#topContainer").addClass('animationTop');

		}
	})


	/*var production = $(".production").offset().top;
	var scrollTop2;
	var panduan2;
	$(window).on("scroll", function() {
		scrollTop2 = $(window).scrollTop() + $(window).height() + "";
		if (scrollTop2 >= production) {
			panduan2 = true;
		} else {
			panduan2 = false
		}

	})
	panduan2 ? ($(".production").addClass('animationLeft'), $(window).off("scroll")) : console.log("1231232131313132")*/
})