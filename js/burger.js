document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger-mobile');
  const mobileMenu = document.querySelector('.mobile-menu-mobile');

  // Открытие/закрытие мобильного меню
  burger?.addEventListener('click', function () {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll'); // Блокировка скролла
  });

  // Закрытие меню при клике на ссылку, кроме выпадающих пунктов
  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      // Проверяем, не является ли родитель ссылки элементом с классом dropdown
      if (!link.parentElement.classList.contains('dropdown')) {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // Обработка клика по пункту с подменю (dropdown)
  mobileMenu?.querySelectorAll('.dropdown > a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Предотвращаем переход
      const dropdown = this.parentElement;
      dropdown.classList.toggle('active');
      // Важно: НЕ закрываем мобильное меню целиком!
    });
  });
});