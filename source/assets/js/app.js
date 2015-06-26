(function($){

	/* jshint devel:true */
	'use strict';

	window.THEMENAME = {};

	var SHORTNAME = window.THEMENAME;

	var $window = $(window);

	SHORTNAME.init = function(){

		SHORTNAME.setElements();
		SHORTNAME.colors();
		SHORTNAME.basics();

	};

	SHORTNAME.setElements = function(){
		SHORTNAME.elems				= {};

		// defaults
		SHORTNAME.elems.html				=	$('html');
		SHORTNAME.elems.body				=	$('body');
		SHORTNAME.elems.scrollToTop			=	$('a[data-scroll-to="top"]');

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

	};

	$window.load(function() {

	});

	$window.resize(function(event) {

	});

	$(document).ready(function(){

		SHORTNAME.init();

	});

})(window.jQuery);
