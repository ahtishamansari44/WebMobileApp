var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('msec');
var interval;

function Time(){
    msec++;
    msecHeading.innerText = msec;

    if(msec>=100){
        sec++;
        secHeading.innerText = sec;
        msec = 0;
    }
    if(sec>=60){
        min++;
        minHeading.innerText = min;
        sec = 0;
    }

}

function Start(){
 interval = setInterval(Time, 10);
 document.getElementById('startBtn').disabled = true;
 document.getElementById('stopBtn').disabled = false

}

function Stop(){
    clearInterval(interval);
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
}

function Reset(){

    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerText = min;
    secHeading.innerText = sec;
    msecHeading.innerText = msec;
    clearInterval(interval)
    document.getElementById('stopBtn').disabled = true;
    document.getElementById('startBtn').disabled = false;
}