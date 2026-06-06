const inicio = new Date("2025-01-25 00:00:00");

function atualizarTempo(){

const agora = new Date();

let diferenca = agora - inicio;

const segundos = Math.floor(diferenca/1000)%60;
const minutos = Math.floor(diferenca/1000/60)%60;
const horas = Math.floor(diferenca/1000/60/60)%24;

const diasTotal = Math.floor(diferenca/1000/60/60/24);

const anos = Math.floor(diasTotal/365);
const meses = Math.floor((diasTotal%365)/30);
const dias = Math.floor((diasTotal%365)%30);

document.getElementById("anos").textContent = anos;
document.getElementById("meses").textContent = meses;
document.getElementById("dias").textContent = dias;
document.getElementById("horas").textContent = horas;
document.getElementById("minutos").textContent = minutos;
document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarTempo,1000);

atualizarTempo();

const emojis = [
"❤️",
"💕",
"💖",
];

function criarEmoji(){

const emoji = 
document.createElement("div");

emoji.draggable = true;
emoji.className = "heart";

emoji.addEventListener(
"dragstart",
(event)=>{

event.dataTransfer.setData(
"text/plain",
""
);

window.emojiAtual = emoji;

}
);

emoji.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

emoji.style.left =
Math.random()*100 + "vw";

emoji.style.animationDuration =
(4 + Math.random()*4) + "s";

document.body.appendChild(emoji);

setTimeout(()=>{
emoji.remove();
},8000);

}

setInterval(criarEmoji,300);

const musica =
document.getElementById("musica");

const botao =
document.getElementById("playBtn");

botao.addEventListener("click",()=>{

if(musica.paused){

musica.play()
.then(()=>{

botao.innerHTML =
"⏸️ Pausar Música";

})
.catch((erro)=>{
console.error("Erro ao tocar:", erro);
alert("Não foi possível reproduzir a música.");
});

}else{
musica.pause();
botao.innerHTML =
"🎵 Tocar Música";
}
});

const frase =
"Tenho algo especial para você...";

const texto =
document.getElementById("textoDigitando");
let indice = 0;
function escrever(){
if(indice < frase.length){
texto.innerHTML +=
frase.charAt(indice);
indice++;
setTimeout(escrever,80);
}
}

escrever();

document
.getElementById("entrar")
.addEventListener("click",()=>{

  document
  .getElementById("intro")
  .style.opacity="0";

  setTimeout(()=>{

    document
    .getElementById("intro")
    .style.display="none";

  },1500);

});
particlesJS("particles-js", {

  particles: {

    number: {
      value: 80
    },

    color: {
      value: "#ff66cc"
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: 0.8,
      random: true 
    },

    size:{
        value:4,
        random:true
    },

    move: {
    enable: true,
    speed: 4,
    direction: "none",
    random: true,
    straight: false,
    out_mode: "out",
    bounce: false
    },

    line_linked: {
      enable: true,
      color: "#ff99dd",
      opacity: 0.3
    }
  },
  interactivity:{
    detect_on:"canvas",
    events:{
    onhover:{
    enable:true,
    mode:"grab"
},
    onclick:{
    enable:true,
    mode:"push"
},
},

    modes:{
    grab:{
    distance:280,
    line_linked:{
    opacity:1
}
},

    push:{
    particles_nb:4
}
}
}
});

const coracoes =
document.querySelectorAll(".coracao");

const mensagem =
document.getElementById("mensagemExibida");

coracoes.forEach(coracao=>{
coracao.addEventListener("click",()=>{
mensagem.classList.remove("mostrar");
coracao.classList.add("clicado");

setTimeout(()=>{
mensagem.innerHTML =
coracao.dataset.msg;
mensagem.classList.add("mostrar");
},200);

setTimeout(()=>{
coracao.classList.remove("clicado");
},600);
});
});

document.addEventListener(
"dragover",
(event)=>{
event.preventDefault();
}
);

