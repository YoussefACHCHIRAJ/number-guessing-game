let startButton = document.querySelector(".start");
let input = document.querySelector("input");
let enterButton = document.querySelector(".enter");
let messageBox = document.querySelector(".alert");
let message = document.querySelector(".alert span");
let playAgain = document.querySelector(".repeat");
let about = document.querySelector(".about");
let numberToGuesse =0;
startButton.addEventListener("click",()=>{
    document.querySelector(".intro").style.display = "none";
    document.querySelector("section").style.display = "block";
})
chooseNumber();
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
        }else if(content == 3){
            enterButton.style.display = "none";
            messageBox.style.display = "block";
            messageBox.style.backgroundColor = "red";
            message.innerHTML = `Sorry, you lose the number was ${numberToGuesse}`;
            }
        }
    input.value = "";
})

function chooseNumber(){
    let numbers = "0917634528";
    let myNumber =0;
    let index= Math.floor(Math.random()*numbers.length);
    myNumber = numbers[index];
    numberToGuesse = myNumber;
    if(numberToGuesse % 2 ==0){
        about.innerHTML  = "the number is pair";
    }else{
        about.innerHTML  = "the number is impair";
    }
}
