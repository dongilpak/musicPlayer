const frame = document.querySelector('.main');
const articles = frame.querySelectorAll('article');

const deg = 45;
let i = 0;

for (let article of articles) {
    article.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

    i++;
}
