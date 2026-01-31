document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', (event) => {
      event.stopPropagation(); // Предотвратить всплытие события
      
      // Скрыть все ответы и убрать класс faq-item_after
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-answer').style.display = 'none';
          otherItem.classList.remove('faq-active');
        }
      });

      // Переключить текущий ответ и класс faq-item_after
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        item.classList.remove('faq-active');
      } else {
        answer.style.display = 'block';
        item.classList.add('faq-active');
      }
    });
  });

  // Скрытие открытого блока при клике вне его
  document.addEventListener('click', () => {
    faqItems.forEach(item => {
      const answer = item.querySelector('.faq-answer');
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        item.classList.remove('faq-active');
      }
    });
  });
});