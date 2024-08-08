console.log("Welcome to Tic Tac Toe Game")

let music = new Audio("./Gallry/music.wav")
let turn = new Audio("./Gallry/turn2.mp3")
let gameover = new Audio("./Gallry/gameover.mp3")
let isgameover = false

let initialTurn = "X"

const changeTurn = () => {
    return initialTurn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.querySelectorAll('.boxText')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " win"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = '230px'
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

    })
})
