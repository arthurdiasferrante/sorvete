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

let bombom = document.getElementById("chocolate")
let potes = document.getElementById("potes")
let descricao = document.getElementById("descricao")

window.addEventListener('scroll', function(){
    const valor = window.scrollY;

    bombom.style.top = valor * 0.15 + 'px';
    potes.style.left = valor * 0.1 + 'px';
    descricao.style.top = valor * 0.2 + 'px';

    console.log(valor)

    if (valor >= 937) {
        window.removeEventListener('scroll')
    }
})

