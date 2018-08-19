'use strict';

var CustomScrollbar = function () {
	this.element = undefined;
	this.defaultOptions = {
		scrollbarType: 'inner',
		autoScrollSize: true, //automatically calculate scrollbar size depending on container/content size
		autoUpdate: true, //automatically update scrollbar if container/content size is changed
		disableBodyScroll: false, //if this option is enabled and the mouse is over the scrollable container, the main page won't be scrolled
		duration: 200, //scroll speed duration when the mouse is over scrollbar (scroll emulating mode)
		ignoreMobile: false, //do not initialize custom scrollbars on mobile devices
		ignoreOverlay: false, //do not initialize custom scrollbars in browsers when native scrollbars overlay content (Mac OS, mobile devices, etc...)
		scrollStep: 30, //scroll step when the mouse is over the scrollbar (scroll emulating mode)
		showArrows: false, //add a class to show scrollbar arrows in the advanced scrollbar
		stepScrolling: true, //emulate step scrolling on mousedown over scrollbar
		scrollx: 'simple', //simple, advanced, HTML or jQuery element for horizontal scrollbar
		scrolly: 'simple', //simple, advanced, HTML or jQuery element for vertical scrollbar
		marginAround: '0px',
		macStyle: false,
		onDestroy: function () {}, //callback function when scrollbar is destroyed
		onInit: function () {
			var wrapperClass = 'scrollbar-inner';
			switch(this.options.scrollbarType) {
				case 'inner':
					break;
				case 'outer':
					wrapperClass = 'scrollbar-outer';
					break;
				default:
					break;
			}
			this.container.parent().addClass(wrapperClass);
			if (this.options.marginAround !== '0px') {
				this.container.parent().css('margin', this.options.marginAround);
			}
			if (this.options.macStyle === true) {
				this.container.parent().addClass('visible-on-hover');
			} else {
				this.container.parent().removeClass('visible-on-hover');
			}
		}, //callback function when scrollbar is initialized at the first time,
		onScroll: function () {}, //callback function when container is scrolled
		onUpdate: function () {} //callback function before scrollbars size is calculated
	};
	this.init = function (options) {
		this.element = options.element;
		if (options.scrollbarType !== undefined) {
			this.defaultOptions.scrollbarType = options.scrollbarType;
		}
		if (options.autoScrollSize !== undefined) {
			this.defaultOptions.autoScrollSize = options.autoScrollSize;
		}
		if (options.autoUpdate !== undefined) {
			this.defaultOptions.autoUpdate = options.autoUpdate;
		}
		if (options.disableBodyScroll !== undefined) {
			this.defaultOptions.disableBodyScroll = options.disableBodyScroll;
		}
		if (options.duration !== undefined) {
			this.defaultOptions.duration = options.duration;
		}
		if (options.ignoreMobile !== undefined) {
			this.defaultOptions.ignoreMobile = options.ignoreMobile;
		}
		if (options.ignoreOverlay !== undefined) {
			this.defaultOptions.ignoreOverlay = options.ignoreOverlay;
		}
		if (options.scrollStep !== undefined) {
			this.defaultOptions.scrollStep = options.scrollStep;
		}
		if (options.showArrows !== undefined) {
			this.defaultOptions.showArrows = options.showArrows;
		}
		if (options.stepScrolling !== undefined) {
			this.defaultOptions.stepScrolling = options.stepScrolling;
		}
		if (options.scrollx !== undefined && typeof options.scrollx === 'string') {
			this.defaultOptions.scrollx = options.scrollx;
		}
		if (options.scrolly !== undefined && typeof options.scrolly === 'string') {
			this.defaultOptions.scrolly = options.scrolly;
		}
		if (options.marginAround !== undefined && typeof options.marginAround === 'string') {
			this.defaultOptions.marginAround = options.marginAround;
		}
		if (options.macStyle !== undefined && typeof options.macStyle === 'boolean') {
			this.defaultOptions.macStyle = options.macStyle;
		}
		if (options.onDestroy !== undefined && typeof options.onDestroy === 'function') {
			this.defaultOptions.onDestroy = options.onDestroy;
		}
		if (options.onInit !== undefined && typeof options.onInit === 'function') {
			this.defaultOptions.onInit = options.onInit;
		}
		if (options.onScroll !== undefined && typeof options.onScroll === 'function') {
			this.defaultOptions.onScroll = options.onScroll;
		}
		if (options.onUpdate !== undefined && typeof options.onUpdate === 'function') {
			this.defaultOptions.onUpdate = options.onUpdate;
		}
		this.render();
	};
	this.render = function () {
		return this.element.scrollbar(this.defaultOptions)
	}
};