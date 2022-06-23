/**
 * Extracción de los distintos elementos de HTML para manipularlos.
 */
const name1Table = document.getElementById('name1');
const name2Table = document.getElementById('name2');
const name3Table = document.getElementById('name3');
const id1Table = document.getElementById('id1');
const id2Table = document.getElementById('id2');
const id3Table = document.getElementById('id3');
const nameWinner = document.getElementById('nameWinner');
const idWinner = document.getElementById('idWinner');
const lblProgress = document.getElementById('lblProgress');
/**
 * Declaración de algunas variables para guardar datos traidos desde las APIS.
 */
var name1 = "";
var name2 = "";
var name3 = "";
var id1 = "";
var id2 = "";
var id3 = "";
/**
 * Función para llenar la tabla que contiene información de los jugadores que están activos.
 */
const fillData = async() => {

    await fetch('http://localhost:3000/startGame/data')
        .then(res => res.json())
        .then(data => {
            name1 = data[0].gamers[0].nameGamer;
            name2 = data[0].gamers[1].nameGamer;
            name3 = data[0].gamers[2].nameGamer;

            id1 = data[0].gamers[0].idGamer;
            id2 = data[0].gamers[1].idGamer;
            id3 = data[0].gamers[2].idGamer;

        });

        name1Table.innerText = name1;
        name2Table.innerText = name2;
        name3Table.innerText = name3;

        id1Table.innerText = id1;
        id2Table.innerText = id2;
        id3Table.innerText = id3;
};
/**
 * Ejecución de la función fillData.
 */
fillData();
/**
 * Función para llenar información sobre el ganador del juego.
 */
const fillWinner = async() => {
    const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/winner/data');
    const winner = await res.json();

    const name = winner.nameGamer;
    const id = winner.idGamer;

    nameWinner.innerText = name;
    idWinner.innerText = id;
   

   

};
/**
 * Ejecución de la función fillWinner.
 */
fillWinner();
/**
 * Función para llenar información sobre el progreso del juego.
 */
const fillProgress = async() => {
    const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/status');
    const progress = await res.json();
 
    lblProgress.innerText = progress;

};
/**
 * Ejecución de la función fillProgress.
 */
fillProgress();