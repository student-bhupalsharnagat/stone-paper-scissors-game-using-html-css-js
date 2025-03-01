let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const getcompchoice=()=>{
   const option=["rock","paper","scissors"];
    //   math is class who have  name of method is random whose work generate the 0 to 1  any value esko google ya apna colege
    // se samjh lene  0 se 2 tak randome value chahiye esliye * 3 karenge and esme decimal value aa rahi hai esliye 
    //  eslie Math.float write karte hai 
    const randIdx=Math.floor(Math.random() *3 );
    return option[randIdx];
    }
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="game was draw. Play again.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compchoice)=>{
if(userWin){
    userScore++;
    userScorepara.innerText=userScore;
    // console.log('you win!');
    msg.innerText=`you win! your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}
else{
    compScore++;
    compScorepara.innerText=compScore;
    // console.log("you lose");
    msg.innerText=`you lose ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}



const palyGame=(userChoice)=>{
    console.log("user choice=",userChoice);
// Generate computer choice 
//  small  small work ke liye  function create karna  called moduler way of programming
//  means indivusual work ke liye function create karo ek funct. ka wrok hoga ek hi kam karna
//  ek hi task karna moduler way of programming ko dekh lena google se
const compchoice=getcompchoice();
console.log("comp choice", compchoice)
if(compchoice===userChoice){
    // drow game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        // scissiors, paper
 userWin=compchoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        // rock scissors
        userWin=compchoice==="scissors"?false:true;
    }
    else{
        // rock paper
  userWin = compchoice==="rock"?false:true;
    }
    showWinner(userWin ,userChoice,compchoice);
}
};


 choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
 
 palyGame(userChoice)
    })
 });