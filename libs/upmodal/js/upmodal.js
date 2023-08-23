/*=============================================
=            FAST START            =
=============================================*/


{/*
<div class="modal-frame"> <!--Wrapper for all modals-->

<div class="callback"> /<!--Modal content class-->
	<div class="modal">
		<div class="modal-inset">
			<div class="button modal-close">close-icon</div>
			<div class="modal-body">
				Content
			</div>
		</div>
	</div>
</div>

</div>
<div class="modal-overlay"></div>

<button data-modal="callback"></button> <!--Trigger tag. Data-modal="You modal content class"-->

<script>
var modal = new Upmodal('callback'); <!--Init modal-->
</script>
*/}

/*=============================================
=            API            =
=============================================*/

// modal.close(); -- Close modal;
// modal.open(); -- Open modal;

class Upmodal
{
	constructor(name)
	{
		this.name = name;

		let overlay = document.querySelector('.modal-overlay'),
				close = document.querySelectorAll('.modal-close'),
				modal = document.querySelector(`.${name}`),
				trigger = document.querySelectorAll(`[data-modal=${name}]`);

		function removePopupStyle() {
			overlay.classList.remove('state-show');
			modal.classList.remove('state-appear');
			modal.classList.add('state-leave');
			document.body.classList.remove('static')
		}

		function addPopupStyle() {
			overlay.classList.add('state-show');
			modal.classList.add('state-appear');
			modal.classList.remove('state-leave');
			document.body.classList.add('static')
		}

		close.forEach( (item) => {
			item.addEventListener('click', () =>  {
				removePopupStyle();
			});
		});

		trigger.forEach( (item) => {
			item.addEventListener('click', () =>  {
				addPopupStyle();
			});
		});

		overlay.addEventListener('click', () => {
			removePopupStyle();
		});

		document.addEventListener('keyup', e => {
			if (e.key === "Escape") {
				removePopupStyle();
			}
		});
	}

	close()
	{
		let overlay = document.querySelector('.modal-overlay'),
				modal = document.querySelector(`.${this.name}`);

		overlay.classList.remove('state-show');
		modal.classList.remove('state-appear');
		modal.classList.add('state-leave');
		document.body.classList.remove('static')
	}

	open()
	{
		let overlay = document.querySelector('.modal-overlay'),
				modal = document.querySelector(`.${this.name}`);

			overlay.classList.add('state-show');
			modal.classList.add('state-appear');
			modal.classList.remove('state-leave');
			document.body.classList.add('static')
	}
}