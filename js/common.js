$(document).ready(function(){

	$('.hitsSlider').each(function(){
		$(this).owlCarousel({
			loop: false,
			rewind:true,
			margin:20,
	    	nav:true,
			items:5,
			responsive : {
			    // breakpoint from 0 up
			    600 : {
			        items:3
			    },
			    // breakpoint from 480 up
			    1300 : {
			        items:4
			    },
			    // breakpoint from 1550 up
			    1550 : {
			        items:5
			    }
			}
		});
	});

	$('.brandsSlider').owlCarousel({
		loop: false,
		rewind:true,
		margin:40,
    	nav:true,
    	autoplay:true,
		items:8,
		responsive : {
		    // breakpoint from 0 up
		    600 : {
		        items:4
		    },
		    // breakpoint from 480 up
		    1300 : {
		        items:6
		    },
		    // breakpoint from 1550 up
		    1550 : {
		        items:8
		    }
		}
	});

	$('#hidden_menuTrigger').click(function(){
		$('.hidden_menu').toggleClass('active');
		$(this).children('i').toggleClass('spin');
		$('#popup_bcg').toggle();
	});

	let pageHeight = $('.pageWrap').height() - 120;
	$('#popup_bcg').css('height', pageHeight);
	$('#popup_bcg').click(function(){
		$('.hidden_menu').toggleClass('active');
		$('#hidden_menuTrigger').children('i').toggleClass('spin');
		$('#popup_bcg').toggle();
	})


	$(window).resize(function(){
		$('.hitsSlider').each(function(){
			$(this).owlCarousel({
				loop: false,
				rewind:true,
				margin:20,
		    	nav:true,
				items:5,
				responsive : {
				    // breakpoint from 0 up
				    600 : {
				        items:3
				    },
				    // breakpoint from 480 up
				    1300 : {
				        items:4
				    },
				    // breakpoint from 1550 up
				    1550 : {
				        items:5
				    }
				}
			});
		});

		$('.brandsSlider').owlCarousel({
			loop: false,
			rewind:true,
			margin:40,
	    	nav:true,
	    	autoplay:true,
			items:8,
			responsive : {
			    // breakpoint from 0 up
			    600 : {
			        items:4
			    },
			    // breakpoint from 480 up
			    1300 : {
			        items:6
			    },
			    // breakpoint from 1550 up
			    1550 : {
			        items:8
			    }
			}
		});
	});
});

$(window).on("load", function() {

});
var mySwiper = new Swiper ('.mainSlider', {
	direction: 'horizontal',
	loop: true,
	slidesPerView:1,
	autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },

	pagination: {
	  el: '.swiper-pagination',
	},

	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
})