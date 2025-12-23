let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".win_container");
let msg = document.querySelector(".msg");
let hide = document.querySelector(".hide");
let newgame = document.querySelector("#newgame");
let resetbtn = document.querySelector("#btn");

let turnO = true;

let winP = [ // winP bhi ek arr h jisme 9 elements h
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],//ye ek array pattern h jisme 3 elements h jiska [0] index 1 ko, [1] index 4 ko, [2] index 7 ko hold krta h
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO =false;
    }else{
        box.innerText = "X";
        turnO =true;
        
    }
    box.disabled = true;
    checkWin();
    });  
});

 const checkWin =()=>{
    for(let pattern of winP){
            let p1 = boxes[pattern[0]].innerText;
            let p2 = boxes[pattern[1]].innerText;
            let p3 = boxes[pattern[2]].innerText;
        if(p1 !== "" && p2 !=="" && p3 !== ""){
            if(p1===p2 && p2 ===p3){
                console.log("winner",p2);
               disablebox() ;
               showWinner(p2);
            }
            
        }    
    }
 };


 const disablebox = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner}`;
    win.classList.remove("hide");
}

 const resetgame= ()=>{
    turnO =true;
    enablebox();
    win.classList.add("hide");
};

 newgame.addEventListener("click", resetgame);
 resetbtn.addEventListener("click", resetgame);



