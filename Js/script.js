 // Массив с ID кнопок, для которых будет работать функционал копирования
const buttonIds = ["aboutUs__number", "aboutUs__mail", "aboutUs__adress"];

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showCustomAlert("Скопировано: " + text);
        })
        .catch(err => {
            console.error("Ошибка при копировании текста: ", err);
        });
}

function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('customAlertMessage');
    const closeButton = document.getElementById('customAlertClose');

    alertMessage.innerText = message;
    alertBox.style.display = 'block';

    // Закрытие окна по нажатию на кнопку
    closeButton.onclick = function() {
        alertBox.style.display = 'none';
    };

    // Автоматическое закрытие окна через 3 секунды (3000 мс)
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}

// Добавляем обработчик события для каждой кнопки по ID
buttonIds.forEach(id => {
    const button = document.getElementById(id);
    if (button) { // Проверяем, существует ли кнопка с данным ID
        button.addEventListener("click", function() {
            const textToCopy = this.innerText; // Получаем текст кнопки
            copyToClipboard(textToCopy); // Копируем текст
        });
    }
});



// // Получаем элементы модального окна и кнопку закрытия
// const modal = document.getElementById("contactModal");
// const closeButton = document.querySelector(".close-button");

// // Собираем все кнопки, которые должны открывать модальное окно
// const openModalButtons = document.querySelectorAll(".tarrif__item-button, #openModal");

// // Добавляем обработчик событий для каждой кнопки
// openModalButtons.forEach(button => {
//     button.addEventListener("click", function(event) {
//         event.preventDefault(); // Предотвращаем стандартное действие
//         modal.style.display = "block"; // Показываем модальное окно
//     });
// });

// // Закрываем модальное окно при нажатии на кнопку закрытия
// closeButton.addEventListener("click", function() {
//     modal.style.display = "none"; // Скрываем модальное окно
// });

// // Закрываем модальное окно при клике вне его содержимого
// window.addEventListener("click", function(event) {
//     if (event.target === modal) {
//         modal.style.display = "none"; // Скрываем модальное окно
//     }
// });

// Получаем элементы модального окна и кнопку закрытия
const modal = document.getElementById("contactModal");
const closeButton = document.querySelector(".close-button");

// Собираем все кнопки, которые должны открывать модальное окно
const openModalButtons = document.querySelectorAll(".tarrif__item-button, #openModal");

// Добавляем обработчик событий для каждой кнопки
openModalButtons.forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие
        modal.classList.add("active"); // Добавляем класс active
        setTimeout(() => modal.style.display = "block", 0); // Сразу включаем display
    });
});

// Закрываем модальное окно при нажатии на кнопку закрытия
closeButton.addEventListener("click", function() {
    modal.classList.remove("active"); // Убираем класс active
    setTimeout(() => modal.style.display = "none", 500); // Ждем завершения анимации
});

// Закрываем модальное окно при клике вне его содержимого
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("active"); // Убираем класс active
        setTimeout(() => modal.style.display = "none", 500); // Ждем завершения анимации
    }
});
