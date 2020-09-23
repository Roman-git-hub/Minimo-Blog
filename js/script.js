// Burger
const menuToggle = document.querySelector('#header__burger');
const mobileNavContainer = document.querySelector('#header__menu');
const bodyLock = document.querySelector('body');

menuToggle.onclick = function(){
    menuToggle.classList.toggle('burger__active');
    mobileNavContainer.classList.toggle('menu__active');
    bodyLock.classList.toggle('lock');
}

// Slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:2000,
		autoplaySpeed: 2000,
		// waitForAnimate:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});