export function carousel () {

	let arrowPrev = 
	`
	<svg class="slick-arrow-prev" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0_453_691)">
	<path d="M14 15.36L8.73 12L14 8.64L14 15.36ZM16 19L16 5L5 12L16 19Z" fill="#BCA182"/>
	</g>
	<defs>
	<clipPath id="clip0_453_691">
	<rect width="24" height="24" fill="white" transform="translate(24 24) rotate(-180)"/>
	</clipPath>
	</defs>
	</svg>	
	`
	let arrowNext = 
	`
	<svg class="slick-arrow-next" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 8.64L15.27 12L10 15.36V8.64ZM8 5V19L19 12L8 5Z" fill="#BCA182"/>
	</svg>
	`

	$('.one-slide-carousel').slick({
		dots: true,
		appendDots: $('.one-slide-carousel + .slider-dots')
	});

	$('.three-slide-carousel').slick({
		slidesToShow: 3,
		arrow: true,
		nextArrow: arrowNext,
		prevArrow: arrowPrev,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					arrow: false,
					dots: true
				}
			},
		]
	})

}