

const btnStartGame = document.getElementById('btnStartGame');

var bet11=0;
var bet22=0;
var bet33=0;
var id11="";
var id22="";
var id33="";
var dice1=0;
var winneraux="";

var idg1 = "";
var idg2 = "";
var idg3 = "";

var name1 = "";
var name2 = "";
var name3 = "";


const dice = ()=>{
 const number =  Math.floor(Math.random()*(7-1)) + 1;
 return number;

};

dice1 = dice();

console.log(dice1);

// const findWinner = () => {

//     fetch('http://localhost:3000/game/ffff-ggg-hh/winner/data')
//         .then(res => res.json())
//         .then(gamers => {

           
           
//              idg1 = gamers[0].idGamer;
//              idg2 = gamers[1].idGamer;
//              idg3 = gamers[2].idGamer;
             

            

//              name1 = gamers[0].nameGamer;
//             name2 = gamers[1].nameGamer;
//              name3 = gamers[2].nameGamer;

//              //console.log(winnerprueba())

//         }).then(()=>{
//             if (idg1 === winneraux) {
//                 return name1;
//             } else if (idg2 === winneraux) {
//                 return name2;
//             } else if (idg3 === winneraux) {
//                 return name3;
//             }else {
//                 return "Sin ganador";
//             }

//         })

     
// };

const findWinner = async() => {

   const res = await fetch('http://localhost:3000/game/ffff-ggg-hh/winner/data');
   const gamers = await res.json();

   idg1 = gamers[0].idGamer;
  idg2 = gamers[1].idGamer;
  idg3 = gamers[2].idGamer;
             

            

   name1 = gamers[0].nameGamer;
     name2 = gamers[1].nameGamer;
      name3 = gamers[2].nameGamer;

             console.log(idg1,idg2,idg3)
     
            if (idg1 === winneraux) {
                return name1;
            } else if (idg2 === winneraux) {
                return name2;
            } else if (idg3 === winneraux) {
                return name3;
            }else {
                return "Sin ganador";
            }

        

     
};

const getBets = async ()=>{
   const res = await fetch('http://localhost:3000/game/ffff-ggg-hh/bets')
   const gamerBet = await res.json();

   bet11 = gamerBet[0].bet;
   bet22 = gamerBet[1].bet;
   bet33 = gamerBet[2].bet;

   id11 = gamerBet[0].idGamer;
   id22 = gamerBet[1].idGamer;
   id33 = gamerBet[2].idGamer;

   console.log(bet11,bet22,bet33);
   console.log(id11,id22,id33);
   winneraux =  winner();
   console.log(winneraux);
   console.log(await findWinner());

    
    


};

// const getBets = ()=>{
//     fetch('http://localhost:3000/game/ffff-ggg-hh/bets')
//     .then(res => res.json())
//     .then(gamerBet => {

      
       
//         bet11 = gamerBet[0].bet;
//         bet22 = gamerBet[1].bet;
//         bet33 = gamerBet[2].bet;

//         id11 = gamerBet[0].idGamer;
//         id22 = gamerBet[1].idGamer;
//         id33 = gamerBet[2].idGamer;

//         console.log(bet11,bet22,bet33);
//         console.log(id11,id22,id33);
//         winneraux = winner();
//         console.log(winneraux);
//         //console.log(findWinner());
        

//     }).then(()=>{console.log(findWinner())})


// };



const winner = ()=>{
    for (let i = 0; i < 3; i++) {
        if (bet11 === dice1) {
            return id11;
        } else if (bet22 === dice1) {
            return id22;
        } else if (bet33 === dice1) {
            return id33;
        }else {
            return "Sin ganador";
        }
        
    }
};

getBets();






// const eventb = () => {

//     const name1 = document.getElementById('name1');

  
// };




//btnStartGame.addEventListener('click', findWinner);