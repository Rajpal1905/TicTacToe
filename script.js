console.log("Welcome to Tic Tac Toe Game")

let music = new Audio("./Gallry/music.wav")
let turn = new Audio("./Gallry/turn2.mp3")
let gameover = new Audio("./Gallry/gameover.mp3")
let isgameover = false

let initialTurn = "X"

const changeTurn = () => {
    return initialTurn === "X" ? "0" : "X"
}
const ganeOver =()=>{
    return " ";
}

const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxText')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " win"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '230px';
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        }
        
    })
}


// game logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerHTML === "") {
            boxtext.innerText = initialTurn;
            turn.play();
            initialTurn = changeTurn();
            turn.play();
            checkWin();
            if (!isgameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + initialTurn;
            }
            if (isgameover){
                Array.from(boxes).forEach(element => {
                    let boxtext = element.querySelector('.boxText');
                    element.addEventListener('click', () => {
                        if (boxtext.innerHTML === "") {
                            boxtext.innerText = initialTurn;
                            turn.play();
                            initialTurn = ganeOver();
                            turn.play();
                            
                            
                            
                        }
                    })
                });
            }
            
        }
    })
});

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
        initialTurn = "X";
        isgameover = false
        document.getElementsByClassName("info")[0].innerText = "Turn for " + initialTurn;
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '0px'
        document.querySelector(".line").style.width = "0";

    })
})
