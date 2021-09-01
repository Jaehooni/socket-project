const loading = document.querySelector('.loading');
const startPageWrapper = document.querySelector('.start-page-wrapper');
const startButton = document.querySelector('.start-page-option > button')

const entranceEffect = function(){
    startPageWrapper.classList.toggle('blur');
    loading.classList.toggle('invisible');
}

const temp = function(){
    startPageWrapper.classList.toggle('blur');
    loading.classList.toggle('invisible');
}

startButton.addEventListener('click', entranceEffect);
loading.addEventListener('click', temp);

