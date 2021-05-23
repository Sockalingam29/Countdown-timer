let sec,myVar,constsec;
let n=0;
function congrats(){
    if(n==0)
    {document.getElementById("congrats").innerHTML="Time's up!";
    n=1}
    else{
        document.getElementById("congrats").innerHTML=" ";
        n=0}
}
function hello(e){
   sec=document.getElementById("sec").value;
   constsec=sec
   myVar=setInterval(timer, 1000);
}
function timer(){
    document.getElementById("timer").innerHTML=sec;
    document.getElementById("timer").style.color="black";
    //console.log(new Date().getTime())
    if(sec==0)
    {   clearInterval(myVar);
        setInterval(congrats,500);
        }    
    j=((sec/constsec)*100)+"%";
    document.getElementById("timer").style.backgroundColor="#fb0";
    document.getElementById("timer").style.width=j;
    sec=sec-1;
}

