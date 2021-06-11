$(function () {
	// スムーススクロール
	$('a[href^="#"]').click(function () {
		var adjust = -70;
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? "html" : href);
		var position = target.offset().top + adjust;
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});

	// タイトルアニメーション
	$(window).on("scroll", function () {
		$(".section-ttl").each(function () {
			var position = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > position - windowHeight + 200) {
				$(this).addClass("isActive");
			}
		});
	});

	// ハンバーガーメニュー
	$(".hamburger").click(function () {
		$(".header-nav").fadeToggle();
		$(this).toggleClass("active");
		$("body").toggleClass("hidden");
		$(".header-li a").click(function () {
			$(".header-nav").fadeOut();
			$(".hamburger").removeClass("active");
			$("body").removeClass("hidden");
		});
	});

	// hover-message
	$(".mustard-block").hover(function () {
		$(".hover-message, .mail-block, .header-nav").toggleClass("act");
	});
});

// スライド
window.addEventListener(
	"DOMContentLoaded",
	function () {
		var swiper03 = new Swiper(".swiper-container", {
			pagination: ".swiper-pagination",
			paginationClickable: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1024: {
					slidesPerView: 1,
					centeredSlides: false,
					spaceBetween: 20,
				},
			},
			loop: true,
			slidesPerView: 2,
			centeredSlides: false,
			slideToClickedSlide: true,
			spaceBetween: 17,
			autoplay: {
				delay: 3000,
				stopOnLastSlide: false,
				disableOnInteraction: false,
				reverseDirection: false,
			},
		});
	},
	false
);
