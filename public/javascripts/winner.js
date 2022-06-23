/**
 * Importación de elmentos del html para manejarlos dinámicamente.
 */
const btnStartGame = document.getElementById('btnNewGame');
const lblwinner = document.getElementById('winner');

/**
 * Función para mostrar el nombre del ganador del juego en cuanto este finalice.
 */
const showWinner = async() => {
    const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/winner/data');
    const winner = await res.json();
    const nameGamer = winner.nameGamer;
    lblwinner.innerText = "El ganador del juego es " + nameGamer;

};

showWinner();

/**
 * Evento cliclk del botón Nuevo juego.
 */
btnNewGame.addEventListener('click', ()=>{window.location.href = "http://localhost:3000/createGame"});