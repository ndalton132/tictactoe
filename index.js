let p = document.querySelectorAll('[cell-1]')
const XTurn= "x"
const OTurn= "o"
const board = document.getElementById('board')
const restart = document.getElementById("restart")
const youWin = document.querySelector('[message-text]')
//const draw = document.querySelector('[message-text]')
const WinOrLose = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let circleTurn




Start()



function Start(){
let p = document.querySelectorAll('[cell-1]')
const XTurn= "x"
const OTurn= "o"
const board = document.getElementById('board')
const restart = document.getElementById("restart")
const youWin = document.querySelector('[message-text]')
//const draw = document.querySelector('[message-text]')
const WinOrLose = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

p.forEach(cell => {
  cell.addEventListener('click',handleClick,{once: true})
})

function handleClick(z){
  let cell = z.target
  let Turn = circleTurn ? OTurn : XTurn
  addMark(cell, Turn)
  Swap()
  setBoardCoverClass()
}


function setBoardHoverClass() {
  board.classList.remove(XTurn)
  board.classList.remove(OTurn)
  if (circleTurn) {
    board.classList.add(OTurn)
  } else {
    board.classList.add(XTurn)
  }
}

function addMark(cell, Turn){
  cell.classList.add(Turn)
  
  if(checkWin(Turn)){
    end(false)
} else if (Drawers){
  end(true)
}}
function Swap(){
  circleTurn = !circleTurn
}

function setBoardCoverClass(){
  board.classList.remove(XTurn)
  board.classList.remove(OTurn)
  if (circleTurn) {
    board.classList.add(OTurn)
  } else{
    board.classList.add(XTurn)
  }
}

function checkWin(Turn){
  return WinOrLose.some(combination => {
    return combination.every(index => {
      return p[index].classList.contains(Turn)
    })
  })
}

function Drawers(){
  return [...p].every(cell => {
    return cell.classList.contains("XTurn") || cell.classList.contains("OTurn")
    return alert("Draw")
  })
}

function end(Drawers) {
  if(Drawers == true){
   youWin.innerText = "Draw"
  }else{
    youWin.innerText = `${circleTurn ? "O" : "X"} Wins!`
  }
}}