document.addEventListener('DOMContentLoaded', function () {
    // Відкриття і зачинення бокової панелі
    const openBtn = document.querySelector('.open');
    const aside = document.querySelector('aside');
    const closeBtn = aside.querySelector('span');

    openBtn.addEventListener('click', function () {
        aside.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        aside.style.display = 'none';
    });

    // Плавна прокрутка до якірних посилань
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Вспливаюче вікно для кнопки "По всім питанням сюди"
    const contactBtn = document.querySelector('.btn_orange');
    contactBtn.addEventListener('click', function () {
        alert('Зв*яжіться з нами по телефону: +38 (099) 683-19-39');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Анімація для стрілочки
    const gotop = document.getElementById('gotop');

    function animateArrow() {
        gotop.style.transition = 'transform 0.5s ease-in-out';
        gotop.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            gotop.style.transform = 'translateY(0)';
        }, 500);
    }

    setInterval(animateArrow, 1000);

    // Плавне повернення до верхньої частини сторінки
    gotop.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('.open');
    const aside = document.querySelector('aside');
    const closeBtn = aside.querySelector('span');

    openBtn.addEventListener('click', function () {
        aside.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        aside.style.left = '-500px';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Відкриття і зачинення вікна
    const openBtn = document.querySelector('.open');
    const aside = document.querySelector('aside');
    const closeBtn = aside.querySelector('span');

    openBtn.addEventListener('click', function () {
        aside.style.left = '0';
    });

    closeBtn.addEventListener('click', function () {
        aside.style.left = '-250px';
    });

    // Анімація для кнопки "По всім питанням сюди" при наведенні
    const contactBtn = document.querySelector('.btn_orange');
    contactBtn.addEventListener('mouseover', function () {
        contactBtn.style.transform = 'scale(1.1)';
        contactBtn.style.transition = 'transform 0.3s ease';
    });
    contactBtn.addEventListener('mouseout', function () {
        contactBtn.style.transform = 'scale(1)';
    });

    // Автоматичне зачинення бокового меню при натисканні не в зоні дії
    document.addEventListener('click', function (event) {
        if (!aside.contains(event.target) && !openBtn.contains(event.target)) {
            aside.style.left = '-250px';
        }
    });

    //Плавне з*явлення єлементів при прокрутці
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Лічильник візитів
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    console.log(`This page has been visited ${visitCount} times.`);

    // Змінення фона шапки при прокрутці
    const header = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'black';
        }
    });

    //Вспливаюче вікно при запуску
    setTimeout(function () {
        alert('Вітаємо на нашому сайті про Java!');
    }, 1000);
});
const wrapper = document.getElementById('image-wrapper');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const images = document.querySelectorAll('.slider-image');

let currentIndex = 0;
function updateImages() {
    images.forEach((img, index) => {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImages();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImages();
});

updateImages(); // Початковий виклик для відображення першого зображення