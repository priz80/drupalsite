/**
 * Slider Reviews Script
 */

// Объект с текстами для отзывов
const reviewsData = [
  {
    logo: './img/reviews_img/lpcma_rus_v4.jpg',
    title: 'Произвольный текст на кириллице длиной около 1200 символов. Это начало большого текста, который ��спользуется для демонстрации наполнения контента в системе. В этом тексте могут быть упомянуты различные темы, связанные с веб-разработкой, дизайном и поддержкой сайтов на платформе Drupal. Мы пишем этот текст, чтобы заполнить поле title в массиве reviewsData. Текст должен быть информативным и содержать разнообразные слова и предложения. Важно, чтобы он был на кириллице и имел приблизительно 1200 символов, включая пробелы. Продолжаем писать, чтобы достичь нужной длины.',
    subtitle: 'Клиент',
    text: 'Отличная команда! Работают профессионально и быстро.'
  },
  {
    logo: './img/reviews_img/lpcma_rus_v4.jpg',
    title: 'Нужно добавить ещё немного текста, чтобы точно попасть в лимит. Возможно, стоит включить упоминание о современных технологиях, использовании JavaScript, CSS и HTML при создании интерактивных элементов на сайте. Также можно затронуть тему адаптивного дизайна и оптимизации производительности. Всё это важно для успешной работы современного веб-сайта. Надеемся, что данный текст подойдёт для тестирования и демонстрации функционала. Добавим ещё несколько предложений для надёжности и проверим общую длину символов.',
    subtitle: 'Заказчик',
    text: 'Очень довольна результатом работы. Рекомендую!'
  },
  {
    logo: './img/reviews_img/image-winamp.png',
    title: 'В этом тексте могут быть упомянуты различные темы, связанные с веб-разработкой, дизайном и поддержкой сайтов на платформе Drupal. Мы пишем этот текст, чтобы заполнить поле title в массиве reviewsData. Текст должен быть информативным и содержать разнообразные слова и предложения. Важно, чтобы он был на кириллице и имел приблизительно 1200 символов, включая пробелы. Продолжаем писать, чтобы достичь нужной длины. Нужно добавить ещё немного текста, чтобы точно попасть в лимит. Возможно, стоит включить упоминание о современных технологиях, использовании JavaScript, CSS и HTML при создании интерактивных элементов на сайте. Также можно затронуть тему адаптивного дизайна и оптимизации производительности. Всё это важно для успешной работы современного веб-сайта.',
    subtitle: 'Партнер',
    text: 'Надежные и ответственные исполнители. Спасибо!'
  }
];

// Текущий индекс отзыва
let currentReviewIndex = 0;

// DOM элементы
const reviewsLogo = document.querySelector('.reviews-logo');
const reviewsTitle = document.querySelector('.reviews');
const reviewsSubtitle = document.querySelector('.reviews-subtitle');
const leftArrowCount = document.querySelector('.left-arrow_count');
const rightArrowCount = document.querySelector('.right-arrow_count');
const arrowLeft = document.querySelector('.reviews-arrow_left');
const arrowRight = document.querySelector('.reviews-arrow_right');

// Функция обновления отображения отзыва
function updateReview() {
  const currentReview = reviewsData[currentReviewIndex];
  
  // Обновляем контент
  reviewsLogo.style.backgroundImage = `url(${currentReview.logo})`;
  reviewsLogo.style.backgroundSize = 'contain';
  reviewsLogo.style.backgroundPosition = 'center';
  reviewsLogo.style.backgroundRepeat = 'no-repeat';

  reviewsTitle.textContent = currentReview.title;
  reviewsSubtitle.textContent = currentReview.subtitle;

  // Обновляем счетчики = 'center';
  
  reviewsTitle.textContent = currentReview.title;
  reviewsSubtitle.textContent = currentReview.subtitle;
  
  // Обновляем счетчики
  leftArrowCount.textContent = currentReviewIndex > 0 ? currentReviewIndex : reviewsData.length;
  rightArrowCount.textContent = currentReviewIndex < reviewsData.length - 1 ? currentReviewIndex + 2 : 1;
}

// Обработчик клика по левой стрелке
arrowLeft.addEventListener('click', function() {
  currentReviewIndex = currentReviewIndex > 0 ? currentReviewIndex - 1 : reviewsData.length - 1;
  updateReview();
});

// Обработчик клика по правой стрелке
arrowRight.addEventListener('click', function() {
  currentReviewIndex = currentReviewIndex < reviewsData.length - 1 ? currentReviewIndex + 1 : 0;
  updateReview();
});

// Инициализация при загрузке
window.addEventListener('load', function() {
  if (reviewsLogo && reviewsTitle && reviewsSubtitle && leftArrowCount && rightArrowCount) {
    updateReview();
  }
});