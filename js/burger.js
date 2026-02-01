document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger-mobile');
  const mobileMenu = document.querySelector('.mobile-menu-mobile');

  burger?.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Закрытие меню при клике на ссылку
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});

const element = document.getElementsByName('body');

document.querySelector('.burger-mobile').addEventListener('click', function () {
  document.body.classList.toggle('no-scroll');
});