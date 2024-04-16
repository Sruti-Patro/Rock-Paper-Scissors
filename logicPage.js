let userS=0;
let cpS=0;
let userWin=false;

const userScore=document.querySelector("#userScore");
const computerScore=document.querySelector("#computerScore");

const msg=document.querySelector(".mess");

const choices =document.querySelectorAll(".choice");

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoiceID = choice.getAttribute("id");
        // console.log(userChoiceID);
        console.log("User:",userChoiceID);
        playGame(userChoiceID);
    })
})

const winnerDisplay=(userChoice,computerChoice)=>{
    if (userWin) {
        console.log("-----user wins------");  
        msg.innerText=`User Wins! Your ${userChoice} beats  ${computerChoice}`  ;   
    } else {   
        console.log("------user lose-------"); 
        msg.innerText=`User Lose! ${computerChoice} beats your ${userChoice}`  ;     
    }
}

const playGame=(userChoice)=>{
    // console.log("user c in pla",userC);
    const computerChoice=getCPchoice();
    console.log("Computer:",computerChoice);
    if (computerChoice==userChoice) {
        console.log('***draw****');
        msg.innerText="It's a Draw!";  
    } else {
        console.log('****not draw****');
       if ((userChoice=="rock"&&computerChoice=="scissor")||(userChoice=="paper"&&computerChoice=="rock")||(userChoice=="scissor"&&computerChoice=="paper")) {
        userS++;
        userWin=true;
        userScore.innerText=userS;
       } else {
        cpS++;
        userWin=false;
        computerScore.innerText=cpS;
       }
       winnerDisplay(userChoice,computerChoice);
    }
    
    console.log("User Score",userS);
    console.log("Computer Score",cpS);
    console.log(userScore.innerText,"iii");
    }

const getCPchoice=()=>{
    const options=["rock","paper","scissor"];
    return options[Math.floor(Math.random()*3)];
}


const reset=document.querySelector(".reset");
reset.onclick=()=>{
    msg.innerText="Play!";
    userS=0;
    userScore.innerText=userS;
    cpS=0;
    computerScore.innerText=cpS;
}