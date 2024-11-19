let count = 1;
let intervalId


function comecaIntervalo() {
    intervalId = setInterval(function(){
        nextImage();
    }, 10000)
}


function nextImage(){
    count++
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}

const buttons = document.querySelectorAll('.manual-btn')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => button.classList.remove('active'))

        button.classList.add('active')
    })
})


comecaIntervalo()

// parallax

const mainContent = document.querySelector('.bg-content')

let bombom = document.getElementById("chocolate")
let potes = document.getElementById("potes")
let info = document.getElementById("info")


mainContent.addEventListener('scroll', function(){
    const valor = mainContent.scrollTop;

    bombom.style.bottom = valor * 0.25 + 'px';
    potes.style.top = valor * 0.05 + 'px';

})

