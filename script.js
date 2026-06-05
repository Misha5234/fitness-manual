document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    // Функция для плавного показа карточек
    function showCards(target) {
        cards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (target === 'all' || category === target) {
                card.style.display = 'block';
                // Небольшая задержка, чтобы браузер успел применить display: block перед началом анимации
                setTimeout(() => {
                    card.classList.add('show');
                }, 10);
            } else {
                card.classList.remove('show');
                card.style.display = 'none';
            }
        });
    }

    // Показываем все карточки сразу при первой загрузке сайта
    showCards('all');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Переключение активного класса у кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const target = button.getAttribute('data-target');
            showCards(target);
        });
    });
});
