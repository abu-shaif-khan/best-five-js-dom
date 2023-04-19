// player selected function
function playerListFunction(playerName, playerId){
    let listItem = document.getElementsByClassName('player-individual-list');
    let totalListItem = listItem.length;
    if(totalListItem === 5){
        alert('Can not select more then 5 Players');

        return;
    }
    let playerList = document.getElementById('playerSelectedList');
    let playerListItem = document.createElement('li');
    playerListItem.classList.add("player-individual-list");
    playerListItem.innerText = playerName;
    playerList.appendChild(playerListItem);
    document.querySelector(playerId).disabled = true; 
    document.querySelector(playerId).classList.add("btn-light"); 
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

document.getElementById('CalculateBtn').addEventListener('click', function(){
    let perPlayerField = document.getElementById('perPlayer');
    if (isNaN(perPlayerField.value) || perPlayerField.value === ''){
        alert('Please put the number');
        perPlayerField.value = '';

        return;
    }
    let perPlayer = perPlayerField.value * 5;
    let playerExpenseField = document.getElementById('playerExpenses');
    playerExpenseField.innerText = perPlayer;
})

document.getElementById('calculateTotalBtn').addEventListener('click', function(){
    let playerExpenseField = document.getElementById('playerExpenses');
    let playerExpense = parseInt(playerExpenseField.innerText);
    
    let managerCostField = document.getElementById('managerCost');
    let managerCost = parseInt(managerCostField.value);
    
    let coachCostField = document.getElementById('coachCost');
    let coachCost = parseInt(coachCostField.value);
    
    if ((isNaN(managerCostField.value) || managerCostField.value === '') || (isNaN(coachCostField.value) || coachCostField.value === '')){
        alert('Please put the numbers');
        managerCostField.value = '';
        coachCostField.value = '';

        return;
    }
    let totalCost = playerExpense + managerCost+ coachCost;
    let calculateTotalField = document.getElementById('calculateTotalExpenses');
    calculateTotalField.innerText = totalCost;
})