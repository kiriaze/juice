/**
 * jQuery File: 	simpleforms.js
 * Type:			Plugin
 * Author:        	Constantine Kiriaze
 * Last Edited:   	25 October 2014
 */


// Plugin
;(function($, window, document, undefined) {
	// Plugin setup & settings
	var $plugin_name					= 'simpleforms', $defaults = {};

	// The actual plugin constructor
	function Plugin($element, $options) {
		this.element 					= $element;
		this.settings 					= $.extend({}, $defaults, $options);
		this._defaults 					= $defaults;
		this._name 						= $plugin_name;

		// Initilize plugin
		this.init();
	}


	// Plugin
	// ---------------------------------------------------------------------------------------
	Plugin.prototype 					= {
		init 							: function() {
			// Variables
			// ---------------------------------------------------------------------------------------
			var $this 					= this;
			var $settings 				= $this.settings;


			// Execute
			// ---------------------------------------------------------------------------------------
			// Setup
			$this.setup_simpleforms();
		},

		// Public functions
		// ---------------------------------------------------------------------------------------
		setup_simpleforms 				: function($arrows_html) {
			// Variables
			var $this 					= this;
			var $settings 				= $this.settings;

			// Checkboxes
			$('.simpleforms input[type="checkbox"]').each(function() {
				if ( $(this).hasClass('toggler') ) {
					// Wrap input
					$(this).wrap('<span class="sf-toggler"></span>');

					// Check state
					if ( $(this).is(':checked') ) {
						$(this).parents('.sf-toggler').addClass('checked');
					}
				}
				else {
					// Wrap input
					$(this).wrap('<span class="sf-checkbox"></span>');

					// Check state
					if ( $(this).is(':checked') ) {
						$(this).parents('.sf-checkbox').addClass('checked');
					}
				}
			});

			// Add handle to togglers
			$('.sf-toggler').prepend('<span class="handle"></span>');

			// Radio inputs
			$('.simpleforms input[type="radio"]').each(function() {
				// Wrap input
				$(this).wrap('<span class="sf-radio"></span>');

				// Check state
				if ( $(this).is(':checked') ) {
					$(this).parents('.sf-radio').addClass('checked');
				}
			});

			// Drop-down selects
			$('.simpleforms select').each(function() {
				// Wrap select
				$(this).wrap('<span class="sf-select"></span>');
			});

			// file input field
			$('.simpleforms').find('.file-select').each(function() {

				var $this	 = $(this),
					label    = $this.parents('.file-label'),
					file     = label.find('.file-input'),
					preview  = label.find('.preview-file'),
					fileName = label.find('.file-name'),
					clearBtn = label.find('.remove-file');

				// hide the file reset on load
				clearBtn.hide();

				// on click of btn, trigger file input
				$this.on('click', function(e) {
					e.preventDefault();
					file.trigger('click');
				});

				// when files are selected
				file.change(function() {

					var vals = $this.val(),
						val = vals.length ? vals.split('\\').pop() : '';

					// set file name
					fileName.html(val);

					// show the reset btn
					clearBtn.show();

					// if files an image, display it
					if ( this.files && this.files[0] ) {
						var reader = new FileReader();
						reader.onload = function (e) {
							preview.attr('src', e.target.result);
						}
						reader.readAsDataURL(this.files[0]);
					}

				});

				// Setup the clear functionality
				clearBtn.on('click', function(e){
					e.preventDefault();
					file.wrap('<form>').closest('form').get(0).reset();
    				file.unwrap();
    				preview.attr('src', 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D');
				});

			});

		}
	};


	// Global calls
	// ---------------------------------------------------------------------------------------
	// Change events
	$(document).on('change', '.simpleforms input[type="radio"]', function() {
		// Check for all other similarly named elements
		var $radio_name 	= $(this).attr('name');
		$('input[name="'+ $radio_name +'"]').parents('.sf-radio').removeClass('checked');

		// Check current one
		$(this).parents('.sf-radio').toggleClass('checked');
	});

	// Click events
	$(document).on('click', '.simpleforms .sf-checkbox, .simpleforms .sf-toggler', function() {
		var $checkbox 		= $(this).find('input[type="checkbox"]');

		// Check current state
		if ( $(this).hasClass('checked') ) {
			$checkbox.removeAttr('checked');
		}
		else {
			$checkbox.attr('checked', 'checked');
		}

		// Toggle the class
		$(this).toggleClass('checked');
	});


	// Plugin wrapper
	// ---------------------------------------------------------------------------------------
	$.fn[$plugin_name] 					= function($options) {
		var $plugin;

		this.each(function() {
			$plugin 					= $.data(this, 'plugin_' + $plugin_name);

			if ( !$plugin ) {
				$plugin 				= new Plugin(this, $options);
				$.data(this, 'plugin_' + $plugin_name, $plugin);
			}
		});

		return $plugin;
	};
})(jQuery, window, document);
