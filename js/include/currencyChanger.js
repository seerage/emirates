export function currencyChanger () {

	$('.room-card__currency-changer').on('click', (e) => {

		let list = $(e.target).closest('.room-card__currency-changer-wrapper').find('.room-card__currency-changer-hidden-list'),
				currencyLabel = $(e.target).closest('.room-card__currency-changer-wrapper').find('.room-card__current-currency'),
				listItem = $(e.target).closest('.room-card__currency-changer-wrapper').find('.room-card__currency-changer-list-item'),
				openClass = 'is-opened';


		if( $(list).hasClass(openClass) ) {
			$(list).removeClass(openClass);
		} else {
			$(list).addClass(openClass);
		}
				

		$(listItem).on('click', (e) => {
			
			let value = $(e.target).attr('data-currency');
			$(currencyLabel).html(value);
			$(list).removeClass(openClass);
		});

	});

}