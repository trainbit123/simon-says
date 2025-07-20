let gameseq=[];
let userseq=[];

let btns=['purple' ,'green','orange',,'violet'];

let started = false;
let level =0;
let highest=level;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(started==false){
        started=true;
        console.log("game started");
        levelup();
    }
})


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level:${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randomcolor = btns[randomIdx];

    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    gameflash(randombtn);
}

function gameflash(btn){
    btn.classList.add("gameflash");
    setInterval(function(){
    btn.classList.remove("gameflash");
    },250)
}

function userflash(){
    btn.classList.add("userflash");
    setTimeout(() => {
         btn.classList.remove("userflash");
        
    }, 250);
}
let allbtns = document.querySelector(".btn")
for( let btn of allbtns){
    btn.addEventListener('click',btnpressbyuser)
}
function btnpressbyuser(){
    let btn =this;
    userflash(btn);

    let usercolor=btn.getAtribute('id')
    userseq.push(usercolor);
     checkseq(userseq.length-1);
}
function checkseq(idx){
    if(userseq[idx]==gameseq[idx]){
        setTimeout(levelup,1000);
        highestscore();
    }
    else{
       
        h2.innerHTML=`Game Over!Your score is ${level-1} </b>
        <br> press any key to restart again`;
         reset();
         document.querySelector('body').style.backgroundColor="red";
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white"
         },250)



    }
}
function highestscore(){
if(highest<level){
    highest=level;
}
    let highscore = document.querySelector(".high-score");
     highscore.innerHTML=`Highest score:${highest}`;

}
 function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
 }