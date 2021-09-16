const downBtn = document.querySelector('.down-button')
const upBtn = document.querySelector('.up-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const sliceCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container')


let activeSlide = 0;

sidebar.style.top = `-${(sliceCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})


const changeSlide = (dir) => {
    if (dir === 'up') {
        activeSlide++;
        if (activeSlide === sliceCount) {
            activeSlide = 0;
        }
    } else if (dir === 'down') {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = sliceCount - 1;
        }
    }
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;

    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
    console.log(activeSlide);

}




