let second=document.getElementById('seconds');
let milliseconds=document.getElementById('milliseconds');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let sec=0;
let mil=0;
let timeInterval;


const time=()=>{
    mil++;

   
    if(mil>9){
        milliseconds.innerHTML="0"+mil;
    }
    if(mil>9){
        milliseconds.innerHTML=mil;
    }
    if(mil>99){
        sec++;
        second.innerHTML="0"+sec;
        mil=0;
        milliseconds.innerHTML="0"+0;
    }
    if(sec>9){
        second.innerHTML=sec;
    }
}

// start
start.addEventListener('click', ()=>{
    timeInterval=setInterval(time,10);
});
 
// start
stop.addEventListener('click', ()=>{
    clearInterval(timeInterval);
});
// start
reset.addEventListener('click', ()=>{
   clearInterval(timeInterval);
   sec="00";
   mil="00";
   second.innerHTML=sec;
   milliseconds.innerHTML=mil;
   console.log(second);
})