document.addEventListener(
"drop",
(event)=>{

event.preventDefault();

if(window.emojiAtual){
window.emojiAtual.style.left =
event.clientX + "px";

window.emojiAtual.style.top =
event.clientY + "px";

window.emojiAtual.style.animation =
"none";
}
}
);

const slider =
document.querySelector(".slider");

const nextBtn =
document.querySelector(".next");

const prevBtn =
document.querySelector(".prev");
nextBtn.addEventListener("click",()=>{
slider.scrollBy({
left:400,
behavior:"smooth"
});

});

prevBtn.addEventListener("click",()=>{
slider.scrollBy({
left:-400,
behavior:"smooth"
});
});

let velocidade = 0.25;
let pausado = false;

slider.addEventListener("mouseenter",()=>{
pausado = true;
});

slider.addEventListener("mouseleave",()=>{
pausado = false;
});

nextBtn.addEventListener("mouseenter",()=>{
    pausado = true;
});

nextBtn.addEventListener("mouseleave",()=>{
    pausado = false;
});

prevBtn.addEventListener("mouseenter",()=>{
    pausado = true;
});

prevBtn.addEventListener("mouseleave",()=>{
    pausado = false;
});

function animarCarrossel(){
if(!pausado){
slider.scrollLeft += velocidade;
}

if (slider.scrollLeft >= slider.scrollWidth / 2) {

    slider.scrollLeft = 0;

}

requestAnimationFrame(animarCarrossel);
}

animarCarrossel();

const textoCompleto=`
Não consigo ter nem palavras para expressar tamanha gratidão e amor por você...
A melhor coisa que me aconteceu foi você entrar na minha vida neném...
Obrigado por tudo.
Eu te amo muitaum!
`;

const envelope = document.getElementById("envelope");
const papel = document.getElementById("papel");
const textoCarta = document.getElementById("textoCarta");
let indiceCarta = 0;

function escreverCarta(){
if(indiceCarta < textoCompleto.length){
textoCarta.innerHTML +=
textoCompleto.charAt(indiceCarta);
indiceCarta++;
setTimeout(escreverCarta,35);
}
}

let cartaAberta = false;

function criarBrilho(){
const brilho = document.createElement("div");
brilho.innerHTML="✨";
brilho.style.position="fixed";
brilho.style.left=
(window.innerWidth/2-20+
(Math.random()*120-60))+"px";
brilho.style.top=
(window.innerHeight/2+
(Math.random()*120-60))+"px";
brilho.style.fontSize="28px";
brilho.style.pointerEvents="none";
brilho.style.transition="1.5s";
document.body.appendChild(brilho);

setTimeout(()=>{
brilho.style.opacity="0";
brilho.style.transform=
"translateY(-80px) scale(2)";
},50);

setTimeout(()=>{
brilho.remove();
},1500);
}

const aba = document.querySelector(".aba");

envelope.addEventListener("click",()=>{
  if(!cartaAberta){
    cartaAberta = true;
    aba.style.transform="rotateX(180deg)";
    textoCarta.innerHTML="";
    indiceCarta=0;
    
    setTimeout(()=>{
      papel.classList.add("ativo");
    },300);
    
    setTimeout(()=>{
      escreverCarta();
    },900);
    }else{
      cartaAberta=false;
      aba.style.transform="rotateX(0deg)";
      papel.classList.remove("ativo");
    }
});

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 30;
  const introHeart = document.querySelector(".intro-heart");
  const textoDigitando = document.getElementById("textoDigitando");
  const introContent = document.querySelector(".intro-content");

  if (introHeart) {
    introHeart.style.transform =
      `translate(${x * 0.6}px, ${y * 0.6}px)`;
  }

  if (textoDigitando) {
    textoDigitando.style.transform =
      `translate(${x * 0.3}px, ${y * 0.3}px)`;
  }
  if (introContent) {
    introContent.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }
});