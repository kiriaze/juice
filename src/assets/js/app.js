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

	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems               = {};

		// defaults
		SHORTNAME.elems.html          =	$('html');
		SHORTNAME.elems.body          =	$('body');
		SHORTNAME.elems.scrollToTop   =	$('a[data-scroll-to="top"]');

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

		// SimpleAnchors
		$.simpleAnchors({
			offset: -1, // 80-1, header height on scroll
			easing: 'easeInOutCubic'
		});

		// simpleforms - styles/effects for forms, checkboxes, radio's
		$('body').simpleforms();

		// Target your .container, .wrapper, .post, etc.
		SHORTNAME.elems.body.fitVids();

	particlesJS('particles-js',
		{
		  "particles": {
		    "number": {
		      "value": 75,
		      "density": {
		        "enable": true,
		        "value_area": 800
		      }
		    },
		    "color": {
		      "value": "#b6b9ca"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000"
		      },
		      "polygon": {
		        "nb_sides": 6
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": false,
		      "anim": {
		        "enable": true,
		        "speed": 10,
		        "size_min": 40,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": false,
		      "distance": 200,
		      "color": "#ffffff",
		      "opacity": 1,
		      "width": 2
		    },
		    "move": {
		      "enable": true,
		      "speed": 1.2,
		      "direction": "top",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "canvas",
		    "events": {
		      "onhover": {
		        "enable": false,
		        "mode": "grab"
		      },
		      "onclick": {
		        "enable": false,
		        "mode": "push"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 400,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 200,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
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
