;(function(){

			// Menu settings
			$('.si-icon-hamburger-cross, .menu-close').on('click', function(){
				$('.si-icon-hamburger-cross').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)