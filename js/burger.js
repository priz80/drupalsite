// burger.js — Полностью рабочее адаптивное меню

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const dropdowns = document.querySelectorAll('.mobile-menu .dropdown');

  // Открытие/закрытие основного меню
  burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    // Блокировка скролла при открытом меню
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Обработка кликов по пунктам с подменю
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function (e) {
      // Если клик по ссылке — предотвращаем переход, если меню закрыто
      if (e.target.tagName === 'A' && !this.classList.contains('active')) {
        e.preventDefault();
      }

      // Закрываем другие подменю
      dropdowns.forEach(item => {
        if (item !== this) {
          item.classList.remove('active');
        }
      });

      // Переключаем текущее
      this.classList.toggle('active');
    });
  });

  // Закрытие меню при клике вне
  document.addEventListener('click', function (e) {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
      // Закрываем всё
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
      document.body.style.overflow = ''; // разрешаем скролл
    }
  });

  // Закрытие меню при изменении размера экрана (на десктоп)
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1100) {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });
});
