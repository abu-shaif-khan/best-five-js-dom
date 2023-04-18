// player selected function
function playerListFunction(playerName, playerId){
    let playerList = document.getElementById('playerSelectedList');
    let playerListItem = document.createElement('li');
    playerListItem.innerText = playerName;
    playerList.appendChild(playerListItem);
    document.querySelector(playerId).disabled = true;
    let count = 1;

    return count;

}

function countFivePlayers(){

}

document.getElementById('player1').addEventListener('click', function(){
    playerListFunction('Lionel Messi', '#player1');
})
document.getElementById('player2').addEventListener('click', function(){
    playerListFunction('Neymar Jr.', '#player2');
})
document.getElementById('player3').addEventListener('click', function(){
    playerListFunction('Kylian Mbappé', '#player3');
})
document.getElementById('player4').addEventListener('click', function(){
    playerListFunction('Vitinha', '#player4');
})
document.getElementById('player5').addEventListener('click', function(){
    playerListFunction('Sergio Ramos', '#player5');
})
document.getElementById('player6').addEventListener('click', function(){
    playerListFunction('Hugo Ekitiké', '#player6');
})
document.getElementById('player7').addEventListener('click', function(){
    playerListFunction('Donnarumma', '#player7');
})
document.getElementById('player8').addEventListener('click', function(){
    playerListFunction('Marquinhos', '#player8');
})
document.getElementById('player9').addEventListener('click', function(){
    playerListFunction('Erling Haaland', '#player9');
})