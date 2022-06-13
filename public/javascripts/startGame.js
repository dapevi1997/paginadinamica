const btnCreateGame = document.getElementById('btnStartGame');


const eventb = () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const name3 = document.getElementById('name3').value;
    console.log(name1)
    const data = { gamer: [name1, name2, name3] };


    fetch('http://localhost:3000/createGame', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),


    })
        .then(res => res.json())
        .then(data => console.log(data))


};

btnCreateGame.addEventListener('click', eventb);