
const btnStartGame = document.getElementById('btnNewGame');
const lblwinner = document.getElementById('winner');

var bet11 = 0;
var bet22 = 0;
var bet33 = 0;
var id11 = "";
var id22 = "";
var id33 = "";
var dice1 = 0;
var winneraux = "";

var idg1 = "";
var idg2 = "";
var idg3 = "";

var name1 = "";
var name2 = "";
var name3 = "";














const showWinner = async() => {
    const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/winner/data');
    const winner = await res.json();
    const nameGamer = winner.nameGamer;
    lblwinner.innerText = "El ganador del juego es " + nameGamer;

    console.log(winner);
   



};

showWinner();


//btnNewGame.addEventListener('click', eventb);