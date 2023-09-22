const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');

function handleMenu() {
  menu.classList.toggle('on');
  modal.classList.toggle('on');
  menuMobile.classList.toggle('on');
}

function handleMenuButton(target) {
  const menuActive = menuMobile.classList.contains('on');

  if (menuActive) {
    target.setAttribute('src', './src/assets/images/icon-menu-close.svg');
  } else {
    target.setAttribute('src', './src/assets/images/icon-menu.svg');
  }
}

menuMobile.addEventListener('click', ({ target }) => {
  handleMenu();
  handleMenuButton(target);
});
