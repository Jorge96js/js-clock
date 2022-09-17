const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');


function setDate(){
    const now = new Date();

    const second = now.getSeconds()

    const secondsDegrees = ((second/60)*360);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);

    const hour = now.getHours();

    const hoursDegrees = ((hour/12)*360);

    console.log(hoursDegrees)
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}setInterval(setDate, 1000);

document.getElementById('img1').addEventListener('click', ()=>{
    let imagen = document.querySelector('.clock')
    imagen.style.backgroundImage = 'url("background2.jpg")';
})

document.getElementById('img2').addEventListener('click', ()=>{
    let imagen = document.querySelector('.clock')
    imagen.style.backgroundImage = 'url("bgimage.jpg")';
})
document.getElementById('img3').addEventListener('click', ()=>{
    let imagen = document.querySelector('.clock')
    imagen.style.backgroundImage = 'url("vinland-saga-thorfinn.gif")';
})
document.getElementById('img4').addEventListener('click', ()=>{
    let imagen = document.querySelector('.clock')
    imagen.style.backgroundImage = 'url("turtle.jpg")';
    imagen.style.backgroundPosition = 'center';
})

document.getElementById('img5').addEventListener('click', ()=>{
    let imagen = document.querySelector('.clock')
    imagen.style.backgroundImage = 'url("roman.png")';
    imagen.style.backgroundPosition = 'center';
})
