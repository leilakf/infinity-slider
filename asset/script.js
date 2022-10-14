// نوشتن پارت اول اسلایدر
let slider_org = document.querySelector('.slider_org')
let slides = document.querySelectorAll('.slide')
const nextbtn = document.querySelector('.right > i')
const prevbtn = document.querySelector('.left > i')
let index = 1;
let slideID;
let thumb = document.getElementById('thumb');
let slide_1 = document.querySelectorAll('.slide_1');

const firstclone = slides[0].cloneNode(true);
const lastclone = slides[slides.length - 1].cloneNode(true)

firstclone.id = 'firstclone';
lastclone.id = 'lastclone';

slider_org.append(firstclone)
slider_org.prepend(lastclone)


let slidewidth = slides[index].clientWidth;

slider_org.style.transform = `translateX(-${slidewidth*index}px)`

const startslide = () => {
    slideID = setInterval(() => {
        movetonextslide()
    }, 1000);
}

slider_org.addEventListener('transitionend', function () {
    slides = document.querySelectorAll('.slide')
    if (slides[index].id === firstclone.id) {
        slider_org.style.transition = 'none'
        index = 1;
        slider_org.style.transform = `translateX(-${slidewidth*index}px)`
        slide_1[slide_1.length - 1].style.transform = 'scale(1)'
        slide_1[0].style.transform = 'scale(1.2)'
    }
    if (slides[index].id === lastclone.id) {
        slider_org.style.transition = 'none'
        index = slides.length - 2;
        slider_org.style.transform = `translateX(-${slidewidth*index}px)`
        slide_1[slide_1.length - 1].style.transform = 'scale(1.2)'
        slide_1[0].style.transform = 'scale(1)'
    }

})

document.querySelector('.left').addEventListener('mouseenter', function () {
    clearInterval(slideID)
})

document.querySelector('.right').addEventListener('mouseenter', function () {
    clearInterval(slideID)
})

function movetonextslide() {
    slides = document.querySelectorAll('.slide')
    if (index >= slides.length - 1) {
        return;
    }
    index++
    slider_org.style.transform = `translateX(-${slidewidth*index}px)`
    slider_org.style.transition = '0.4s'



    slide_1[index - 2].style.transform = 'scale(1)'
    slide_1[index - 1].style.transform = 'scale(1.2)'

}

function movetoprevslide() {
    if (index <= 0) {
        return;
    }
    index--
    slider_org.style.transform = `translateX(-${slidewidth*index}px)`
    slider_org.style.transition = '0.4s'
    console.log(index);

    slide_1[index].style.transform = 'scale(1)'
    slide_1[index - 1].style.transform = 'scale(1.2)'
}

nextbtn.addEventListener('click', movetonextslide)
prevbtn.addEventListener('click', movetoprevslide)



document.querySelector('.left').addEventListener('mouseleave', startslide)
document.querySelector('.right').addEventListener('mouseleave', startslide)

startslide()
