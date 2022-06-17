const btnStartGame = document.getElementById('btnStartGame');

var id1 = 0;
var id2 = 0;
var id3 = 0;


const fillData = () => {

    const name1 = document.getElementById('name1');

    fetch('http://localhost:3000/startGame/data')
        .then(res => res.json())
        .then(data => {
            console.log(data[0].gamers[0].nameGamer);
            const name1aux = data[0].gamers[0].nameGamer;
            name1.value = name1aux;
            id1 = data[0].gamers[0].idGamer;
            id2 = data[0].gamers[1].idGamer;
            id3 = data[0].gamers[2].idGamer;

        })
};


const eventb = () => {
    const bet1 = document.getElementById('name1').value;
    const bet2 = document.getElementById('name2').value;
    const bet3 = document.getElementById('name3').value;

    const data = {
        
      
        "gamerBet":[{"idGamer":id1,"bet":bet1},{"idGamer":id2,"bet":bet2},{"idGamer":id3,"bet":bet3}]
      
    }

    fetch('http://localhost:3000/startGame', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),


    })
        .then(res => res.json())
        .then(data => console.log(data))





};

fillData();

btnStartGame.addEventListener('click', eventb);