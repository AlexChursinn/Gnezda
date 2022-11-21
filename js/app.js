$(function() {

/* ============================================================================== */

/* ФИКСИРОВАННАЯ ШАПКА ПРИ СКРОЛЕ FIXED HEADER */

	let header = $("#header"); /* Присвоил переменной id header */
	let intro = $("#intro"); /* Присвоил переменной id intro */
	let introH = intro.innerHeight(); /* Присвоил переменной id intro и его получим его высоту включая padding, объявляем позже в функции*/
	let scrollPos = $(window).scrollTop(); /* Присвоил переменной неше окно и сколько проскролили от верха страницы*/
	let nav = $("#nav"); /* Переменная в которой сохранен элмент навигации */
	let navToggle = $("#navToggle");
	let clickPhoto = $(".photo-content");

	checkScroll(scrollPos, introH) /* Вызываем данную функцию при загрузке страницы load убрали */

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight(); /* Присвоил переменной id intro и его получим его высоту включая padding Перезаписываем значение переменной при ресайз*/
		scrollPos = $(this).scrollTop(); /* Присваиваем скрол в настоящее время */

		checkScroll(scrollPos, introH); /* в функции ниже будем принимать два этих параметра scrollPos, introH */

	}); /* При скроле страницы выполняем функцию */

	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed"); 
		} else { 
			header.removeClass("fixed"); /* Дал id header class fixed */
		}
	}

	/* Если позиция скрола scrollPos > introH то выполняем действие если больше то выдаем класс фиксед для элемента header иначе будем убирать класс фиксед у header 
		
		load - событие при загрузке страницы будет срабатывать наш код, без этой записи при скроле внизу и обновлении страницы меню не появлялось

		resize - также это событие на ресайз (переключение с различной ширины) окна
		*/

	/* ============================================================================== */

	/* ПЛАВНЫЙ СКРОЛ ИЗ МЕНЮ НАВИГАЦИИ К НУЖНОМУ РАЗДЕЛУ SMOOTH SCROLL */

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll'); /* Присваиваем пременной значение при клике и атрибут который хотим получить */

		let elementOffset = $(elementId).offset().top; /* Передаем переменной значение кликнутой кнопки и получаем отступ данного элемента от верха*/

		nav.removeClass("show"); /* при клике по навигации убрать класс show при клике на кнопки меню навигация скрывается*/

		navToggle.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700); /* Анимируем скорол от верха scrollTop и при нажатии будем скролить elementOffset на это значение и -70 пикселей чтобы не скролил лишнего
		, 1000 - сколько будет длиться анимация скрола*/

		console.log(elementOffset);
	}); /* При событие клик event event.preventDefault(); - отмена стандартного поведения ссылки при клике*/

	/* ============================================================================== */

	/* NAV TOGGLE */
	navToggle.on("click", function(event) {
		event.preventDefault();

		navToggle.toggleClass("show"); 
		nav.toggleClass("show"); /* при клике выдаем класс show для нашей навигации */
	}); /* для id navToggle отслеживаем клик и сьрасываем сбрасываем стандартное поведение кнопки event event.preventDefault(); */

		/* ============================================================================== */

	/* AboutSlider https://kenwheeler.github.io/slick/*/
	let slider = $("#aboutSlider");

	slider.slick({ /* Копирую с сайта */
		infinite: true, /* бесконечное прокручивание отзывов */
		slidesToShow: 1, /* показываем 1 слайд */
		slidesToScroll: 1, /* сколько будем скролить слайдов при скроле  */
		fade: true, /* затемнялись наши отзывы  */
		arrows: false, /* убираем кнопки */
		dots: true /* появляются точки которые показывают сколько элементов у нас в слайдере */
	});

	/* COllapse */ /* Акардион раскрываем-закрываем */
$("[data-collapse]").on("click", function(event) {
	event.preventDefault();

	var $this = $(this), 
	blockId = $this.data('collapse'); 

	$this.toggleClass("active"); 
});

	/* ============================================================================== */

	/* ClickPhoto */
	clickPhoto.on("click", function() {
		clickPhoto.toggleClass("showContent"); 
		clickPhoto.removeClass("showContent"); 
	}); 
	
});

