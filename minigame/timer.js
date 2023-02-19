
//10000이 10초

const timePaint = document.querySelector('.timer');
const startButton = document.querySelector('.startButton');
const AgainButton = document.querySelector('.reStartBtn');
let time = 11



//게임 로드될 시 if() {타이머구동 기능 실현해야함}

function StartGame(e) {
   startButton.addEventListener('click', e=>{
        timer = setInterval(TimerInner,1000);
        reMap();
        game();
   }
   ,{ once:true})
   } 

StartGame();


function TimerInner() {
   if(time>0) {
    time = time-1;
    timePaint.innerText = (`${time} : 00`).padStart(7,"0");}
   else {
      clearInterval(timer);
      gameResult.classList.remove('invisible');
   }
}

AgainButton.addEventListener('click', reStart);

function reStart() {
   image_section.innerHTML='';
   gameResult.classList.add('invisible');
   time = 11;
   timer = setInterval(TimerInner,1000);
   reMap();
   game();
     } 