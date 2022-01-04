const frame = document.querySelector('.main');
const articles = frame.querySelectorAll('article');

const deg = 45;
let i = 0;
let len = articles.length - 1;

for (let article of articles) {
    let pic = article.querySelector('.pic');
    article.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;

    let play = article.querySelector('.play');
    let pause = article.querySelector('.pause');
    let load = article.querySelector('.load');

    play.addEventListener('click', e => {
        let isActive = e.currentTarget
            .closest('article')
            .classList.contains('on');
        if (isActive) {
            e.currentTarget
                .closest('article')
                .querySelector('.pic')
                .classList.add('on');
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    });

    pause.addEventListener('click', e => {
        let isActive = e.currentTarget
            .closest('article')
            .classList.contains('on');
        if (isActive) {
            e.currentTarget
                .closest('article')
                .querySelector('.pic')
                .classList.remove('on');
            e.currentTarget.closest('article').querySelector('audio').pause();
        }
    });

    load.addEventListener('click', e => {
        let isActive = e.currentTarget
            .closest('article')
            .classList.contains('on');
        if (isActive) {
            e.currentTarget
                .closest('article')
                .querySelector('.pic')
                .classList.add('on');
            e.currentTarget.closest('article').querySelector('audio').load();
            e.currentTarget.closest('article').querySelector('audio').play();
        }
    });
}

const prev = document.querySelector('.btnPrev');
const next = document.querySelector('.btnNext');
const audios = frame.querySelectorAll('audio');

let num = 0;
let active = 0;

function activation(index, articles) {
    for (let article of articles) {
        article.classList.remove('on');
    }

    articles[index].classList.add('on');
}

function initMusic() {
    for (let audio of audios) {
        audio.pause();
        audio.load();
        audio.parentElement.previousElementSibling.classList.remove('on');
    }
}

prev.addEventListener('click', e => {
    initMusic();
    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;
    active === 0 ? (active = len) : active--;
    activation(active, articles);
});

next.addEventListener('click', e => {
    initMusic();
    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;
    active === len ? (active = 0) : active++;
    activation(active, articles);
});
