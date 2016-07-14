/**
 * Carousello
 *
 * @version 1.0
 *
 * Copyright 2013, UpSolution
 */

(function($) {
	"use strict";

	var Carousello = function(container, options)
	{
		// Context
		var that = this;
		this.container = $(container);
		// Apply options
		options = $.extend({}, $.fn.carousello.defaults, typeof options === 'object' && options);
		this.options = options;
		// Grab the actual widget name (as carousello can be applied to different widgets)
		this.widgetName = this.container.attr('class').split(' ')[0];
		// Grab dom elements
		this.btnPrev = this.container.find('.'+this.widgetName+'-nav.to_prev');
		this.btnNext = this.container.find('.'+this.widgetName+'-nav.to_next');
		this.list = this.container.find('.'+this.widgetName+'-list');
		this.listH = this.container.find('.'+this.widgetName+'-list-h');
		this.items = this.container.find('.'+this.widgetName+'-item');
		// Count dimensions
		this.count = this.items.length;
		this.itemWidth = $(this.items).outerWidth();
		this.itemOffset = parseInt($(this.items).css('margin-right'), 10);
		// 3D Effect
		if (this.options.use3d){
			this.cssPrefix = this._get3DPrefix();
			if (this.cssPrefix === false) {
				this.options.use3d = false;
			}
		}
		// Current position
		this.position = 0;
		// Events
		this.btnPrev.click(function(){ that.slidePrev(); });
		this.btnNext.click(function(){ that.slideNext(); });
		// Make responsive
		$(window).resize(function(){
			clearTimeout(that._resizeTimer);
			that._resizeTimer = setTimeout(function(){that.handleResize();}, that.options.resizeDelay);
		});
		if (this.options.use3d){
			// Requires imagesloaded plugin
			// http://github.com/desandro/imagesloaded
			this.container.imagesLoaded(function(){
				that.list.height(that.items.outerHeight());
				that.handleResize();
			});
		}else{
			this.handleResize();
		}
	};

	Carousello.prototype = {

		/**
		 * Obtain browser css3 prefix or false if 3d transforms are not supported
		 * Based on modernizer
		 * @link http://modernizr.com
		 * @private
		 * @return {String} Prefix or false
		 */
		_get3DPrefix: function() {
			var div = document.createElement('div'),
				ret = false,
				properties = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective'],
				prefixes = ['', '-o-', '-moz-', '-webkit-'];
			for (var i = properties.length - 1; i >= 0; i--) {
				ret = ret ? ret : div.style[properties[i]] !== undefined;
			}
			if (ret){
				var st = document.createElement('style');
				// webkit allows this media query to succeed only if the feature is enabled.
				// "@media (transform-3d),(-o-transform-3d),(-moz-transform-3d),(-ms-transform-3d),(-webkit-transform-3d),(modernizr){#modernizr{height:3px}}"
				document.getElementsByTagName('head')[0].appendChild(st);
				div.id = 'test3d';
				document.body.appendChild(div);
				for (var j = 0; j < prefixes.length; j++){
					st.textContent = '@media ('+prefixes[j]+'transform-3d){#test3d{height:3px}}';
					if (div.offsetHeight === 3){
						ret = prefixes[j];
						break;
					}
				}
				st.parentNode.removeChild(st);
				div.parentNode.removeChild(div);
			}
			if (ret === true) {
				if (div.style.MozPerspective !== undefined) {
					ret = '-moz-';
				} else
				if (div.style.WebkitPerspective !== undefined) {
					ret = '-webkit-';
				} else {
					ret = '';
				}
			}
			return ret;
		},

		slidePrev: function()
		{
			var newPosition = Math.max(0, this.position - this.perRow);
			this.slideTo(newPosition);
		},

		slideNext: function()
		{
			var newPosition = Math.min(this.count - this.perRow, this.position + this.perRow);
			if (this.options.use3d) {
				newPosition = this.position + this.perRow;
			}
			this.slideTo(newPosition);
		},

		slideTo: function(position)
		{
			if (position === this.position) {
				return;
			}
			if (this.options.use3d){
				// 3D transition
				var showGroup = Math.min(Math.floor(position / this.perRow), this.groups.length-1),
					that = this;
				position = showGroup * this.perRow;
				this.listH.animate({
					angle: -1 * this.baseAngle * showGroup
				}, {
					duration: this.options.duration,
					easing: this.options.easing,
					step: function(angle){
						angle = parseInt(angle * 100, 10) / 100;
						that.listH.css(that.cssPrefix+'transform', 'translateZ(-'+that.translateZ+'px) rotateY('+angle+'deg)');
					},
					queue: false
				});
			}else{
				// 2D transition
				this.listH.animate({
					left: -1*position*(this.itemWidth+this.itemOffset)
				}, {
					duration: this.options.duration,
					easing: this.options.easing,
					queue: false
				});
			}
			this.btnPrev[(position === 0)?'addClass':'removeClass']('disabled');
			this.btnNext[(position >= (this.count - this.perRow))?'addClass':'removeClass']('disabled');
			this.position = position;
		},

		handleResize: function()
		{
			var containerWidth = this.container.width(),
				oldPerRow = this.perRow,
				that = this;
			this.perRow = Math.max(1, Math.floor((containerWidth + this.itemOffset) / (this.itemWidth + this.itemOffset)));
			var listWidth = this.perRow * (this.itemWidth + this.itemOffset) - this.itemOffset;
			this.list.width(listWidth);
			if (this.options.use3d && (oldPerRow === undefined || this.perRow !== oldPerRow)){
				// Separate items into groups for 3d effect
				this.listH.append(this.items);
				this.listH.children('.'+this.widgetName+'-itemgroup').remove();
				for (var i = 0, l = Math.ceil(this.count / this.perRow); i < l; i++){
					var group = $('<div/>', {'class': this.widgetName+'-itemgroup'}).appendTo(this.listH);
					for (var j = 0; j < this.perRow; j++){
						if (this.items[i*this.perRow + j] === undefined) {
							break;
						}
						group.append(this.items[i*this.perRow + j]);
					}
				}
				this.groups = this.container.find('.'+this.widgetName+'-itemgroup');
				this.baseAngle = Math.min(120, 360 / this.groups.length);
				this.translateZ = Math.round( 0.5 * listWidth / Math.tan(Math.PI / Math.max(3, this.groups.length)));
				this.list
					.css({position: 'relative', 'overflow': (this.groups.length < 5) ? 'visible' : 'hidden'})
					.css(this.cssPrefix+'perspective', '800px');
				this.listH
					.css({position: 'absolute', height: '100%', width: '100%'})
					.css(this.cssPrefix+'transform', 'rotateY(0deg) translateZ(-'+this.translateZ+'px)')
					.css(this.cssPrefix+'transform-style', 'preserve-3d')
					.css(this.cssPrefix+'perspective-origin', '50% 100px');
				this.list.height(this.items.outerHeight());
				this.groups.css({position: 'absolute', left: 0, width: '100%', height: '100%'});
				$.each(this.groups, function(k, group){
					$(group).css(that.cssPrefix+'transform', 'rotateY('+(that.baseAngle*k)+'deg) translateZ('+that.translateZ+'px)');
				});
			}
			if (oldPerRow !== undefined && this.perRow !== oldPerRow){
				if (this.position > this.count - this.perRow) {
					this.slideTo(this.count - this.perRow);
				}
				this.btnNext[(this.position >= (this.count - this.perRow))?'addClass':'removeClass']('disabled');
			}
			// Hide arrows if there are too few items
			if (this.perRow >= this.count) {
				this.btnPrev.hide();
				this.btnNext.hide();
			} else {
				this.btnPrev.show();
				this.btnNext.show();
			}
		}

	};

	/**
	 * Easings
	 * Original functions by George McGinley Smith
	 * @link http://gsgd.co.uk/sandbox/jquery/easing/
	 */
	if ($.easing.easeOutBack === undefined) {
		$.easing.easeOutBack = function (x, t, b, c, d, s){
			if (s === undefined) {
				s = 1.70158;
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		};
	}
	if ($.easing.easeInOutExpo === undefined) {
		$.easing.easeInOutExpo = function(e, t, n, r, i){
			if (t === 0) {
				return n;
			}
			if (t === i) {
				return n+r;
			}
			if ((t /= i/2) < 1) {
				return r/2*Math.pow(2,10*(t-1))+n;
			}
			return r/2*(-Math.pow(2,-10*--t) + 2) + n;
		};
	}

	$.fn.carousello = function(options){
		return this.each(function(){
			var $this = $(this),
				data = $this.data('carousello');
			if ( ! data) {
				$this.data('carousello', (data = new Carousello(this, options)));
			}
		});
	};

	$.fn.carousello.defaults = {

		/**
		 * @var {Boolean} Try to use 3D if possible
		 */
		use3d: true,

		/**
		 * @var {Number} Animation duration
		 */
		duration: 500,

		/**
		 * @var {Function} Default animation easing
		 */
		easing: 'easeInOutExpo',

		/**
		 * @var {Number} Resize delay to reduce resize event calls
		 */
		resizeDelay: 50
	};

	$.fn.carousello.Constructor = Carousello;


})(jQuery);