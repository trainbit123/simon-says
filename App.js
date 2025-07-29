let started = false;
let userseq = [];
let gameseq = [];
let level = 0;
let highest = 0; // Initialize highest score

let btns = ['purple', 'orange', 'green', 'violet'];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("game started");
        Levelup();
    }
});

function Levelup() {
    level++;
    h2.innerText = `Level: ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    gameflash(randombtn);
    console.log(randomIdx);
    console.log(randomcolor);
    console.log(randombtn);
    console.log(gameseq);
}

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function () {
        btn.classList.remove("gameflash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => { btn.classList.remove("userflash"); }, 250);
}

let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener('click', btnpressbyuser);
}

function btnpressbyuser() {
    let btn = this;
    userflash(btn);

    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkseq(userseq.length - 1);
}

function checkseq(idx) {
    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(Levelup, 1000);
            highestscore();
        }
    } else {
        h2.innerHTML = `Game Over! Your score is ${level - 1} <br> press any key to restart again`;
        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 250);
    }
}

function highestscore() {
    if (highest < level) {
        highest = level;
    }
    let highscore = document.querySelector(".high-score");
    highscore.innerText = `Highest score: ${highest}`;
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
    h2.innerText = "press any key to restart"; // Reset the displayed level
    highestscore(); // Update the high score display
}
