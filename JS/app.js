
	// Headhesive

!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():t.Headhesive=e()}(this,function(){"use strict";var t=function(e,s){for(var o in s)s.hasOwnProperty(o)&&(e[o]="object"==typeof s[o]?t(e[o],s[o]):s[o]);return e},e=function(t,e){var s,o,i,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,r=function(){c=n(),l=null,i=t.apply(s,o),s=o=null};return function(){var f=n(),h=e-(f-c);return s=this,o=arguments,0>=h?(clearTimeout(l),l=null,c=f,i=t.apply(s,o),s=o=null):l||(l=setTimeout(r,h)),i}},s=function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},o=function(t,e){for(var s=0,o=t.offsetHeight;t;)s+=t.offsetTop,t=t.offsetParent;return"bottom"===e&&(s+=o),s},i=function(e,s){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=t(this.options,s),this.init())};return i.prototype={constructor:i,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){"string"==typeof this.options.offset&&(this.scrollOffset=o(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},i});
var options = {
	offset: 150
}
var header = new Headhesive(".header", options);


	// Functions


$(function() {

	// Smoth Scroll

	$("[data-scroll]").on("click", function(event) {

		event.preventDefault();

		let elementId = $(this).data("scroll");
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset -90
		}, 700);

		nav.removeClass("show");

		item.removeClass("used");
	
	});


	// Burger Menu

	let nav = $("#nav");
	let menu = $("#burger");
	let item = $("#burger__item")
	
	menu.on("click", function(event) {

		event.preventDefault();

		nav.toggleClass("show");

		menu.toggleClass("used");

		item.toggleClass("used");

	});


	// Slick Quote : https://kenwheeler.github.io/slick/

	let slick = $("#slick__block");

	slick.slick({

		infinite: false,
		slidesToShow: 1,
		SlidesToScroll: 1,
		fade: true,
		dots: true,
		arrows: false,
		autoplay: false,
			//autoplaySpeed: ,
		cssEase: "linear"

	});

});


