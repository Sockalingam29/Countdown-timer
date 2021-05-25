
function congrats(){
    if(n==0)
    {document.getElementById("congrats").innerHTML="Time's up!";
    n=1}
    else{
        document.getElementById("congrats").innerHTML=" ";
        n=0}
}
let fgap;
let i=0;
function mins(){
    
    let date=document.getElementById("date").value;
    let entered=new Date(date).getTime()-18000000-1800000;
   
   
    let now=new Date().getTime();
   let gap=entered-now;
    if (i==0)
    {fgap=gap;
        i=2;}
    
    
    let ms=1;
    let sec=1000;
    let min=sec*60;
    let hr=min*60;
    let day=hr*24;
    let disp_day=Math.floor(gap/day);
    let disp_hr=Math.floor((gap%day)/hr);
    let disp_min=Math.floor((gap%hr)/min);
    let disp_sec=Math.floor((gap%min)/sec);
    let disp_ms=Math.floor((gap%sec)/ms);
    document.getElementById("days").innerHTML=disp_day;
    document.getElementById("hours").innerHTML=disp_hr;
    document.getElementById("minutes").innerHTML=disp_min;
    document.getElementById("seconds").innerHTML=disp_sec;
    document.getElementById("ms").innerHTML=disp_ms;
    if(gap==0)
    {   clearInterval(myVar);
        setInterval(congrats,500);
    }   
    j=((gap/fgap)*100)+"%";
    document.getElementById("timer").style.backgroundColor="#fb0";
    document.getElementById("timer").style.width=j;
}
function interval_set(){
    var myVar=setInterval(mins,1);
}

