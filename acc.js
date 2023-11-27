(() => {

	class Accordion {
		
		//初期化
		constructor(obj){

			console.log('obj', obj.hookName);

			const $elm = document.querySelector(obj.hookName);
			const $trigger = $elm.getElementsByTagName(obj.tagName);

			const triggerLen = $trigger.length;
			let index = 0;
			while (index < triggerLen) {
				$trigger[index].addEventListener('click', (e) => this.clickHandler(e));	
				index++;　　
				// ここのthisはconstructorを指す？
			}
		}

		
		clickHandler(e){

			// リンクタグのときは必要。今回はpタグ
			// e.preventDefault();

			const $target = e.currentTarget;
			const $content = $target.nextElementSibling;
			
			if($content.style.display === 'block'){
				$content.style.display = 'none';
			} else {
				$content.style.display ='block';
			}
		}
	}

	const fuckingAccordion = new Accordion({
		hookName: '#js-faq',
		tagName: 'p'
	});

	const dummyAccordion = new Accordion({
		hookName: '#js-accordion',
		tagName: 'p'
	});

	const miniAccordion = new Accordion({
		hookName: '#js-accordion-mini',
		tagName: 'p'
	});





})();
