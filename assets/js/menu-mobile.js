export default function initMenuMobile() {
  const buttonMenu = document.querySelector('.menu-hamburguer');
  const listNav = document.querySelector('.list-nav');

  ['touchstart', 'click'].forEach(userEvent => {
    buttonMenu.addEventListener(userEvent, handleClick);
  })

  function handleClick(e) {
    e.preventDefault();
    console.log('OK');
    listNav.classList.toggle('active');
  }

}