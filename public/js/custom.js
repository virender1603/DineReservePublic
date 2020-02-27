(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 800);
			return false;
		});
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		 var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
		    var hamburgers = document.querySelectorAll(".hamburger");
		    if (hamburgers.length > 0) {
		      forEach(hamburgers, function(hamburger) {
		        hamburger.addEventListener("click", function() {
		          this.classList.toggle("is-active");
		        }, false);
		      });
		    };


		     // first-slider

           $('.products-slider').owlCarousel({
		      loop: true,
		      margin: 30,
		      center: false,
		      nav: false,
		      dots: false,
		      autoplay:false,
              autoplayTimeout:2000,
		      responsiveClass: true,
		      responsiveRefreshRate: true,
		      responsive : {
		          0 : {
		              items: 1,
		              margin: 0,
		          },

		           577 : {
		              items: 2
		          },
		          768 : {
		              items: 2
		          },
		          960 : {
		              items: 3
		          },
		          1200 : {
		              items: 4
		          },
		          1920 : {
		              items: 4
		          }
		      }
		});

           var owl = $('.products-slider');
		owl.owlCarousel();
		// Go to the next item
		$('.owl-prev').click(function() {
		    owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.owl-next').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		});


		 // first-slider

           $('.shepa').owlCarousel({
		      loop: true,
		      margin: 40,
		      center: false,
		      nav: false,
		      dots: true,
		      autoplay:false,
              autoplayTimeout:20000,
		      responsiveClass: true,
		      responsiveRefreshRate: true,
		      responsive : {
		          0 : {
		              items: 1
		          },

		          577 : {
		              items: 2
		          },
		          768 : {
		              items: 2
		          },
		          960 : {
		              items: 3
		          },
		          1200 : {
		              items: 3
		          },
		          1920 : {
		              items: 3
		          }
		      }
		});



		// time-picker

		$('.clockpicker').clockpicker()
			.find('input').change(function(){
				//console.log(this.value);
			});
		var input = $('#single-input').clockpicker({
			placement: 'bottom',
			align: 'left',
			autoclose: true,
			'default': 'now'
		});

		if (/mobile/i.test(navigator.userAgent)) {
			$('input').prop('readOnly', true);
		};

				
		$(document).ready(function() {
            $(".first_tab").champ();         

        });
		
		
		
		
		
		
		
	});
})(jQuery);