const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const animation = document.querySelector('[data-anime]');

function handleMenu() {
  menu.classList.toggle('on');
  modal.classList.toggle('on');
  menuMobile.classList.toggle('on');
}

function handleMenuButton(target) {
  const menuActive = menuMobile.classList.contains('on');

  if (menuActive) {
    animation.setAttribute('data-anime', 'menuIn');
    target.setAttribute('src', './src/assets/images/icon-menu-close.svg');
  } else {
    animation.setAttribute('data-anime', 'menuOut');
    target.setAttribute('src', './src/assets/images/icon-menu.svg');
  }
}

menuMobile.addEventListener('click', ({ target }) => {
  handleMenu();
  handleMenuButton(target);
});
