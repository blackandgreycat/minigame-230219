const image_section = document.querySelector(".image_section");
const resultLoose = document.querySelector(".resultLoose");
var count = 0;

function reMap() {
    for(i=0; i<7; i++){
    const bugs = document.createElement('img');
    bugs.setAttribute('src','img/bug.png');
    bugs.setAttribute('class','bug');
    image_section.appendChild(bugs);
    const carrots = document.createElement('img');
    carrots.setAttribute('src','img/carrot.png');
    carrots.setAttribute('class','carrot');
    image_section.appendChild(carrots);
    const x = Math.random()*(40-10) +10;
    const y = Math.random()*(40-10) +10;
    bugs.style.transform = `translate(${x}px, ${y}px)`;   
    carrots.style.transform = `translate(${x}px, ${y}px)`;}
} 


//window.innerWidth;
//window.innerHeight;


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

const bugList = document.querySelectorAll('.bug');
const carrotList = document.querySelectorAll('.carrot');
const gameResult = document.querySelector('.gameResult');
const resultText = document.querySelector('.resultText');


function game () {
    const bugList = document.querySelectorAll('.bug');
    const carrotList = document.querySelectorAll('.carrot');
    
        const bugAudio = new Audio();
        bugAudio.src = "./sound/bug_pull.mp3"
    
    
    bugList.forEach((item) => {
        item.addEventListener('click', () => { //여기 안에 함수 모양 주의 () => {}이런 식으로 써야 함
           bugAudio.play();}
           )
    });
    
    bugList.forEach((item) => {
        item.addEventListener('click', () => { gameResult.classList.remove('invisible');
    clearInterval(timer);
    resultText.innerText = 'You lose!';}
           )
    });
    
    count = 0;
    carrotList.forEach((item) => {
        item.addEventListener('click', (item) => { item.target.classList.add('invisible');
           count++;
           if(count === 7){
            gameResult.classList.remove('invisible');
            resultText.innerText = 'You win!';
            clearInterval(timer);
            count = 0;
        }
    
            if(count < 7 && time===0) {
            resultLoose.innerText = 'You lose!';
            clearInterval(timer);
        }
           }
           )
    })
}








// const carrotBasket= [];

// carrotList.forEach((item) => {
//     item.addEventListener('click',(item) => {carrotBasket.push(item.target)}
//     )
// });



