var activePlayer = 1;
var winne = true;















function calc(x){
    if(winne== true){
        if(activePlayer == 1){
            x.innerHTML = "X";
        }
        else if(activePlayer == 2){
            x.innerHTML = "0";
    
        }
    
       mjh();
       winner();
    }
}


function mjh(){
    if(activePlayer === 1){
        activePlayer = 2;
    }else{
        activePlayer = 1;
    }
}


function winner(){
    var one =document.querySelector(".one").textContent;
    var two =document.querySelector(".two").textContent;
    var three=document.querySelector(".three").textContent;
    var four =document.querySelector(".four").textContent;
    var five =document.querySelector(".five").textContent;
    var six =document.querySelector(".six").textContent;
    var seven =document.querySelector(".seven").textContent;
    var eight =document.querySelector(".eight").textContent;
    var nine=document.querySelector(".nine").textContent;
    

    if(one +two + three === "XXX" || four + five + six === "XXX"  || seven + eight + nine === "XXX" || two + five + eight === "XXX"  || three + six + nine === "XXX" || one + five + nine === "XXX" || three + five + seven ===  "XXX" || one + four + seven === "XXX" || one + two + three === "000"  || four + five + six === "000"  || seven + eight + nine === "000" || two + five + eight === "000"  || three + six + nine === "000" || one + five + nine === "000" || three + five + seven ===  "000" || one + four + seven === "000") {
        console.log("winner");
        winne = false;
        document.querySelector(".ss").style.display = "block";
        document.querySelector(".restart").style.display = "block";

   
    }

    var art = [];
    art.push(one,two,three,four,five,six,seven,eight,nine);
    console.log(art);
    if(art.every((ele) => ele !== "") && winne) {
        document.querySelector(".ssm").style.display = "block";
        //document.querySelector(".ss").style.display = "none";

    }
}

document.querySelector(".restart").addEventListener("click",function(){

    winne = true;
    document.querySelector(".one").textContent = "";
    document.querySelector(".two").textContent = "";
    document.querySelector(".three").textContent = "";
    document.querySelector(".four").textContent="";
    document.querySelector(".five").textContent="";
    document.querySelector(".six").textContent="";
    document.querySelector(".seven").textContent="";
    document.querySelector(".eight").textContent="";
    document.querySelector(".nine").textContent="";
    document.querySelector(".ss").style.display = "none";
   
    document.querySelector(".ssm").style.display = "none";
})



// || ((four && five && six) === "X")  || ((seven && eight && nine) === "X") || ((two && five && eight) === "X")  || ((three && six && nine) === "X") || ((one && five && nine) === "X") || ((three && five && seven) ===  "X") || ((one && four && seven) === "X") || ((one && two && three) === "0")  || ((four && five && six) === "0")  || ((seven && eight && nine) === "0") || ((two && five && eight) === "0")  || ((three && six && nine) === "0") || ((one && five && nine) === "0") || ((three && five && seven) ===  "0") || ((one && four && seven) === "0")) {