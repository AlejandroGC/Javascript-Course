// Challenge 1: Your Age in Days

function ageInDays(){
    var birthYear = prompt('What year where you born?');
    var equation = (2020 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + equation + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "static/images/giphy.gif";
    div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
    var humanChoice, botChoice
    humanChoice = yourChoice.id;
    botChoice = 
    results = decideWinner(humanChoice, botchoice);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function decideWinner(humanChoice, botChoice) {

}