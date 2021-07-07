const headerCityButton = document.querySelector('.header__city-button'); //выборка кнопок по классу//

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
  const city = prompt('Укажите ваш город'); //Запрашиваем у пользователя город через модальное окно//
  headerCityButton.textContent = city; //Заменяем текст в кнопке на текст который ввел пользователь(Город)//
  localStorage.setItem('lomoda-location', city);
});

//Блокировка скрола 

const disableScroll = () => { //создали функцию что бы убрать скрол
const widthScroll = window.innerWidth - document.body.offsetWidth; //выщитали ширину скрола
document.body.dbScrollY = window.scrollY; //получили на сколько проскролили вниз(координаты)
document.body.style.cssText = ` 
position: fixed;
top: ${-window.scrollY}px;
left:0;
width: 100%;
height: 100vh;
overflow: hidden;
padding-right: ${widthScroll}px;
`; //Добавили стили css
};
 const enebleScroll = () => {
document.body.style.cssText = ``;
window.scroll({
  top: document.body.dbScrollY,// что бы при закрытии страница не перескакивала в самое начало
});
 };//функция что бы вернуть скрол



//Модальное окно//

const subheaderCart = document.querySelector('.subheader__cart'); //выборка по классу//
const cartOverlay = document.querySelector('.cart-overlay');   //выборка по классу//

const cartModalOpen = () => {
  cartOverlay.classList.add('cart-overlay-open');
  disableScroll();
}; //создали функцию добавить класс что бы сделать видимым модальное окно//

const cartModalClose = () => {
  cartOverlay.classList.remove('cart-overlay-open');
  enebleScroll ();
}; //создали функцию  при нажатии убрать класс, что бы закрыть мод. окно//


subheaderCart.addEventListener('click', cartModalOpen); //создали функцию  при нажатии вызвать функцию//

cartOverlay.addEventListener('click', event => {
  const target = event.target; //(делигирование) функция что бы при клике получать событие

  if (target.classList.contains('cart__btn-close') || target.matches('.cart-overlay')) {
    cartModalClose(); //если клиент нажал на область с классом то мод. окно закрыть//
  }
});

