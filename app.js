let gameseq = [];
let userseq = [];
let start = false;
let level = 0;
let btns = ["a", "b", "c", "d"];
let h2 = document.querySelector("h2");
let btnnn=document.querySelector(".start");

btnnn.addEventListener('click',f );
function f(){
document.addEventListener("click", function () {
    if (start == false) {
        console.log("game started");
        start = true;
        levelup();
    }
});}
let btnn=document.querySelector(".reset");
btnn.addEventListener("click",resetGame);

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4); // Change to 4 for all buttons
    let randColor = btns[randIdx];

    let randbtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    setTimeout(function () {
        btnFlash(randbtn);
    }, 500); // Delay flashing to show the color

   
}
function resetGame() {
    gameseq = [];
    userseq = [];
    start = false;
    level = 0;
    document.body.classList.remove("game-over");
}

function checkans(idx) {
    if (userseq[idx] == gameseq[userseq.length - 1]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        console.log("not same");
        h2.innerHTML = `game over! your score was <b>${level}</b> <br>press reset button to start the game`;
        document.body.classList.add("game-over"); // Add the class to body
      
    }
}




function btnpress() {
    let btn = this;
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
   
    btnFlash(btn);
    checkans(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}
