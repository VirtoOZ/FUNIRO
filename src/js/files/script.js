window.onload = function () { //когда весь контент загрузится
	document.addEventListener("click", documentActions);

	// Actions (делигирование события click)
	function documentActions(e) {
		const targetElement = e.target; // кладем в переменную нажатый объект
		if (window.innerWidth > 768 && isMobile.any()) { // если ширина окна меньше 768 и это мобилка
			// hover для мобилки
			if (targetElement.classList.contains('menu__arrow')) {
				targetElement.closest('.menu__item').classList.toggle('_hover');
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), '_hover');
			}
		}
		// проработка поля поиска в шапке
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active');
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active');
		}

		if (targetElement.classList.contains('products__more')) {
			getProducts(targetElement);
			e.preventDefault();
		}
	}
	// работа c шабкой при скролле
	let headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
	//======================================================================
	//Load More Products
	async function getProducts(button) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			const file = "json/products.json";
			let response = await fetch(file, {
				method: "GET"
			});
			if (response.ok) {
				let result = await response.json();
				loadProducts(result);
				button.classList.remove('_hold');
				button.remove();
			} else {
				alert("Ошибка");
			}
		}
	}
	function loadProducts(data) {
		const productsItems = document.querySelector('.products__items');

		data.products.forEach(item => {
			const productId = item.id;
			const productUrl = item.url;
			const productImage = item.image;
			const productTitle = item.title;
			const productText = item.text;
			const productPrice = item.price;
			const productOldPrice = item.priceold;
			const productShareUrl = item.shareUrl;
			const productLikeUrl = item.likeUrl;
			const productLabels = item.labels;

			//======================================================================
			let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
			let productTemplateEnd = `</article>`;

			let productTemplateLabels = '';
			if (productLabels) {
				let productTemplateLabelsStart = `<div class="item-product__labels">`;
				let productTemplateLabelsEnd = `</div>`;
				let productTemplateLabelsContent = '';

				productLabels.forEach(labelItem => {
					productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
				});

				productTemplateLabels += productTemplateLabelsStart;
				productTemplateLabels += productTemplateLabelsContent;
				productTemplateLabels += productTemplateLabelsEnd;
			}

			let productTemplateImage = `
		<a href="${productUrl}" class="item-product__image _ibg">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</a>
	`;

			let productTemplateBodyStart = `<div class="item-product__body">`;
			let productTemplateBodyEnd = `</div>`;

			let productTemplateContent = `
		<div class="item-product__content">
			<h3 class="item-product__title">${productTitle}</h3>
			<div class="item-product__text">${productText}</div>
		</div>
	`;

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="item-product__prices">`;
			let productTemplatePricesCurrent = `<div class="item-product__price">Rp ${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateActions = `
		<div class="item-product__actions actions-product">
			<div class="actions-product__body">
				<a href="" class="actions-product__button btn btn_white">Add to cart</a>
				<a href="${productShareUrl}" class="actions-product__link _icon-share">Share</a>
				<a href="${productLikeUrl}" class="actions-product__link _icon-favorite">Like</a>
			</div>
		</div>
	`;

			let productTemplateBody = '';
			productTemplateBody += productTemplateBodyStart;
			productTemplateBody += productTemplateContent;
			productTemplateBody += productTemplatePrices;
			productTemplateBody += productTemplateActions;
			productTemplateBody += productTemplateBodyEnd;

			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateLabels;
			productTemplate += productTemplateImage;
			productTemplate += productTemplateBody;
			productTemplate += productTemplateEnd;
			//======================================================================
			productsItems.insertAdjacentHTML('beforeend', productTemplate);
		});
	}
	//======================================================================


}
//======================================================================
function _removeClasses(object, classToRemove) {
	for (let index = 0; index < object.length; index++) {
		const element = object[index];
		element.classList.remove(classToRemove);
	}
}
//======================================================================

//<BURGER>=================================
const iconMenu = document.querySelector('.icon-menu');//находим класс icon-menu
const menuBody = document.querySelector('.menu__body');//находим класс menu__body
const headerBody = document.querySelector('.header__body');//находим класс menu__body
if (iconMenu) {//Проверяем есть ли icon-menu
	iconMenu.addEventListener("click", function (e) {//вещам событие при клике мыши
		document.body.classList.toggle('_lock');//Для Body даем класс Lock для отключения прокрутки
		iconMenu.classList.toggle('_active');//добавляем класс active icon-menu
		menuBody.classList.toggle('_active');//добавляем класс active menu__body
		headerBody.classList.toggle('_active');//добавляем класс active menu__body
		// _slideToggle(menuBody, 500);
	});
};
//</BURGER>=================================

//<BURGER SIDE-MENU>=================================
// let menuPageBurger = document.querySelector('.menu-page__burger');
// let menuPageBody = document.querySelector('.menu-page__body');
// menuPageBurger.addEventListener("click", function (e) {
// 	// menuPageBody.classList.toggle('_active');
// 	menuPageBurger.classList.toggle('_active');
// 	_slideToggle(menuPageBody, 500);
// });
//</BURGER SIDE-MENU>=================================

//<ANIM-SLIDE>================================================================
/*   Анимированное плавное открытие и закрытие блока.
Может применяться к меню или выпадающему списку
Выписано из видео фрилансера.
В CSS нужно установить display: none; для родителя.
*/
// SlideUP
import { _slideUp } from "./functions.js";
// SlideDown
import { _slideDown } from "./functions.js";
//SlideToggLe
import { _slideToggle } from "./functions.js";
//</ANIM-SLIDE>================================================================
//<isMobile>================================================================
//Проверка на каком устройстве работаем
import { isMobile } from "./functions.js";
//</isMobile>================================================================