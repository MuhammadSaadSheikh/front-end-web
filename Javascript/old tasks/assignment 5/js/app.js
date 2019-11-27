var playersName = ['Iori' , 'Chuui', 'Ryo', 'Ken', 'Ehonda' , 'Lee' , 'Dan' , 'Nash' , 'Ore']
var moves = ['punch', 'kick' , 'hadoken' , 'jump' , 'special attack', 'block']
console.log(playersName)
console.log(moves)
var player1 = prompt("Entre your player name").toLowerCase()
var player2 = playersName[Math.floor(Math.random() * playersName.length)]
var player1Move  = prompt('Enter your move').toLowerCase()
var player2Move = moves[Math.floor(Math.random() * moves.length)]
var player1Health = 100 
var player2Health = 100

if(player1.toLowerCase() != playersName.length){
    player1 = playersName[Math.floor(Math.random() * playersName.length)]
    // console.log(player1)
}
else{
    player1 = player1
}

console.log(player1 + ' vs ' + player2)
if(player1Move != moves.length){
    var player1Move = moves[Math.floor(Math.random() * moves.length)]
}
else{
    player1Move = player1Move
}

console.log(player1 + " moves ==> " + player1Move)
console.log(player2 + " moves ==> " + player2Move)

// if(player1Move == "block" && player2Move == 'block'){
// }



