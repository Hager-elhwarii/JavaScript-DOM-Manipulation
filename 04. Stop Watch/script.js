let timer = document.getElementById('timer');
let startBtn = document.querySelector('#play-btn');
let resetBtn = document.querySelector('#reset-btn');


let timeInterval = null;

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours =0;

const startWatch = ()=> {
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    }else {
        leadingSeconds = seconds
    }
    if(minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    }else {
       leadingMinutes = minutes
    }
    if(hours < 10) {
        leadingHours = '0' + hours.toString();
    }else {
        leadingHours = hours
    }
    timer.innerText = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`
}

startBtn.addEventListener('click',()=> {
timeInterval = window.setInterval(startWatch,1000)
// startBtn.classList.add ='pause-btn'
// startBtn.innerHTML = '<iconify-icon icon="iconoir:pause-solid"></iconify-icon>'
})

resetBtn.addEventListener('click',()=> {
clearInterval(timeInterval);
timer.innerText = '00:00:00'
})


















// const startWatch = ()=> {
//     console.log('in start func');
//     seconds++;
//    if(seconds > 1){
//     minutes++;
//    }
//    if(minutes > 1){
//     hours++;
//    }

//   if(seconds < 10){
//     seconds = `0${seconds}`
//   }
//   if(seconds == 10){
//     minutes++
//   }
//    timer.innerText = `${hours}:${minutes}:${seconds}`
// }

// startBtn.addEventListener('click',()=> {
//     console.log('start btn clicked');
//    startBtn.innerHTML = '<iconify-icon icon="carbon:pause-filled"></iconify-icon>';
//    timeInterval = setInterval(startWatch,1000);
// })

// resetBtn.addEventListener('click',()=> {
//     timer.innerText = '00:00:00'
//    clearInterval(timeInterval);
// })