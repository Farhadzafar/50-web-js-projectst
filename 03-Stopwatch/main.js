let timetdisply = document.querySelector('.timerdisply');

let startBat = document.querySelector('#stratBat');
let stopBat = document.querySelector('#stopBat');
let resetBat = document.querySelector('#resetBat');

let msec= 00;
let sec = 00;
let mins = 00;

let timerId = null;


startBat.addEventListener("click" , function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(stratTimer , 10);
});

stopBat.addEventListener("click" , function(){
    
    clearInterval(timerId);
});

resetBat.addEventListener("click" , function(){
    clearInterval(timerId);
    timetdisply.innerHTML =`00 : 00 : 00`;
    msec = sec = mins = 0;
});

function stratTimer(){
    msec++;
    if(msec == 100){
        msec =0;
        sec++;
        if(sec == 60){
            sec =0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = mins <10 ? `0${mins}` : mins;
    
    let result = timetdisply.innerHTML = `${minsString} : ${secString} : ${msecString}`;
    // console.log(result);
}