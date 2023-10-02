let gameswq =[];
let userseq =[];
let allcolors = ["red" , "yellow" , "green" , "purple"];
let h2 = document.querySelector('h2');
let level = 0;
let start = false;
let allbtn = document.querySelectorAll(".btn");
document.addEventListener('keypress' , function(){
    if(start== false){
        start = true;
        levelup();
    }
})
function levelup(){
    userseq =[];
    level++ ;
    h2.innerText = `level${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = allcolors[randidx];
    let randpress = document.querySelector(`.${randcolor}`);
    console.log(randpress);
    gameswq.push(randcolor);
    console.log(gameswq);
    gamepress(randpress);
}
function gamepress(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function checkans(idx){
    if(userseq[idx]===gameswq[idx]){
        if(userseq.length==gameswq.length){
            setTimeout(levelup , 1000);
        }
    }else{
        h2.innerHTML=`Game over!, Your score was ${level}<br> Press any key to start `;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white"; 
        },150);
        reset();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function userpress(btn){
    let tgt = this;
    tgt.classList.add("userflash");
    setTimeout(function(){
        tgt.classList.remove("userflash");
    },1000);
    let usercolor = tgt.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
for (btn of allbtn){
    btn.addEventListener('click' , userpress );
}
function reset(){
    start = false;
    userseq =[];
    gameswq =[];
    level =0;
}