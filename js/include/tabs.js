export function tabs () {

	let activeClass = 'is-active';

	$('.tabs .tabs__trigger').each( (i,item) =>  {

		$(item).on('click', () => {

			$('.tabs .tabs__trigger').removeClass(activeClass);
			$(item).addClass(activeClass)

		}); 

	});

}