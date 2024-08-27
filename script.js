//# fase di preparazione
const precButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const images = document.querySelectorAll('#carousel img')
console.log(images)

//# prima immagine
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active')



//* eventi dinamici
nextButton.addEventListener('click', function () {

    if (currentactiveIndex === images.length) {
        currentActiveIndex = 0;
    }


    images[currentActiveIndex].classList.remove('active')

    currentActiveIndex++;

    images[currentActiveindex].classList.add('active')
});

prevButton.addEventListener('click', function () {

    if (currentactiveIndex < 0) {
        currentActiveIndex = images.length - 1;
    }

    images[currentActiveIndex].classList.remove('active')

    currentActiveIndex--;

    images[currentActiveindex].classList.add('active')
})

