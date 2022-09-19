let startButton = document.querySelector(".start");
let input = document.querySelector("input");
let enterButton = document.querySelector(".enter");
let messageBox = document.querySelector(".alert");
let message = document.querySelector(".alert span");
let playAgain = document.querySelector(".repeat");
let numberToGuesse =0;
startButton.addEventListener("click",()=>{
    document.querySelector(".intro").style.display = "none";
    document.querySelector("section").style.display = "block";
})
enterButton.addEventListener("click",()=>{
    if(input.value == "" || +input.value >10){
        alert("enter number between 0 and 9");    
    }else{
        let text = document.createElement("p");
        text.innerHTML = input.value;
        document.querySelector(".result").appendChild(text);
        let content = document.querySelectorAll("p").length;
    if(input.value == numberToGuesse){
            enterButton.style.display = "none";
            text.style.backgroundColor = "green"; 
            messageBox.style.display = "block";
            messageBox.style.backgroundColor = "green";
            message.innerHTML = `Congratulation , you find the number`;
            // playAgain.style.display = "block";
        }else if(content == 3){
            enterButton.style.display = "none";
            messageBox.style.display = "block";
            messageBox.style.backgroundColor = "red";
            message.innerHTML = `Sorry, you lose the number was ${numberToGuesse}`;
            // playAgain.style.display = "block";
            }
        }
    input.value = "";
})

function chooseNumber(){
    let numbers = "123456789";
    let myNumber =0;
    let index= Math.floor(Math.random()*numbers.length);
    myNumber = numbers[index];
    numberToGuesse = myNumber;
}
chooseNumber();
