let turnStatus = document.getElementById('status')
const GameBoard = () =>{
    let gameBoard = [['','',''],['','',''],['','','']]
    let positionFill
    const checkPosition = (x, y) =>{

        return positionFill
    }
    const posAddition = (x, y, symbol) =>{

    }
    return{gameBoard, posAddition, checkPosition} 
} 

const AI = (symbol) =>{
    let aiSymbol = symbol
}


const Player = (symbol) =>{
    let playerSymbol = symbol
    const turn = () =>{
        turnStatus.innerHTML = 'It is your turn'
    }
    const turnDestroy = () =>{
        turnStatus.innerHTML = ''
    }
    return{playerSymbol, turn, turnDestroy}
}
let playGrid = document.getElementById('container')
const Game = (player) =>{
    let playerObj = player
    let gameStatus = false
    let gameBoard = GameBoard()
    if(playerObj.playerSymbol == x){
        let aiObj = AI('O')  
    }else{
        let aiObj = AI('X')
    }
}









//This is for the game start section

const xBtn = document.getElementById('x')
const oBtn = document.getElementById('o')
const confirmBtn = document.getElementById('confirm')

xBtn.addEventListener('click', xVerification)
oBtn.addEventListener('click', oVerification)
confirmBtn.addEventListener('click', selectionConfirmation)

function xVerification(){
    if(xBtn.classList.contains('selected')){
        xBtn.classList.remove('selected')
    }else if(oBtn.classList.contains('selected')){
        oBtn.classList.remove('selected')
        xBtn.classList.add('selected')
    }else{
        xBtn.classList.add('selected')
    }
}
function oVerification(){
    if(oBtn.classList.contains('selected')){
        oBtn.classList.remove('selected')
    }else if(xBtn.classList.contains('selected')){
        xBtn.classList.remove('selected')
        oBtn.classList.add('selected')
    }else{
        oBtn.classList.add('selected')
    }
}

function selectionConfirmation(){
    if(oBtn.classList.contains('selected') || xBtn.classList.contains('selected')){
        document.querySelector('section').classList.add('confirmed')
        
    }else{
        document.getElementById('selection-caution').innerHTML = 'Please Select a Symbol!'
    }

    

}

