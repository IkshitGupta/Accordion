$(document).ready(function () {
	$('.upper').click(function () {
		if ($(this).next('.lower').hasClass('active')) {
			$(this).next('.lower').removeClass('active').slideUp();
			$(this).children('span').removeClass('fa-minus').addClass('fa-plus');
		} else {
			$('.lower').removeClass('active').slideUp();
			$('span').removeClass('fa-minus').addClass('fa-plus');
			$(this).next('.lower').addClass('active').slideDown();
			$(this).children('span').removeClass('fa-plus').addClass('fa-minus');
		}
	});
});
