const btnCreateGame = document.getElementById('btnCreateGame');

const clearDbGamer = () => {
    fetch('http://localhost:3000/game/gamers/fffff-ggg-jjjjj', {
        method: 'DELETE'
    })

};

const clearDbBet = () => {
    fetch('http://localhost:3000/game/bets/fffff-ggg-jjjjj', {
        method: 'DELETE'
    })

};

const startGame = () => {
    window.location.href = "http://localhost:3000/startGame";

};



const eventb = async () => {

    clearDbGamer();
    clearDbBet();

    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const name3 = document.getElementById('name3').value;

    const data = {

        "gamers": [
            { "nameGamer": name1, "idGamer": "5257b4d6-5c87-4871-93c3-b2b9ce04d706" },
            { "nameGamer": name2, "idGamer": "8dda6205-f54c-4643-a017-71b6f0353319" },
            { "nameGamer": name3, "idGamer": "e5834d8e-5195-41fc-993e-c731dbce4fab" }]

    }
    console.log(name1)

    const res = await fetch('http://localhost:3000/createGame', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

    var { message } = await res.json();

    console.log(message);

    if (message === 'Error') {
        alert('¡Debe ingresar los nombres!')
    } else {
        startGame();
    }





};

btnCreateGame.addEventListener('click', eventb);