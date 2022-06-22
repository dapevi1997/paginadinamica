/**
 * Extracción de los distintos elementos de HTML para manipularlos.
 */
const btnSaveBets = document.getElementById('btnSaveBets');
const btnDice = document.getElementById('btnDice');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const diceLabel = document.getElementById('diceResult');
const lblNoWinner = document.getElementById('lblNoWinner');

/**
 * Variables para almacenar los datos extraidos por las APIS.
 */
var id1 = 0;
var id2 = 0;
var id3 = 0;
var bet1=0 ;
var bet2=0;
var bet3=0;
var diceResult = 0;
var name1aux = "";
var name2aux = "";
var name3aux = "";


/**
 * Función para iniciar mostara en el HTML información sobre el dado que se va a utilzar en el juego.
 */
const init = async() => {
    btnDice.disabled = true;

    try {
        await fetch('http://localhost:3000/dice/init', {
            method: 'POST'
        })
    } catch (error) {
        
    }
  

    await fetch(`http://localhost:3000/dice/0`, {
        method: 'PATCH'

    })


};
/**
 * Inicio de la función para mostrar inforamción sobre el dado.
 */
init();

const fillDiceLabel = async() => {

    const res =await fetch('http://localhost:3000/dice/result');
    const data = await res.json();

    diceLabel.innerText = data;
     
};
fillDiceLabel();

/**
 * Función para llenar los labels de los inputs en el HTML para que el usuario sepa a cuál jugador
 * corresponde determinada apuesta.
 */
const fillData = () => {

    fetch('http://localhost:3000/startGame/data')
        .then(res => res.json())
        .then(data => {
             name1aux = data[0].gamers[0].nameGamer;
             name2aux = data[0].gamers[1].nameGamer;
             name3aux = data[0].gamers[2].nameGamer;
            label1.innerText = "Apuesta de " + name1aux;
            label2.innerText = "Apuesta de " + name2aux;
            label3.innerText = "Apuesta de " + name3aux;

            id1 = data[0].gamers[0].idGamer;
            id2 = data[0].gamers[1].idGamer;
            id3 = data[0].gamers[2].idGamer;

        })
};
/**
 * Llamado de la función para llenar los labels de los inputs de las apuestas.
 */
fillData();
/**
 * Función para mostrar las apuestas que estén al momento en la base de datos de los jugadores.
 */
// const getBets = async () => {
//     try {
//         const res = await fetch('http://localhost:3000/game/fffff-ggg-jjjjj/bets')
//         const gamerBet = await res.json();

//         bet1 = gamerBet[0].bet;
//         bet2 = gamerBet[1].bet;
//         bet3 = gamerBet[2].bet;

//         name1.value = bet1;
//         name2.value = bet2;
//         name3.value = bet3;
//     } catch (error) {

//     }



// };
// /**
//  * Llamado de la función para llenar inputs en caso de haber apuestas guardadas.
//  */
// getBets();

/**
 * Función que se ejecuta al momento de pultar el botón Guardar Apuestas.
 */
const eventb = async(e) => {
    e.preventDefault();

     bet1 = document.getElementById('name1').value;
     bet2 = document.getElementById('name2').value;
     bet3 = document.getElementById('name3').value;

    // const bet1 = document.getElementById('name1').value;
    // const bet2 = document.getElementById('name2').value;
    // const bet3 = document.getElementById('name3').value;

    const data = {
        "gamerBet": [{ "idGamer": id1, "bet": bet1 }, { "idGamer": id2, "bet": bet2 }, { "idGamer": id3, "bet": bet3 }]
    }

    await fetch('http://localhost:3000/startGame', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),


    })
        

    name1.disabled = true;
    name2.disabled = true;
    name3.disabled = true;
    btnSaveBets.disabled = true;
    btnDice.disabled = false;

};

const dice = async() => {
    const number =  Math.floor( Math.random() * (7 - 1)) + 1;
    return number;

};

const eventbtnDice = async (e) => {
    e.preventDefault();

    // name1.disabled = true;
    // name2.disabled = true;
    // name3.disabled = true;
    btnDice.disabled = false;

    // try {
    //    await  getBets();
    // } catch (error) {
    //     console.log('revisar getbets')
    // }
    

    // console.log(bet1,bet2,bet3)

    diceResult = await dice();

   // await fillDiceLabel();
    diceLabel.innerText = diceResult;
    console.log(diceResult);


    // await fetch(`http://localhost:3000/dice/${diceResult}`, {
    //     method: 'PATCH'

    // })
    console.log(bet1,bet2,bet3)

    if (diceResult == bet1) {
        await fetch(`http://localhost:3000/winner/${id1}/${name1aux}`, {
            method: 'PATCH'

        });
        await fetch(`http://localhost:3000/game/fffff-ggg-jjjjj/false`, {
            method: 'PATCH'
    
        });
         btnDice.disabled = true;
         window.location.href = "http://localhost:3000/game/fffff-ggg-jjjjj/winner";
         console.log(id1);
    } else if (diceResult == bet2) {
        await fetch(`http://localhost:3000/winner/${id2}/${name2aux}`, {
            method: 'PATCH'

        });
        await fetch(`http://localhost:3000/game/fffff-ggg-jjjjj/false`, {
            method: 'PATCH'
    
        });
         btnDice.disabled = true;
         window.location.href = "http://localhost:3000/game/fffff-ggg-jjjjj/winner";
         console.log(id2);
    } else if (diceResult == bet3) {
        await fetch(`http://localhost:3000/winner/${id3}/${name3aux}`, {
            method: 'PATCH'

        });
        await fetch(`http://localhost:3000/game/fffff-ggg-jjjjj/false`, {
            method: 'PATCH'
    
        });

         btnDice.disabled = true;
         window.location.href = "http://localhost:3000/game/fffff-ggg-jjjjj/winner";
         console.log(id3);
    } else {
        
        alert(' Nadie gana, vuelva a lanzar el dado');
        

        console.log('pc');
    }

    

};





btnSaveBets.addEventListener('click', eventb);
btnDice.addEventListener('click', eventbtnDice);