const items = document.querySelectorAll('.item-menu');

items.forEach((item) => {
    item.addEventListener('click', () => {
        items.forEach(el => el.classList.remove('active'));
        item.classList.add('active');
    });
});
