const printMessage = (id,message) => document.getElementById(id).innerHTML = message;
let firstNumber ;
let lastNumber ;
const thisNumber = () => parseInt( ( lastNumber - firstNumber ) / 2  + firstNumber) ;

const startButton = document.getElementById("startButton");
startButton.addEventListener("click",(x) => {
    startGame();
});

const lessButton = document.getElementById("lessThanButton");
lessButton.addEventListener("click",(x) => {
    lastNumber = thisNumber();
    printMessage("anwser-text",`${ thisNumber() }`)
});

const greaterButton = document.getElementById("greaterThanButton");
greaterButton.addEventListener("click",(x) => {
    firstNumber = thisNumber();
    printMessage("anwser-text",`${ thisNumber() }`)
});

const equalButton = document.getElementById("equalToButton");
equalButton.addEventListener("click",(x) => {
    finishGame();
});

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click",(x) => {
    resetGame();
});

const stateButtons = ( startActive, lessActive, equalActive, greaterActive, resetActive  ) => {
    startButton.style.display = startActive === true ? "inline": "none";
    lessButton.style.display = lessActive === true ? "inline": "none";
    greaterButton.style.display = equalActive === true ? "inline": "none";
    equalButton.style.display = greaterActive === true ? "inline": "none";   
    resetButton.style.display = resetActive === true ? "inline": "none";
}

const startGame =( ) => {
    stateButtons(false,true,true,true,true);
    printMessage("instrutions-text","Tell me if this is your number:");
    printMessage("anwser-text",`${ thisNumber() }`)
};
const resetGame = () => {
    firstNumber = 0;
    lastNumber = 100;
    stateButtons(true,false,false,false,false);
    printMessage("instrutions-text",`Choose a number between ${firstNumber} and ${lastNumber}`);
    printMessage("anwser-text","")
    
};
resetGame();

const finishGame = () => {
    stateButtons(false,false,false,false,true);
    printMessage("instrutions-text",`Your number was ${ thisNumber() }`);
    printMessage("anwser-text","Thanks for playing!")
};