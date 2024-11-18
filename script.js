let count = 1;
let intervalId
const tempoEmCooldown = 5000 



const clicarBotao = function(){
    document.getElementById("radio1").checked = true;

    clearInterval(intervalId)
    
    setTimeout(comecaIntervalo, tempoEmCooldown)
}

function comecaIntervalo() {
    intervalId = setInterval(function(){
        nextImage();
    }, 50000)
}


function nextImage(){
    count++
    if(count>4){
        count = 1
    }

    document.getElementById("radio"+count).checked = true;
}

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

