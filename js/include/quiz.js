export function quiz () {

	let answerItem = $('.quiz .quiz__answers-item'),
			activeClass = 'quiz__answers-round--choosen',
			resultAnswers = {};

	setActiveOnClick();

	function setActiveOnClick() {

		function removeAllActive() {

			$('.quiz__answers-round').each( (i,item) =>  {

				$(item).removeClass(activeClass)

			});

		}

		$(answerItem).each( (i,item) => {

			$(item).on('click', () => {

				removeAllActive();
				let round = $(item).find('.quiz__answers-round');
				$(round).hasClass(activeClass) ? $(round).remove(activeClass) : $(round).addClass(activeClass);

			});

		});

	}

	$('.quiz__next-btn').on('click', () => {

		let step = $('.quiz__next-btn').attr('data-step');

		function checkFill() {

			let check = false;

			$('.quiz__step-' + step).find('.quiz__answers-round').each( (i,item) => {

				if( $(item).hasClass(activeClass) ) {

					return check = true;
	
				} 
				
			});

			return check;

		}

			if(checkFill() == true) {

				let name = $('.quiz__step-' + step).find('.' + activeClass).next('.quiz__answers-name').html(),
				nameTrim = name = name.replace(/\s*$/,""),
				nextStep = parseInt(step) + 1,
				title = $('.quiz__step-' + step).find('.quiz__question').html();
	
				$('.quiz__next-btn').attr('data-step', nextStep);
				$('.quiz__step-' + step).hide();
				$('.quiz__step-' + nextStep).show();
				
				if(step == 1) {
					$('.quiz__step-grid').addClass('quiz__step-grid--is-25').removeClass('quiz__step-grid--is-0')
					$('.quiz__ready-check-count').html('25%');
				}
				if(step == 2) {
					$('.quiz__step-grid').addClass('quiz__step-grid--is-50').removeClass('quiz__step-grid--is-25')
					$('.quiz__ready-check-count').html('50%');
				}
				if(step == 3) {
					$('.quiz__step-grid').addClass('quiz__step-grid--is-85').removeClass('quiz__step-grid--is-50')
					$('.quiz__ready-check-count').html('85%');
				}
				if(step == 4) {
					$('.quiz__step-grid').addClass('quiz__step-grid--is-100').removeClass('quiz__step-grid--is-85')
					$('.quiz__ready-check-count').html('100%');
				}

				$('.quiz__error').hide()
	
	
				resultAnswers[title] = nameTrim;
				console.log(resultAnswers);

			} else {

				$('.quiz__error').show();

			}
			

	});


}