const image_section = document.querySelector(".image_section");


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

