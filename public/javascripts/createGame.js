const btnCreateGame = document.getElementById('btnCreateGame');


const eventb = () => {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const name3 = document.getElementById('name3').value;
    console.log(name1)
    const data = {
        
        "gamer": [
            "dan",
            "adf"
        ],
        "gamers":[{"nameGamer":name1,"idGamer":"l"},{"nameGamer":name2,"idGamer":"j"},{"nameGamer":name3,"idGamer":"o"}]
      
    }


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