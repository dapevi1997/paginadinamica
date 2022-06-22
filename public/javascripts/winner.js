
const btnStartGame = document.getElementById('btnNewGame');
const lblwinner = document.getElementById('winner');


const showWinner = async() => {
    const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/winner/data');
    const winner = await res.json();
    const nameGamer = winner.nameGamer;
    lblwinner.innerText = "El ganador del juego es " + nameGamer;

    console.log(winner);
   



};

showWinner();


btnNewGame.addEventListener('click', ()=>{window.location.href = "http://localhost:3000/createGame"});