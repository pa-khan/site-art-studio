$(document).ready(function($) {

	$('.input_phone input').mask('+7 (000) 000-00-00');

	var btnMobile = $('.btn-mobile'),
			navMobile = $('.mobile-nav');

	btnMobile.click(function(event) {
		$(this).toggleClass('btn-mobile_toggle');
		navMobile.toggleClass('mobile-nav_toggle');
	});

	var slidesCount = $('.slider__item').length;

	if (slidesCount > 10) {
		$('.slider__counts-total').html(slidesCount);
	} else{
		$('.slider__counts-total').html("0" + slidesCount);
	}

	var slider = $('.slider__wrap');

	slider.slick({
		appendArrows: $('.slider__control'),
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><i class="icon icon-arrow-left-gray"></i></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><i class="icon icon-arrow-right-gray"></i></button>'
	});

	var currentSlideWrap = $('.slider__counts-current'),
			currentSlide = slider.slick('slickCurrentSlide');
	if (currentSlide + 1 > 10) {
		currentSlideWrap.text(currentSlide + 1);
	} else {
		currentSlideWrap.text("0" + (currentSlide + 1));
	}

	slider.on('afterChange', function(event, slick, currentSlide, nextSlide){
	  currentSlideWrap.text("0" + (currentSlide + 1));
	});


	$('.rounds').each(function(index, el) {
		var p = $(this).find('p');
		p.each(function(index, el) {
			$(this).prepend('<div class="round">' + (index + 1) + '</div>');
		});
	});

	$('.price__item').each(function(index, el) {
		var title = $(this).find('.price__title');
		title.prepend('<div class="round">' + (index + 1) + '</div>');
	});

	$('.catalog').tabs();


	function changeElement(elementName) {
		$('.' + elementName + ' ' + elementName).change(function(event) {
			var inputValue = $(this).val(),
					input = $(this).parents('.' + elementName);
			if (inputValue != "") {
				input.addClass(elementName + '_completed');
			} else{
				input.removeClass(elementName + '_completed')
			}
		});
	}

	changeElement('input');
	changeElement('textarea');

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
				element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('input');
	valueElementForm('textarea');
});
