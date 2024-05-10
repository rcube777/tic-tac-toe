let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let winMsg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
let hidden = document.querySelector(".hide");
let draw = document.querySelector("#draw");


let turn0 = true;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turn0 = true;
    enableBoxes ();
    hidden.classList.add("hide");
    clickCount = 0;
}
let clickCount = 0;
// clicking X and O
boxes.forEach((box) => {
    box.addEventListener ("click", () => {
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "#F6511D"
        }
        else {
            box.innerText = "X";
            turn0 = true;
            box.style.color = "#00A6ED"
        }
        box.disabled = true;
        checkWinner();
        clickCount ++;
        console.log("click count is: ", clickCount);
        // for draw
            // if (clickCount === 9){
            //     if (showWinner != winPatterns){
            //         console.log("draw");
            //         draw.innerText = "This match is draw";
            //         hidden.classList.remove("hide");
            //         winMsg.classList.add("hide");
            //     }
            // }
    });
});


const disableBoxes = () => {
    for (box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
// function for showing winner
const showWinner = (winner)=> {
    winMsg.innerText =`Congratulations, winner is ${winner}`;
    hidden.classList.remove("hide");
    winMsg.classList.remove("hide");
    draw.classList.add("hide");
}
// checking winner
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
            console.log("winner is ", pos1Val);
            showWinner (pos1Val);
            disableBoxes ();   
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

