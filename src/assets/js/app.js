(function($){

	/* jshint devel:true */
	'use strict';

	window.THEMENAME = {};

	var SHORTNAME = window.THEMENAME;

	var $window      = $(window),
		$body        = $(document.body),
		$html        = $(document.documentElement);

	SHORTNAME.init = function(){

		SHORTNAME.setElements();
		SHORTNAME.colors();
		SHORTNAME.basics();
		SHORTNAME.accordions();
		SHORTNAME.tabs();
		SHORTNAME.toggles();
		SHORTNAME.alerts();
		SHORTNAME.tooltips();

	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems               = {};

		// defaults
		SHORTNAME.elems.html          =	$('html');
		SHORTNAME.elems.body          =	$('body');
		SHORTNAME.elems.scrollToTop   =	$('a[data-scroll-to="top"]');
		SHORTNAME.elems.tooltip       = $('[data-toggle=tooltip]');
		SHORTNAME.elems.tab           = $('[data-tab]');
		SHORTNAME.elems.toggles       = $('.simple-toggle');
		SHORTNAME.elems.accordions    = $('.simple-accordion');

	};

	SHORTNAME.colors = function() {
		var colors = {
			aqua    : '#7FDBFF',
			blue    : '#0074D9',
			lime    : '#01FF70',
			navy    : '#001F3F',
			teal    : '#39CCCC',
			olive   : '#3D9970',
			green   : '#2ECC40',
			red     : '#FF4136',
			maroon  : '#85144B',
			orange  : '#FF851B',
			purple  : '#B10DC9',
			yellow  : '#FFDC00',
			fuchsia : '#F012BE',
			gray    : '#aaa',
			white   : '#fff',
			black   : '#111',
			silver  : '#ddd'
		};
		// console.log(colors);
		// console.log(colors.blue);
	};

	SHORTNAME.basics = function() {
		// simpleforms - styles/effects for forms, checkboxes, radio's
		$('body').simpleforms();

		// SimpleAnchors
		$.simpleAnchors({
			offset: -1, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});

		// replace the data-background into background image - lazy loaded
		$('.bg-image').each(function() {
			var imgURL = $(this).data('background');
			// $(this).css('background-image', "url('" + imgURL + "')");
			$(this).append($('<img>').attr('src', imgURL));
		});
		// <div class="bg-image" data-background="images/image.jpg"></div>

		// Target your .container, .wrapper, .post, etc.
		SHORTNAME.elems.body.fitVids();

		// lada
		// Buttons accepts three attributes:
		// data-style: one of the button styles, full list in demo [required]
		// data-color: green/red/blue/purple/mint
		// data-size: xs/s/l/xl, defaults to medium
		// data-spinner-size: 40, pixel dimensions of spinner, defaults to dynamic size based on the button height
		// data-spinner-color: A hex code or any named CSS color.

		// Automatically trigger the loading animation on click
		// $( '.ladda-button' ).ladda( 'bind' );
		// Same as the above but automatically stops after two seconds
		// $( '.ladda-button' ).ladda( 'bind', { timeout: 2000 } );
	};

	SHORTNAME.accordions = function(){

		// SHORTNAME.elems.accordions.siblings('.simple-accordion').andSelf().wrapAll('<div class="accordion"></div>');
		// SHORTNAME.elems.accordions.nextUntil('*:not(.simple-accordion)').addBack().wrapAll( '<div class="accordion"></div>' );

		$('.accordion').accordion({
			header: '.simple-accordion-title',
			collapsible: true,
			heightStyle: "content"
		});

		var icon = SHORTNAME.elems.accordions.find('.ui-icon');
		icon.addClass('ion-plus');

		if ( SHORTNAME.elems.accordions.find('.simple-accordion-title').is('.ui-state-active') ) {
			$('.ui-state-active').find(icon).addClass('ion-minus');
		}

		SHORTNAME.elems.accordions.on('click', function() {
			icon.removeClass('ion-minus').addClass('ion-plus');
			if ( $(this).find('.simple-accordion-title').is('.ui-state-active') ) {
				$(this).find(icon).removeClass('ion-plus').addClass('ion-minus');
			}
		});

	};

	SHORTNAME.tabs = function(){

		//  Add active states to first tab and link
		var tabs = $('[data-type="tabs"]');
		tabs.find('[data-tab-content]:first-of-type').addClass('active');
		tabs.find('[data-tab]:first-of-type').addClass('active');

		// var tabHeight = [];

		// $('[data-tab-content]').each(function(){
		//     tabHeight.push($(this).height());
		// });

		SHORTNAME.elems.tab.on('click', function(e) {

			e.preventDefault();

			if ( $(this).is('.active') ) return;

			$(this)
				.addClass('active')
				.siblings('[data-tab]')
				.removeClass('active')

				.siblings('[data-tab-content="' + $(this).data('tab') + '"]')

				// .parents('[data-type="tabs"]').find('[data-tab-content="' + $(this).data('tab') + '"]')

				.addClass('active')
				.siblings('[data-tab-content]')
				.removeClass('active');

		});
	};

	SHORTNAME.toggles = function(){

		SHORTNAME.elems.toggles.each( function () {

			if( $(this).attr('data-id') === 'closed' ) {
				$(this).accordion({
					header: '.simple-toggle-title',
					collapsible: true,
					active: false
				});
			} else {
				$(this).accordion({
					header: '.simple-toggle-title',
					collapsible: true
				});
			}

		});

		var icon = SHORTNAME.elems.toggles.find('.ui-icon');
		icon.addClass('fa fa-angle-down');

		if ( SHORTNAME.elems.toggles.find('.simple-toggle-title').is('.ui-state-active') ) {
			$('.ui-state-active').find(icon).addClass('fa-angle-up');
		}

		SHORTNAME.elems.toggles.on('click',function(){
			if ( $(this).find('.simple-toggle-title').is('.ui-state-active') ) {
				$(this).find(icon).removeClass('fa-angle-down').addClass('fa-angle-up');
			} else {
				$(this).find(icon).removeClass('fa-angle-up').addClass('fa-angle-down');
			}
		});

	};

	SHORTNAME.alerts = function(){

		$(".alert .close").click( function() {
			$(this).parent('.alert').fadeTo(300, 0.001).slideUp();
		});

	};

	SHORTNAME.tooltips = function() {
		SHORTNAME.elems.tooltip.hover(
			function() {
				var $this = $(this),
					title = $this.attr('title'),
					position = $this.data('placement'),
					tooltip = $( '<div class="tooltip '+position+'"><div class="tooltip-arrow"></div><div class="tooltip-inner">'+title+'</div></div>' );

				$this.append( $( tooltip ) );

				if ( position === 'top' ) {
					tooltip.css({
						'top': - tooltip.height() - 10,
						'margin-left': - tooltip.width()/2
					});
				}

				if ( position === 'bottom' ) {
					tooltip.css({
						'margin-left': - tooltip.width()/2
					});
				}

				if ( position === 'left' ) {
					tooltip.css({
						'top': - tooltip.height()/4,
						'left': - tooltip.width() - 20
					});
				}

				if ( position === 'right' ) {
					tooltip.css({
						'top': - tooltip.height()/4,
						'right': - tooltip.width() - 20
					});
				}

				tooltip.addClass('in');

			}, function() {
				$( this ).find( ".tooltip" ).removeClass('in').remove();
			}
		);
	};

	$window.load(function() {

	});

	$window.resize(function(event) {

	});

	$(document).ready(function(){

		SHORTNAME.init();

	});

})(window.jQuery);
