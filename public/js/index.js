const loading = document.querySelector('.loading');
const startButton = document.querySelector('.start-button')
const welcome = document.querySelector('.welcome')

const entrance = function(){
    welcome.classList.toggle('blur');
    loading.classList.toggle('invisible');
    setTimeout(function(){
      location.href = "lobby.html";
    }, 3000)
}

// const temp = function(){
//     startPageWrapper.classList.toggle('blur');
//     loading.classList.toggle('invisible');
// }

startButton.addEventListener('click', entrance);
// loading.addEventListener('click', temp);

